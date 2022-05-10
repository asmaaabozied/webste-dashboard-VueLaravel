<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\MessageRequest;
use App\Http\Resources\Api\v2\MessageResource;
use App\Image;
use App\Message;
use Illuminate\Support\Facades\Auth;


class MessageController extends BaseController
{
    protected $imagePath = "files/images/image";
    private $permission_module_name="messages";
    public function __construct()
    {
        $this->tableName = 'messages';
        parent::__construct();
    }


    public function index()
    {
        $user = Auth::user();
        $data = MessageResource::collection(Message::where('user_id' , $user->id)
            ->where('response_message_id' , '!=' , null)
            ->orderBy('created_at', 'desc')
            ->getWithOrderByDesc()
        );
        return $this->getResponse($data);
    }


    public function getAllMessageForAdmin(){
        $this->checkUserHasPermission("get Messages",$this->permission_module_name);
        $data = MessageResource::collection(Message::getWithOrderByDesc());
        return $this->getResponse($data);
    }


    public function store(MessageRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        try {
            $message = Message::create($data);
            if (isset(request()->images)) {
                foreach (request()->images as $item){
                    $input['image'] = $this->SaveFile($item, 'images', null, $this->imagePath);
                    Image::create([
                        'image' => $input['image'],
                        'user_id' => Auth::user()->id,
                        'message_id' => $message->id
                    ]);
                }
            }
        }catch (\Exception $e){
            self::throwException(__CLASS__ , __LINE__ , $e);
        }
        return $this->getResponse(new MessageResource($message), myTrans('add_success'), 200);
    }


    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);
        return $this->ShowCustomElement(Message::class, $id, MessageResource::class, myTrans('resource_not_found'));
    }


    public function update(MessageRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);
        $data = $request->validated();
        $message = Message::findOrFail($id);
        try {
            $data['user_id'] = $message->user_id;
            $data['response_message_id'] = $message->response_message_id;
            $message->update($data);
            if (isset(request()->images)) {
                foreach (request()->images as $item){
                    $input['images'] = $this->SaveFile($item, 'images', null, $this->imagePath);
                    Image::create([
                        'image' => $input['images'],
                        'user_id' => Auth::user()->id,
                        'message_id' => $message->id
                    ]);
                }
            }
        }catch (\Exception $e){
            self::throwException(__CLASS__ , __LINE__ , $e);
        }
        return $this->getResponse($message, myTrans('add_success'), 200);
    }


    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);
        return $this->DeleteCustomElement(Message::class, $id, myTrans('resource_not_found'));
    }
}
