const orders = () => import('./Orders.vue');
const order = () => import('./Order.vue');

export default [
    {
        path: '/consult-emp/orders',
        name: 'ce2',
        component: orders,
        meta: {
            requiresAuth: true,
            role: 'consulting_employee'
        }
    },
    {
        path: '/consult-emp/order/:id',
        name: 'ce3',
        component: order,
        meta: {
            requiresAuth: true,
            role: 'consulting_employee'
        }
    },
 
]
