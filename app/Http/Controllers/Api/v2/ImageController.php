<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Helpers\Permissions;
use App\Http\Controllers\BaseController;
use App\Http\Requests\ImageRequest;
use App\Http\Resources\Api\v2\ImageResource;
use App\Image;
use Illuminate\Support\Facades\Auth;

/**
 * Class ImageController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v2
 */
class ImageController extends BaseController
{
    private $path = "files/images/image";

    public function __construct()
    {
        $this->tableName = 'images';
        parent::__construct();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws PublicException
     */
    public function index()
    {
        try {
            $data = ImageResource::collection(Image::getWithOrderByDesc());
            return $this->getResponse($data);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws PublicException
     */
    public function store(ImageRequest $request)
    {
        try {
            $data = $request->all();
            $data['user_id'] = Auth::user()->id;
            $id = [];
            if (!is_array($data['image'])) {
                $data['image'] = $this->SaveFile($request->image, 'image', null, $this->path);
                $data['user_id'] = Auth::user()->id;
                $image = Image::create($data);
                array_push($id, $image->id);
            } else {
                foreach ($data['image'] as $item) {
                    $data2 = [
                        'image' => $this->SaveFile($item, 'image', null, $this->path),
                        'user_id' => Auth::user()->id,
                    ];
                    $image = Image::create($data2);
                    array_push($id, $image->id);
                }

            }
            return $this->getResponse(Image::whereIn('id', $id)->getWithOrderByDesc(), myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->ShowCustomElement(Image::class, $id, ImageResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws PublicException
     */
    public function update(ImageRequest $request, $id)
    {
        try {


            $data = $request->validated();
            $data['user_id'] = Auth::user()->id;
            if (!is_array($data['image'])) {
                $data['image'] = $this->SaveFile($request->image, 'image', null, $this->path);
            } else {
                return $this->getResponse(null, 'you cant update multi image at once - karam', 200);
            }
            Image::find($id)->update($data);
            return $this->getResponse($data, myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws PublicException
     */
    public function destroy($id)
    {
        return $this->DeleteCustomElement(Image::class, $id, myTrans('resource_not_found'));
    }
}
