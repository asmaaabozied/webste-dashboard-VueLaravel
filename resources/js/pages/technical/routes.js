const RequestSpare = () => import('./RequestSpare.vue');
const technicalOrders = () => import('./Orders.vue');
const MaintenanceDetails = () => import('./MaintenanceDetails.vue');
const installDetails = () => import('./InstallDetails.vue');

export default [
    {
        path: '/technical/orders',
        name: 't1',
        component: technicalOrders,
        meta: {
            requiresAuth: true,
            role: 'technical',
        }
    },
    {
        path: '/technical/request-spare/:id',
        name: 't3',
        component: RequestSpare,
        meta: {
            requiresAuth: true,
            role: 'technical',
        }
    },
    {
        path: '/technical/maintenance-details/:id',
        name: 't4',
        component: MaintenanceDetails,
        meta: {
            requiresAuth: true,
            role: 'technical',
        }
    },
    {
        path: '/technical/install-details/:id',
        name: 't5',
        component: installDetails,
        meta: {
            requiresAuth: true,
            role: 'technical',
        }
    },
]