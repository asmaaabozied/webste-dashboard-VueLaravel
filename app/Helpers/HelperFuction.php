<?php

namespace App\Helpers;

use App\Notifications\ShamelSMSService;
use App\User;


/**
 * @param string $message
 * @return array|\Illuminate\Contracts\Translation\Translator|string|null
 * @author karam mustafa
 */
function myTrans($message)
{
    return trans('response.' . $message) ?? $message;
}

/**
 * @return array
 * @author karam mustafa
 */
function managerRoles(): array
{
    return [
        'system_manager',
        'admin',
        'maintenance_manager',
        'installation_manager',
        'consulting_manager',
        'hr_manager',
        'technical_manager',
        'sales_manager',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function mainManagerRoles(): array
{
    return [
        'system_manager',
        'admin',
    ];
}

/**
 * @param $rule
 * @return array
 * @author karam mustafa
 */
function getOrderEditRequest($rule)
{
    if ($rule == 'not_required') return [];
    $arr = [
        "status" => "$rule | required|numeric|min:0|max:6",
        "price" => "$rule|numeric",
        "payment_method" => "$rule |numeric|min:0|max:2",
        "discountCode" => "$rule",
        //        "employee_id" => "$rule|exists:employees,id",
        "rejected_desc" => 'required_if:status,4',
    ];
    return $arr;
}

/**
 * @return array
 * @author karam mustafa
 */
function managerOrderRole(): array
{
    return [
        'system_manager',
        'admin',
        'maintenance_manager',
        'installation_manager',
        'technical_manager',
        //
        'consulting_manager',
        //
        'hr_manager',
        'sales_manager',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function maintenanceOrderRole(): array
{
    return [
        'system_manager',
        'admin',
        'maintenance_manager',
        'technical_manager',
        'gallery',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function hardOrderRoleWithEmployee(): array
{
    return [
        'system_manager',
        'admin',
        'maintenance_manager',
        'technical_manager',
        'installation_manager',
        'technical',
        'consulting_employee',
        'consulting_manager',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function hardOrderRoleWithoutEmployee(): array
{
    return [
        'system_manager',
        'admin',
        'maintenance_manager',
        'technical_manager',
        'installation_manager',
        'consulting_manager',
        'store'
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function jobAppOrderRole(): array
{
    return [
        'system_manager',
        'admin',
        'hr_manager',
        'customer'
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function installmentOrderRole(): array
{
    return [
        'system_manager',
        'admin',
        'technical_manager',
        'installation_manager',
        'gallery', 'customer',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function orderType()
{
    return [
        "maintenance_order",
        "prevention_maintenance_order",
        "consultant_order",
        "job_application_order",
        "installment_order",
        "order_review_order",
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function managerAndDepartment()
{
    return [
        'maintenance_manager' => 'maintenance',
        'installation_manager' => 'installation',
        'consulting_manager' => 'consulting',
        'technical_manager' => 'technical',
        'hr_manager' => 'hr',
        'sales_manager' => 'sales',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function managerAndOrderType()
{
    return [
        "maintenance_order" => 'maintenance_manager',
        "prevention_maintenance_order" => 'maintenance_manager',
        "order_review_order" => 'maintenance_manager',
        "consultant_order" => 'consulting_manager',
        "job_application_order" => 'hr_manager',
        "installment_order" => 'installation_manager',
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function getAvailableCurrency()
{
    return [
        "SAR"
    ];
}

/**
 * @param $lang
 * @param $key
 * @param $type
 * @param string $word
 * @return mixed
 * @author karam mustafa
 */
function transMessage($lang, $key, $type, $word = '', $id = null)
{
    $orderTypeAr = [
        'installment order' => 'طلب تركيب ',
        'prevention maintenance order' => 'طلب صيانة وقائية ',
        'job application order' => 'طلب توظيف ',
        'consultant order' => 'طلب استشارة ',
        'maintenance order' => 'طلب صيانة ',
        'order review order' => 'طلب مراجعة طلب ',
    ];
    if ($lang == 'ar') {
        if (array_key_exists($word, $orderTypeAr)) {
            $word = " " . $orderTypeAr[$word] . " ";
        }
    }
    $arr = [
        "ar" => [
            "PublicMessage" => [
                "create_manger" => " هنالك${word} جديد ",
                "create" => is_null($id) ? " تم بنجاح استلام ${word}" :  " تم بنجاح استلام${word} ورقم الطلب هو ${id}",
                "update" => is_null($id) ?    " تحديث${word}" : " تحديث${word} تم بنجاح ورقم الطلب هو ${id}",
                "delete" => " حذف ${word} تم بنجاح ورقم الطلب هو ${id}",
                "finish_order" => " تم الانتهاء من ${word} بنجاح ورقم الطلب هو ${id}",
            ],
            'order' => [
                "order_rejected" => " تم رفض الطلب بسبب : ${word} ورقم الطلب هو ${id}",
                "order_accepted" => " تم قبول الطلب : ${word} ورقم الطلب هو ${id}",
                "under_maintenance" => "تم قبول لطلب وهو تحت الصيانة لان ورقم الطلب هو ${id}",
                "order_works_by_emp" => " طلب يتم العمل عليه الان من قبل الموظف ${word} ",
                "new_order" => " يوجد طلب ${word} جديد ورقم الطلب هو ${id} ",
                "create_order_review_order" => "طلبك لمرجاعة طلب سابق تم بنجاح ، سنقوم بالتواصل معك قريبا ورقم الطلب هو ${id}",
                "price_order_change" => " تم تحديث الكلفة للطلب وهي الان : $word ورقم الطلب هو ${id} ",
                "price_order_change_manager" => " تحديث الكلفة الى ${word}   تم بنجاح ورقم الطلب هو ${id} ",
                "finish_order_client" => " انهاء طلبك ${word} تم بنجاح يرجى تقييم هذه الخدمة  ورقم الطلب هو ${id} ",
                "create_hr" => "طلب التوظيف تم بنجاح وسنقوم بالتوصل معك قريبا",
                "payment_method_order_change_manager" => " تم تغيير طريقة الدفع للطلب $word من قبل الزبون ",
                "order_canceled_by_client" => " تم الغاء الطلب من قبل الزبون بسبب : $word ورقم الطلب هو ${id}",
                "order_canceled_finished_by_technical" => "تم انتهاء طلب جديد من قبل الفني",
                "order_appointment_change" => "تم تغير موعد الطلب ورقمه ${id}",
                "order_restart"=> "${id} تم اعادة تفعيل الطلب ورقمه "
            ],
            "spare_part" => [
                "add_new" => " طلب الصيانة برقم id :$word تم اضافة قطعة تبديل بنجاح "
            ],
            "fees" => [
                "add_new" => " تم بنجاح اضافة اجر جديد الى طلب الصيانو برقم id $word"
            ],
            "maintenance_order" => [
                "without_warranty" => " تم بنجاح تحويل طلب الصيانة برقم id الى طلب صيانة بدون ضمان$word"
            ],
            "employee_to_order" => [
                "add_new_employee_message_for_customer" => " تم بنجاح اضافة موظف جديد الى الطلب برقم id$word",
                "add_new_employee_message_for_manager" => "تم بنجاح اضافة الموظف الى الطلب"
            ],
            "transaction" => [
                "add_new_product_for_customer" => "تمت بنجاح عملية المناقلة من اجل المنتج الذي تم شرائه",
                "add_new_product_for_managers" => " تمت بنجاح عملية المناقلة من اجل المنتج الذي تم شرائه من قبل الزبون $word",
                "add_new_maintenance_order_for_customer" => "تمت بنجاح عملية المناقلة من اجل طلب الصيانة",
                "add_new_maintenance_order_for_managers" => " تمت بنجاح عملية المناقلة من اجل طلب الصيانة الخاص بالزبون $word",
            ],
            "payment" => [
                "success_payment" => "تم بنجاح عملية الدفع",
                "success_payment_for_manager" => " : تم بنجاح عملية الدفع من قبل الزبون  $word",
            ],
        ],
        "en" => [
            "PublicMessage" => [

                "create_manger" => "please note that is maybe there is new ${word} .",
                "create" => is_null($id) ? "place ${word} successfully" : "place ${word} successfully and the order number is ${id}",
                "update" => is_null($id) ? "update your ${word} order successfully" : "update your ${word} order successfully and the order number is ${id}",
                "delete" => is_null($id) ? "delete your ${word} order successfully" : "delete your ${word} order successfully and the order number is ${id}",
                "finish_order" => is_null($id) ? "${word} order finish" : "${word} order finish and the order number is ${id}",
                "order_rejected" => is_null($id) ? " order rejected because : ${word}" : " order rejected because : ${word} and the order number is ${id}",
            ],
            'order' => [
                "order_accepted" => "${word} order accepted and the order number is ${id}",
                "order_rejected" => "${word} order finish",
                "under_maintenance" => "order now is accepted by technical manager and its under maintenance now and the order number is ${id}",
                "order_works_by_emp" => "Your order is now being worked on by the employee ${word}",
                "new_order" => "there is new order ${word} and the order number is ${id}",
                "price_order_change" => "please not that price for you with id is now $word and the order number is ${id}",
                "price_order_change_manager" => "change price  with id  to  $word successfully and the order number is ${id}",
                "create_order_review_order" => "your order to review order successfully , and we will contact with you and the order number is ${id}",
                "finish_order_client" => "your ${word} finished , please rate this service and the order number is ${id}",
                "create_hr" => "place job application order successfully ,  we will contact with you soon",
                "payment_method_order_change_manager" => "customer change payment method for order $word",
                "order_canceled_by_client" => "the order has been canceled by customer and the reason : $word and the order number is ${id}",
                "order_canceled_finished_by_technical" => "the order has been finished by technical",
                "order_appointment_change" => "The date and number of the request have changed ${id}",
                "order_restart"=> " The request has been re-activated and numbered ${id} "


            ],
            "spare_part" => [
                "add_new" => "maintenance order with id $word added new spare part"
            ],
            "fees" => [
                "add_new" => "maintenance order with id $word added new fees"
            ],
            "maintenance_order" => [
                "without_warranty" => "request to change maintenance oder with id $word to without warranty successfully"
            ],
            "employee_to_order" => [
                "add_new_employee_message_for_customer" => " add new employee to your order which has id $word",
                "add_new_employee_message_for_manager" => "add employee to maintenance order success"
            ],
            "transaction" => [
                "add_new_product_for_customer" => "Your transaction for your product was successful",
                "add_new_product_for_managers" => "Your transaction was successful for product for customer $word",
                "add_new_maintenance_order_for_customer" => "Your transaction for your maintenance order was successful",
                "add_new_maintenance_order_for_managers" => "Your transaction was successful for  maintenance order for customer $word",
            ],
            "payment" => [
                "success_payment" => "Your payment for your product was successful",
                "success_payment_for_manager" => "payment for product was successful by customer $word",
            ],
        ],
    ];
    return $arr[$lang][$key][$type];
}

/**
 * @return array
 * @author karam mustafa
 */
function getAllPermission()
{
    return [
        "users" => "c,ra,rc,u,d,cc",
        "failed_jobs" => "c,ra,rc,u,d,cc",
        "departments" => "c,ra,rc,u,d,cc",
        "workshops" => "c,ra,rc,u,d,cc",
        "cars" => "c,ra,rc,u,d,cc",
        "galleries" => "c,ra,rc,u,d,cc",
        "consultant_orders" => "c,ra,rc,u,d,cc",
        "country_inxes" => "c,ra,rc,u,d,cc",
        "city_inxes" => "c,ra,rc,u,d,cc",
        "role_inxes" => "c,ra,rc,u,d,cc",
        "employees" => "c,ra,rc,u,d,cc",
        "spare_parts" => "c,ra,rc,u,d,cc",
        "employee_alerts" => "c,ra,rc,u,d,cc",
        "customers" => "c,ra,rc,u,d,cc",
        "customer_alerts" => "c,ra,rc,u,d,cc",
        "discount_codes" => "c,ra,rc,u,d,cc",
        "installment_orders" => "c,ra,rc,u,d,cc",
        "ratings" => "c,ra,rc,u,d,cc",
        "orders" => "c,ra,rc,u,d,cc",
        "product_categories" => "c,ra,rc,u,d,cc",
        "products" => "c,ra,rc,u,d,cc",
        "carts" => "c,ra,rc,u,d,cc",
        "cart_products" => "c,ra,rc,u,d,cc",
        "offers" => "c,ra,rc,u,d,cc",
        "offer_products" => "c,ra,rc,u,d,cc",
        "transactions" => "c,ra,rc,u,d,cc",
        "invoices" => "c,ra,rc,u,d,cc",
        "work_ins" => "c,ra,rc,u,d,cc",
        "delivery_orders" => "c,ra,rc,u,d,cc",
        "order_spare_parts" => "c,ra,rc,u,d,cc",
        "job_application_orders" => "c,ra,rc,u,d,cc",
        "prevention_maintenance_orders" => "c,ra,rc,u,d,cc",
        "maintenance_orders" => "c,ra,rc,u,d,cc",
        "messages" => "c,ra,rc,u,d,cc",
        "advertisements" => "c,ra,rc,u,d,cc",
        "images" => "c,ra,rc,u,d,cc",
        "order_review_orders" => "c,ra,rc,u,d,cc",
        "suggestions" => "c,ra,rc,u,d,cc",
        "fees" => "c,ra,rc,u,d,cc",
        "maintenance_order_fees" => "c,ra,rc,u,d,cc",
        "show_suggestion" => "ra,rc",
        "topics" => "c,ra,rc,u,d,cc",
    ];
}

/**
 * @return array
 * @author karam mustafa
 */
function getRoles()
{
    $allPermisions = getAllPermission();
    $roles = [
        "system_manager" => $allPermisions,
        "admin" => [],

        "maintenance_manager" => [
            "messages" => "c,ra,rc,u,d,cc",
            "maintenance_orders" => "c,ra,rc,u,d,cc",
            "discount_codes" => "c,ra,rc,u,d,cc",
            "fees" => "c,ra,rc,u,d,cc",
            "cars" => "c,ra,rc,u,d,cc",
            "work_ins" => "c,r,d",
            "advertisements" => "c,ra,rc,u,d,cc",


        ],

        "installation_manager" => [
            "messages" => "c,ra,rc,u,d,cc",
            "work_ins" => "c,r,d",
            "discount_codes" => "c,ra,rc,u,d,cc",
            "advertisements" => "c,ra,rc,u,d,cc",


        ],
        "technical_manager " => [
            "messages" => "c,ra,rc,u,d,cc",
            "maintenance_orders" => "c,ra,rc,u,d,cc",
            "fees" => "c,ra,rc,u,d,cc",
            "discount_codes" => "c,ra,rc,u,d,cc",
            "order_spare_parts" => "c,ra,rc,u,d,cc",

        ],
        "technical" => [
            "messages" => "c,ra,rc,u,d,cc",
            "order_spare_parts" => "c",

        ],

        "consulting_manager" => [
            "messages" => "c,ra,rc,u,d,cc",
            "discount_codes" => "c,ra,rc,u,d,cc",
        ],
        "consulting_employee" => [
            "messages" => "c,ra,rc,u,d,cc"
        ],

        "hr_manager" => [
            "messages" => "c,ra,rc,u,d,cc",
            "discount_codes" => "c,ra,rc,u,d,cc",
        ],

        "sales_manager" => [
            "messages" => "c,ra,rc,u,d,cc",
            "discount_codes" => "c,ra,rc,u,d,cc",
            "product_categories" => "c,d",
            "products" => "c,ra,rc,u,d,cc"
        ],

        "customer" => [
            "customers" => "r,u,d",
            "installment_orders" => "c",
            "orders" => "c",
            "delivery_orders" => "c",
            "carts" => "c,ra,rc,u,d,cc",
            "cart_products" => "c,ra,rc,u,d,cc",
            "job_application_orders" => "c",
            "prevention_maintenance_orders" => "c",
            "maintenance_orders" => "c",
            "order_review_orders" => "c",
            "transactions" => "c"
        ],
        "gallery" => [
            "messages" => "c,ra,rc,u,d,cc",
            "installment_orders" => "c",
            "ratings" => "c",
            "galleries" => "c,r"
        ],

    ];
    return $roles;
}

/**
 * @param $arr
 * @return array
 * @author karam mustafa
 */
function getPermissionFormArray($arr)
{
    $myArr = [];
    foreach ($arr as $index => $item) {
        $myArr2 = [];
        $ex_item = explode("", "", $item);
        if (in_array("c", $ex_item, true)) {
            array_push($myArr2, "create_" . $index);
        }
        if (in_array("ra", $ex_item, true)) {
            array_push($myArr2, "read_all_" . $index);
        }
        if (in_array("rc", $ex_item, true)) {
            array_push($myArr2, "read_custom_" . $index);
        }
        if (in_array("u", $ex_item, true)) {
            array_push($myArr2, "update_" . $index);
        }
        if (in_array("d", $ex_item, true)) {
            array_push($myArr2, "delete_" . $index);
        }
        $myArr += [$index => $myArr2];
    }
    return $myArr;
}

/**
 * @param $class
 * @param $id
 * @return mixed
 */
function getUserFromOrder($class, $id)
{
    return $class::findOrfail($id)->order->user_id;
}


/**
 * @param string $phoneNumber The phone number to send the confirmation to
 * @param int $keyLength The confirmation key length (default is 7)
 * @return string The confirmation key sent
 * @throws \Exception
 * @author karam mustafa
 */
function sendConfirmationKey(string $phoneNumber, int $keyLength = 6): string
{
    $confirmationKey = generateConfirmationKe($keyLength);
    $confirmationMessage = "$confirmationKey is your Inmaa verification code";
    ShamelSMSService::send($phoneNumber, $confirmationMessage);
    return $confirmationKey;
}

/**
 * @param int $length The length of the key to be generated
 * @return string The key generated
 * @throws \Exception
 * @author karam mustafa
 */
function generateConfirmationKe(int $length): string
{
    $numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    $key = "";
    for ($i = 0; $i < $length; $i++) {
        $key .= $numbers[random_int(0, 9)];
    }
    return $key;
}



function userHasRole(User $user, array $roles): bool
{
    $userRole = $user->role;

    return in_array($userRole, $roles);
}
