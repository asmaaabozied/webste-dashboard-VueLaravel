<?php
$allPermisions = \App\Helpers\getAllPermission();
$fullAccess = 'c,ra,rc,u,d,cc';
return [
    'role_structure' => [
        'system_manager' => $allPermisions,
        'admin' => $allPermisions,
/*
 *
        'maintenance_manager' => [
            'messages' => $fullAccess,
            'employees' => $fullAccess,

        ],

        'installation_manager' => [
            'messages' => 'c,rc,u',
            'employees' => $fullAccess,
            'installment_orders' => $fullAccess,
        ],
        'technical_manager ' => [
            'messages' => 'c,rc,u',
            'employees' => $fullAccess,
        ],
        'technical' => [
            'messages' => 'c,rc,u',
            'installment_orders' => $fullAccess,
        ],

        'consulting_manager' => [
            'messages' => 'c,rc,u',
            'employees' => $fullAccess,
        ],
        'consulting_employee' => [
            'messages' => 'c,rc,u'
        ],

        'hr_manager' => [
            'messages' => 'c,rc,u',
             "job_application_orders"=> "c,ra,rc,u,d,cc",
        ],

        'sales_manager' => [
            'messages' => 'c,rc,u,d,cc'
        ],

        'customer' => [
            'customers' => 'rc,u,d',
            'installment_orders' => 'c',
            'orders' => 'c',
            'delivery_orders' => 'c',
            'order_spare_parts' => 'c',
            'job_application_orders' => 'c',
            'prevention_maintenance_orders' => 'c',
            'maintenance_orders' => 'c',
            'order_review_orders' => 'c',
            'transactions' => 'c',
            'carts'=> 'c,r,u,d,cc',
            'cart_products'=> 'c,r,u,d',
            'consultant_orders' => 'c',

        ],
        'gallery' => [
            'messages' => 'c,rc,u,d,cc',
            'installment_orders' => 'c',
            'ratings' => 'c,ra,rc,u,d,cc',
            'galleries' => 'rc,u'
        ],
 * */

        'maintenance_manager' => $allPermisions,

        'installation_manager' => $allPermisions,
        'technical_manager' => $allPermisions,
        'technical' => $allPermisions,

        'consulting_manager' => $allPermisions,
        'consulting_employee' => $allPermisions,

        'hr_manager' => $allPermisions,

        'sales_manager' => $allPermisions,

        'customer' => $allPermisions,

        'gallery' => [
            'messages' => $fullAccess,
            'installment_orders' => $fullAccess,
            'order_review_orders' => $fullAccess,
            'ratings' => $fullAccess,
            'galleries' => $fullAccess
        ],

    ],
    'permissions_map' => [
        'c' => 'create',
        'ra' => 'read_all',
        'rc' => 'read_custom',
        'u' => 'update',
        'd' => 'delete',
        'cc'=> 'canConfirm'
    ]
];
