const orders = () => import('./Orders.vue');
const order = () => import('./Order.vue');
const assign = () => import('./Assign.vue');

export default [
    {
        path: '/consult-mng/orders',
        name: 'cm2',
        component: orders,
        meta: {
            requiresAuth: true,
            role: 'consulting_manager'
        }
    },
    {
        path: '/consult-mng/consult-details/:id/:internalId',
        name: 'cm3',
        component: order,
        meta: {
            requiresAuth: true,
            role: 'consulting_manager'
        }
    },
    {
        path: '/consult-mng/assign-order/:id',
        name: 'cm4',
        component: assign,
        meta: {
            requiresAuth: true,
            role: 'consulting_manager'
        }
    },
]
