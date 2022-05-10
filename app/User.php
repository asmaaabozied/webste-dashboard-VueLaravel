<?php

namespace App;

use App\Exceptions\PublicException;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use OwenIt\Auditing\Contracts\Auditable;

class User extends Authenticatable implements Auditable
{
    use LaratrustUserTrait;
    use HasApiTokens, Notifiable,\OwenIt\Auditing\Auditable;

    protected $fillable = [
        'user_name',
        'password',
        'role',
        'fcm_token',
        'is_verified',
        'lang'
    ];

    protected $appends = ['type' , 'phone'];

    protected function getTypeAttribute(){
        $role = ['customer' , 'gallery'];
        if (!in_array( $this->attributes['role'],$role)){
            return "employee" ?? null;
        }
        return $role[array_search($this->attributes['role'] , $role)] ?? null;
    }

    public function getPhoneAttribute()
    {
        try{
            if ($this->getTypeAttribute() == 'gallery') {
                return collect($this->gallery)['phone'] ?? '';
            }
            if ($this->getTypeAttribute() == 'customer') {
                return collect($this->customer)['phone'] ?? '';
            }
            if ($this->getTypeAttribute() == 'employee') {
                return collect($this->employee)['phone'] ?? '';
            }
        }catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    public function UserNotificationToken()
    {
        return $this->hasMany(UserNotificationToken::class);
    }

    protected $hidden = [
        'password'
    ];

    public function setPasswordAttribute($val)
    {
        $this->attributes['password'] = Hash::make($val);
    }

    public function employee()
    {
        return $this->hasOne('App\Employee', 'id');
    }

    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    public function gallery()
    {
        return $this->hasOne(gallery::class);
    }

    public function galleries()
    {
        return $this->hasMany(gallery::class);
    }

    public function cart()
    {
        return $this->hasOne(cart::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function suggestions(){
        return $this->hasMany(Suggestion::class);
    }

    public function confirmationKey()
    {
        return $this->hasOneThrough(ConfirmationKey::class, Customer::class);
    }


    public static function checkUserHasPermission(string $role_name,string $permission_module_name ,int $user_id): bool
    {

        $checkIfUserHasPermission = DB::select('

                            SELECT COUNT(*) as count from permissions
                                    INNER JOIN modules on modules.id=permissions.modules_id
                                    INNER JOIN role_module_permissions on role_module_permissions.permission_id=permissions.id
                                    INNER JOIN role_modules ON role_modules.id=role_module_permissions.role_modules_id
                                    INNER JOIN users on users.role_id = role_modules.role_id
                            WHERE
                            permissions.display_name=? AND
                            modules.name=? AND
                            users.id=?',[trim($role_name),trim($permission_module_name),$user_id]);


        if ($checkIfUserHasPermission[0]->count == 0){
            return false;
        }

        return true;
    }

}

