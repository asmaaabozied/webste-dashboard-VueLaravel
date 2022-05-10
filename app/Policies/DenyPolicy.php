<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * Class DenyPolicy
 * @author karam mustafa
 * @package App\Policies
 */
class DenyPolicy extends BasePolicy
{
    use HandlesAuthorization;

}
