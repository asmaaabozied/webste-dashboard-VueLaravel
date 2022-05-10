<?php

namespace App\Policies;

use App\Appointment;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class AppointmentPolicy extends DenyPolicy
{
    public function appointmentAuthorize(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function cancelAppointment(User $user)
    {
        $userId      = request()->all()['user_id'];
        $appointment = Appointment::where('id', Route::current()->parameter('id'))->first();
        if ($appointment->user_id != $userId) {
            if (!userHasRole($user, mainManagerRoles())) {
                return $this->deny(myTrans('user_dose_not_have_appointment_date'));
            }
        }
        return true;
    }
}
