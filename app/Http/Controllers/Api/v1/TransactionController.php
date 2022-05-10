<?php

namespace App\Http\Controllers\Api\v1;

use App\CartProduct;
use App\DiscountCode;
use App\Exceptions\PublicException;
use App\Http\Resources\Api\v1\CartProductResource;
use App\MaintenanceOrder;
use App\Product;
use App\Transaction;
use App\Cart;
use App\Http\Controllers\BaseController;
use App\Http\Resources\Api\v1\TransactionResource;
use App\Http\Requests\TransactionStoreRequest;
use App\Http\Requests\TransactionEditRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Response;
use App\InstallmentOrder;

class TransactionController extends BaseController
{

    private $permission_module_name="transaction";

    function __construct()
    {
        $this->tableName = 'transactions';
        parent::__construct();
    }

    public function index()
    {
        try {
            $this->checkUserHasPermission("show",$this->permission_module_name);
            $transactionData = '';
            if (Auth::user()->role == 'customer') {
                $transactionData = Transaction::orderBy('id', 'desc')->where('user_id', Auth::user()->id)->paginate(10);
            } else {
                $transactionData = Transaction::orderBy('id', 'desc')->paginate(10);
            }
            $data = TransactionResource::collection($transactionData);
            return $this->getResponse($data);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function store(TransactionStoreRequest $request)
    {
        try {
            $request->validated();
            $input = $request->all();
            $input['price'] = $this->calculateTotalPrice($input['cart_id']);
            $input['amount'] = -$input['price'];
            $transaction = new Transaction();
            $transaction->cart_id = $input['cart_id'];
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $data = Transaction::create($input);
            return $this->getResponse($data, myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function makeProductTransaction(TransactionStoreRequest $request)
    {
        try {
            $this->checkUserHasPermission("make Product Transaction",$this->permission_module_name);
            $request->validated();
            $input = $request->all();
            $user_id = Auth::user()->id;
            $cart = Cart::where('user_id', '=', $user_id)->where('is_used', '=', 0)->first();
            if (!$cart) {
                return $this->getResponse(null, myTrans('cart_not_found'), 400);
            }
            $data = CartProductResource::collection(
                CartProduct::orderBy('created_at', 'desc')
                    ->where('cart_id', '=', $cart->id)
                    ->getWithOrderByDesc()
            );
            if (count($data) == 0) {
                return $this->getResponse(null, myTrans('cart_empty'), 400);
            }
            foreach ($data as $item) {
                $prod = Product::where('id', '=', $item->product_id)->first();
                $item->setAttribute('product', $prod);
            }
            $total = 0;
            foreach ($data as $item) {
                if ($item->product->offerType == 1) {
                    $total += (((float)$item->product->price - $item->product->offer_rateOrAmount) * $item->quantity);
                    $item->product->setAttribute('priceAfterOffer', (((float)$item->product->price - $item->product->offer_rateOrAmount) * $item->quantity));
                } else if ($item->product->offerType == 0) {
                    $newPrice = $item->product->price - ($item->product->price * ($item->product->offer_rateOrAmount / 100));
                    $total += $newPrice * $item->quantity;
                    $item->product->setAttribute('priceAfterOffer', $newPrice);
                } else {
                    $item->product->setAttribute('priceAfterOffer', $item->product->price);
                }
            }
            $total = number_format((float)$total, 2, '.', '');
            if (isset($input['discount_code'])) {
                $discount = DiscountCode::where('name', '=', $input['discount_code'])->first();
                if (!$discount) {
                    return response('error in discount');
                }
                $date = now();
                $date = strtotime($date);
                if ($date > strtotime($discount->valid_to) || $date < strtotime($discount->valid_from)) {
                    return response(myTrans('invalid_discount_time'));
                }
                if ($discount->type = 1) {
                    $thePrice = $total - $discount->amount;
                } else {
                    $thePrice = $total - $total * ($discount->amount / 100);
                }

                $thePrice = number_format((float)$thePrice, 2, '.', '');
                $trans = Transaction::create([
                    'cart_id' => $cart->id,
                    'discount_code_id' => $discount->id,
                    'price' => $thePrice,
                    'amount' => (-$thePrice),
                    'delivery_method' => $input['delivery_method'],
                    'date' => now()
                ]);
                $cart->update(['is_used' => 1]);
                return $this->getResponse($trans);
            } else {
                $trans = Transaction::create([
                    'cart_id' => $cart->id,
                    'price' => $total,
                    'amount' => (-$total),
                    'delivery_method' => $input['delivery_method'],
                    "user_id" => Auth::user()->id,
                    'date' => now()
                ]);
                $cart->update(['is_used' => 1]);
                $this->sendNotificationToAuthUser([
                    'transaction', 'add_new_product_for_customer', null, $trans->id, "Product"
                ]);
                $this->sendNotificationToManager(null, [
                    'transaction', 'add_new_product_for_managers', Auth::user()->user_name, $trans->id, "Product"
                ]);
                return $this->getResponse($trans);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function makeMaintenanceOrderTransaction($maintenanceOrderId, $withPolicy = true)
    {
        try {
            if ($withPolicy) {
                $this->checkUserHasPermission("make Maintenance Order Transaction",$this->permission_module_name);
            }
            $maintenanceOrder = $this->find(MaintenanceOrder::class, $maintenanceOrderId);
            $order = $maintenanceOrder->order;
            if ($order['payment_method'] == 'undefined value') {
                throw new PublicException(myTrans('payment_not_specified'));
            }
            $transaction = Transaction::where('maintenance_order_id', $maintenanceOrderId)->first();
            if (isset($transaction)) {
                if ($transaction->price == $order->price) {
                    throw new PublicException(myTrans('doing_this_transaction_before'));
                }
                $transaction->update([
                    'price' => $order->getPrice2(),
                    'amount' => (-$order->getPrice2()),
                ]);
                return $this->getResponse(myTrans('edit_success'));
            } else {
                $trans = Transaction::create([
                    'price' => $order->getPrice2(),
                    'amount' => (-$order->getPrice2()),
                    'payment_method' => $order->getAttributes()['payment_method'],
                    'maintenance_order_id' => $maintenanceOrderId,
                    "user_id" => $order->user_id,
                    'date' => now()
                ]);
                return $this->getResponse($trans);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function makeMaintenanceOrderTransactionInstalment($installmentOrderId, $withPolicy = true)
    {
        try {
            if ($withPolicy) {
                $this->checkUserHasPermission("make Maintenance Order Transaction Instalment",$this->permission_module_name);
            }
            $installmentOrder = $this->find(InstallmentOrder::class, $installmentOrderId);
            $order = $installmentOrder->order;
            if ($order['payment_method'] == 'undefined value') {
                throw new PublicException(myTrans('payment_not_specified'));
            }
            $transaction = Transaction::where('Installment_order_id', $installmentOrderId)->first();
            if (isset($transaction)) {
                if ($transaction->price == $order->price) {
                    throw new PublicException(myTrans('doing_this_transaction_before'));
                }
                $transaction->update([
                    'price' => $installmentOrder->maintenanceFee->first()->amount,
                    'amount' => (-$installmentOrder->maintenanceFee->first()->amount),
                ]);
                return $this->getResponse(myTrans('edit_success'));
            } else {
                $trans = Transaction::create([
                    'price' => $installmentOrder->maintenanceFee->first()->amount,
                    'amount' => (-$installmentOrder->maintenanceFee->first()->amount),
                    'payment_method' => $order->getAttributes()['payment_method'],
                    'Installment_order_id' => $installmentOrderId,
                    "user_id" => $order->user_id,
                    'date' => now()
                ]);
                return $this->getResponse($trans);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function show($id)
    {
        try {
            $this->checkUserHasPermission("show",$this->permission_module_name);
            return $this->ShowCustomElement(Transaction::class, $id, TransactionResource::class, myTrans('resource_not_found'));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function update(TransactionEditRequest $request, $id)
    {
        try {
            $request->validated();
            $input = $request->all();
            $transaction = Transaction::find($id);
            //check if this table has custom id
            if (!is_null($transaction)) {
                $this->checkUserHasPermission("update",$this->permission_module_name);
                $transaction->update($input);
                return $this->getResponse(null, myTrans('update_success'), 200);
            } else {
                return $this->getResponse(null, myTrans('resource_not_found'), true, 404);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            return $this->DeleteCustomElement(Transaction::class, $id);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function payTransectio($id)
    {
        try {
            $maintenanceOrder = MaintenanceOrder::find($id);
            $this->checkUserHasPermission("pay tranaction",$this->permission_module_name);
            $order = $maintenanceOrder->order;
            $transaction = Transaction::where('maintenance_order_id', $id)->first();
            if (isset($transaction)) {
                if ($transaction->is_payed_transaction == 1) {
                    return $this->getResponse(myTrans('doing_this_transaction_before'));
                } else {
                    $transaction->update([
                        "is_payed_transaction" => 1,
                    ]);
                }
                return $this->getResponse(myTrans('update_success'));
            } else {
                $trans = Transaction::create([
                    'price' => $order->price,
                    'amount' => (-$order->price),
                    'payment_method' => $order->getAttributes()['payment_method'],
                    'maintenance_order_id' => $id,
                    "user_id" => $order->user_id,
                    "is_payed_transaction" => 1,
                    'date' => now()
                ]);
            }

            return $this->getResponse(null, myTrans('update_success'), true, 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    // here need edit
    public function GetTransactionDetils(Request $req, $id)
    {
        try {
            $this->checkUserHasPermission("show all",$this->permission_module_name);
            $transaction = Transaction::find($id);
            if (is_null($transaction->maintenance_order_id) && is_null($transaction->Installment_order_id)) {
                $data = [
                    'type' => 'product',
                    'products' => [],
                    'total' => $transaction->price,
                ];
                foreach ($transaction->cart->cartsProducts as $product) {
                    $da = [];
                    $da['id'] = $product->product->id;
                    $da['name_en'] = $product->product->name;
                    $da['name_ar'] = $product->product->name_ar;
                    $da['description_en'] = $product->product->description;
                    $da['description_ardescription_ar'] = $product->product->description_ar;
                    $da['quantity'] = $product->quantity;
                    $da['price'] = $product->product->price;
                    array_push($data['products'], $da);
                }
            } else {
                if (!is_null($transaction->Installment_order_id))
                    $order = $transaction->InstallmentOrder;
                else
                    $order = $transaction->maintenanceOrder;

                $price_fees = 0;
                $maintenanceOrder = DB::table('maintenance_orders')
                    ->join('maintenance_order_fees', 'maintenance_orders.id', '=', 'maintenance_order_fees.maintenance_order_id')
                    ->where('order_id', $order->order->id)
                    ->get() ?? DB::table('installment_orders')
                    ->join('maintenance_order_fees', 'installment_orders.id', '=', 'maintenance_order_fees.Installment_order_id')
                    ->where('order_id', $order->order->id)
                    ->get();

                if (isset($maintenanceOrder) && sizeof($maintenanceOrder) > 0) {
                    foreach ($maintenanceOrder as $item) {
                        $price_fees += abs($item->amount) ?? 0;
                    }
                }
                $data = [
                    'type' => 'order',
                    'order_price' => $order->order->getAttributes()['price'],
                    'order_fee' => $order->fee,
                    'order_spareParts' => $order->spareParts,
                    'total' => $transaction->price,
                ];

                if (isset($data['order_fee'][0]))
                    $data['order_fee'][0]->price_fees = $price_fees;

                if (is_null($transaction->Installment_order_id)) {
                    if (MaintenanceOrder::find($transaction->maintenance_order_id)->warranty_type == "with warranty") {
                        foreach ($data['order_spareParts'] as $spare) {
                            $spare['price'] = 0;
                        }
                    }
                }
            }
            if ($req->download) {
                header('Content-Encoding: UTF-8');
                header('Content-type: text/csv; charset=UTF-8');
                header('Content-Disposition: attachment; filename=data.csv');
                echo "\xEF\xBB\xBF";

                $output = fopen("php://output", "w");


                if ($data['type'] == 'order') {
                    if (count($data['order_fee']))
                        fputcsv($output, ["fee"]);
                    foreach ($data['order_fee'] as $line) {
                        $arry = [$line->name, $line->price_fees];
                        fputcsv($output, $arry);
                    }
                    if (count($data['order_spareParts']))
                        fputcsv($output, ["Spare Parts"]);
                    foreach ($data['order_spareParts'] as $line) {
                        $arry = [$line->name, $line->price];
                        fputcsv($output, $arry);
                    }
                    fputcsv($output, ["total", $data['total']]);
                } else {
                    foreach ($data['products'] as $line) {
                        fputcsv($output, [$line->name, $line->price, $line->quantity]);
                    }
                }
                fclose($output);
                return 1;
            }
            return $this->getResponse($data);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function getAccounting()
    {
        try {
            $transaction = collect(DB::table('transactions')
                ->where('user_id', Auth::user()->id)
                ->get());
            $creditAmount = abs(
                $transaction
                    ->where('amount', '<', 0)
                    ->where('is_payed_transaction', 0)
                    ->pluck('amount')
                    ->sum()
            );
            $debitAmount = abs($transaction
                ->where('amount', '>', 0)
                ->pluck('amount')
                ->sum());
            $currentAmount = $debitAmount - $creditAmount;
            return $this->getResponse([
                'credit_amount' => $creditAmount,
                'debit_amount' => $debitAmount,
                'current_amount' => $currentAmount,
            ], 'success response', 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }
}
