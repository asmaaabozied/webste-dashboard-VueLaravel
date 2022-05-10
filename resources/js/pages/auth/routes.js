
const RegisterPage        = () => import('./RegisterPage.vue');
const editProfile         = () => import('./EditProfile.vue');
const showProfile         = () => import('./ShowProfile.vue');
const Login               = () => import('./Login.vue');
const password            = () => import('./Password.vue');
const notAuthorized       = () => import('./Page401.vue');
const terms               = () => import('./Terms.vue');
const confirmCode         = () => import('./confirmCode.vue');
const PaymentVerification = () => import('./PaymentVerification.vue');

export default [
    {
        path: '/payment/paymentVerification',
        name: 'paymentVerification',
        component: PaymentVerification,
        meta: {
            reqrequiresVisitor: true,
        }
    },

    {
        path: '/register',
        name: 'register',
        component: RegisterPage,
        meta: {
            reqrequiresVisitor: true,
        }
    },
    {
        path: '/edit-profile',
        name: 'editProfile',
        component: editProfile,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/show-profile',
        name: 'showProfile',
        component: showProfile,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            reqrequiresVisitor: true,
        }
    },
    {
        path: '/password-change',
        name: 's4',
        component: password,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/not-authorized',
        name: '401',
        component: notAuthorized,
    },
    {
        path: '/terms',
        name: 'terms',
        component: terms,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/confirmCode/:username',
        name: 'confirmCode',
        component: confirmCode,
        meta: {
            requiresAuth: false
        }
    }
]
