const orders = () => import('./Orders');
const workshops = () => import('./Workshops');
const pendingOrder = () => import('./PendingOrder');
const order = () => import('./Order');
const createWorkshop = () => import('./../Admin/Workshops/Workshop.vue');

export default [
    {
        path: '/install-manager/orders',
        name: 'im1',
        component: orders,
        meta: {
            requiresAuth: true,
            role: 'installation_manager',
        }
    },
    {
        path: '/install-manager/workshops',
        name: 'im3',
        component: workshops,
        meta: {
            requiresAuth: true,
            role: 'installation_manager',
        }
    },
    {
        path: '/install-manager/pending-order/:id',
        name: 'im5',
        component: pendingOrder,
        meta: {
            requiresAuth: true,
            role: 'installation_manager',
        }
    },
    {
        path: '/install-manager/order/:id',
        name: 'im6',
        component: order,
        meta: {
            requiresAuth: true,
            role: 'installation_manager',
        }
    },
    {
        path: '/install-manager/workshop/:id/:preType/:preDepartment',
        name: 'im7',
        props: true,
        component: createWorkshop,
        meta: {
            requiresAuth: true,
            role: 'installation_manager'
        }
    },

]