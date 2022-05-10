const portal = () => import('./Portal.vue');
const agentPayments = () => import('./Payments.vue');
const agentPaymentInfo = () => import('./PaymentInfo.vue');
const installOrder = () => import('./InstallOrder.vue');
const agentOrders = () => import('./Orders.vue');
const orderDetails = () => import('./OrderDetails.vue');
const contactUs = () => import('./../Customer/ContactUs.vue');

export default [
    {
        path: '/agent/portal',
        name: 'g1',
        component: portal,
        meta: {
            requiresAuth: true,
            role: 'gallery',
        },
    },
    {
        path: '/agent/install-order',
        name: 'g2',
        component: installOrder,
        meta: {
            requiresAuth: true,
            role: 'gallery',
        },
    },
    {
        path: '/agent/orders',
        name: 'g3',
        component: agentOrders,
        meta: {
            requiresAuth: true,
            role: 'gallery',
        },
    }, 
    {
        path: '/agent/payments',
        name: 'g4',
        component: agentPayments,
        meta: {
            requiresAuth: true,
            role: 'gallery',
        },
    },
    {
        path: '/agent/paymentinfo',
        name: 'g5',
        component: agentPaymentInfo,
        meta: {
            requiresAuth: true,
            role: 'gallery',
        },
    },
    {
        path: '/agent/order-details/:id',
        name: 'g6',
        props: true,
        component: orderDetails,
        meta: {
            requiresAuth: true,
            role: 'gallery',
        },
    },
    {
        path: '/contact-us',
        name: 'g7',
        component: contactUs,
        meta: {
            requiresAuth: true,
            role: 'gallery'
        }
    },
]