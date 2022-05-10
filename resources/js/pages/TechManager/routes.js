const orders = () => import('./orders.vue');
const maintenanceDetails = () => import('./MaintenanceDetails');
const installDetails = () => import('./InstallDetails');
const assign = () => import('./Assign');
const requestSpare = () => import('./../Technical/RequestSpare.vue')

export default [
    {
        path: '/technical-manager/orders',
        name: 'tm1',
        component: orders,
        meta: {
            requiresAuth: true,
            role: 'technical_manager',
        }
    },
    {
        path: '/technical-manager/maintenance-details/:id/:type',
        name: 'tm4',
        component: maintenanceDetails,
        meta: {
            requiresAuth: true,
            role: 'technical_manager',
        }
    },
    {
        path: '/technical-manager/install-details/:id/:type',
        name: 'tm6',
        component: installDetails,
        meta: {
            requiresAuth: true,
            role: 'technical_manager',
        }
    },
    {
        path: '/technical-manager/assign/:orderId/:id/:type',
        name: 'tm5',
        component: assign,
        props: true,
        meta: {
            requiresAuth: true,
            role: 'technical_manager',
        }
    },
    {
        path: '/technical-manager/request-spare/:id',
        name: 'tm7',
        component: requestSpare,
        props: true,
        meta: {
            requiresAuth: true,
            role: 'technical_manager',
        }
    },
]