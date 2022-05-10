import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index.js'
Vue.use(VueRouter)

import VueMeta from "vue-meta";
Vue.use(VueMeta);

const Home = () => import('./../pages/home/home.vue');
const loader = () => import('./../pages/home/loader.vue');

const messages = () => import('./../pages/Messages/Messages.vue');
const notifications = () => import('./../pages/Notifications/Notifications.vue');
const suggestions = () => import('./../pages/Suggestions/Suggestions.vue');

import customerPages from './../pages/Customer/routes';
import agentPages from './../pages/Agent/routes';
import authPages from './../pages/Auth/routes';
import adminPages from './../pages/Admin/routes';
import technicalPages from './../pages/Technical/routes';
import techManagerPages from './../pages/TechManager/routes';
import maintenanceManagerPages from './../pages/MaintenanceManager/routes';
import installManagerPages from './../pages/InstallManager/routes';
import hrManagerPages from './../pages/HRManager/routes'
import salesPages from './../pages/Sales/routes';
import consultPagesMng from './../pages/ConsultManager/routes';
import consultPagesEmp from './../pages/ConsultEmp/routes';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/loader',
            name: 'loader',
            component: loader,
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/messages',
            name: 'messages',
            component: messages,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/notifications',
            name: 'notifications',
            component: notifications,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/suggestions',
            name: 'm4',
            component: suggestions,
            meta: {
                requiresAuth: true,
            }
        },
        ...authPages,
        ...customerPages,
        ...hrManagerPages,
        ...adminPages,
        ...agentPages,
        ...technicalPages,
        ...techManagerPages,
        ...maintenanceManagerPages,
        ...installManagerPages,
        ...salesPages,
        ...consultPagesMng,
        ...consultPagesEmp,
        
    ],
});

router.beforeEach(async (to, from, next) => {
    store.commit('startBar');
    if (store.getters.isLoggedin && !store.getters.role)
        await store
            .dispatch("loadUserInfo")
            .then(res => { })
            .catch(err => {

                store.dispatch("logOut").then(res => {
                    next({ name: "login" });
                });
            });

    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (store.getters.isLoggedin)
            if (to.meta.role)
                if (to.meta.role === store.getters.role)
                    next();
                else
                    next({ name: '401' });
            else
                next();
        else
            next({ name: 'login' });

    } else if (to.matched.some(route => route.meta.requiresVisitor)) {
        if (store.getters.isLoggedin) {
            next({ name: 'home' });
        } else {
            next();
        }
    } else {
        next();
    }
    store.commit('emptyMessagesNotifyShown');
    store.commit('stopBar');
});

router.afterEach((to, from) => {
    store.commit('stopBar');
    window.scrollTo(0, 0);
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
export default router;
