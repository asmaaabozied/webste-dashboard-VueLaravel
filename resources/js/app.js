window.Vue = require("vue");

import axios from "axios";

window.axios = axios;
import interceptorsSetup from "./plugins/interceptors";

interceptorsSetup();

import router from "./router/index";

import store from "./store/index";

import App from "./pages/App.vue";

import vuetify from "./plugins/vuetify";

import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import messages from "./lang/local.js";

const i18n = new VueI18n({
    locale: localStorage.getItem("locale") || "en",
    messages,
});

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

import Notifications from "vue-notification";

Vue.use(Notifications);

import isLoggedIn from "./mixins/isLoggedIn";

Vue.mixin(isLoggedIn);

import role from "./mixins/Role";

Vue.mixin(role);

import Rules from "./mixins/Rules";

Vue.mixin(Rules);

import formatDate from "./mixins/FormatDate";

Vue.mixin(formatDate);

import OrderStatus from "./mixins/OrderStatus";

Vue.mixin(OrderStatus);

import OrderType from "./mixins/OrderType";

Vue.mixin(OrderType);

import Notify from "./mixins/Notify";

Vue.mixin(Notify);

import OrderTypeAPI from "./mixins/OrderTypeAPI";

Vue.mixin(OrderTypeAPI);

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        // key: "",
        key: 'AIzaSyAf72wdC9qT5xMY5tXolar7NzaT2c9LNeU',
        libraries: "places",
    },
    installComponents: true,
});

// import Ads from 'vue-google-adsense'
// Vue.use(require('vue-script2'))
// Vue.use(Ads.Adsense)
export const EventBus = new Vue();
import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueGeolocation);

const app = new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    i18n,
    components: {App},
});
