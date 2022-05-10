import Vue from "vue";
import Vuex from "vuex";
import promise from "promise";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
        drawerOpen: false,
        messagesNotifyShown: [],
        user: {
            userName: null,
            role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
            id: null,
            lang: null,
            department_id: null,
        },
        appLoadingBar: false,
        lastNotificationsLength: '',
        notifications: [],
        lastNotifications: [],
        customPages: [],
        notificationShown: [],
    },
    getters: {
        isLoggedin(state) {
            return state.token !== null;
        },
        role(state) {
            return state.user.role;
        },
        getMessagesNotifyShown(state) {
            return state.messagesNotifyShown;
        },
    },
    mutations: {
        setToke(state, token) {
            state.token = token;
            localStorage.setItem("token", token);
        },
        logOut(state) {
            state.token = null;
            state.user.userName = null;
            state.user.role = null;
            state.user.department_id = null;
            state.user.id = null;
            state.user.lang = null;
            localStorage.removeItem("token");
            localStorage.removeItem("role");
        },
        toggleDrawer(state) {
            state.drawerOpen = !state.drawerOpen;
        },
        emptyMessagesNotifyShown(state) {
            return state.messagesNotifyShown = [];
        },
        appendMessagesNotifyShown(state, message) {
            if (!state.messagesNotifyShown.includes(message)) {
                state.messagesNotifyShown.push(message);
            }
        },
        setUser(state, data) {
            state.user.userName = data.userName;
            state.user.role = data.role;
            state.user.id = data.id;
            state.user.lang = data.lang;
            state.user.department_id = data.department_id;
            localStorage.setItem("role", data.role);
        },
        startBar(state) {
            state.appLoadingBar = true;
        },
        stopBar(state) {
            state.appLoadingBar = false;
        },
        appendToNotification(state, message) {
            state.notificationShown.push(message);
        },
        setNotifications(state, data) {
            state.notifications = data.notifications;
        },
        setLastNotifications(state, data) {
            state.lastNotificationsLength = data.notifications.length;
            state.lastNotifications = data.notifications;
        },
        addNotification(state, data) {
            state.lastNotifications.push(data);
        },
        markNotificationsAsAllRead(state) {
            state.lastNotificationsLength = '';
        },
        addCustomPage(state, data) {
            state.customPages.push(data);
        },
    },
    actions: {
        login(context, credentials) {
            return new promise((resolve, reject) => {
                axios
                    .post("/api/login", {
                        user_name: credentials.username,
                        password: credentials.password,
                    })
                    .then((res) => {
                        let data = res.data.data;

                        const token = data.token;
                        const role = data.user.role;
                        let id;

                        switch (role) {
                            case "customer":
                                id = data.user.customer.id;
                                break;
                            case "gallery":
                                id = data.user.gallery.id;
                                break;
                            default:
                                id = data.user.id;
                                break;
                        }

                        context.commit("setToke", token);
                        context.commit("setUser", {
                            userName: data.user.user_name,
                            role: role,
                            lang: data.user.lang,
                            id: id,
                            department_id: data.user.employee
                                ? data.user.employee.department_id
                                : undefined,
                        });
                        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        logOut(context) {
            if (context.getters.isLoggedin) {
                return new promise((resolve, reject) => {
                    axios
                        .get("/api/logout")
                        .then((res) => {
                            context.commit("logOut");
                            resolve(res);
                        })
                        .catch((err) => {
                            context.commit("logOut");
                            reject(err);
                        });
                });
            }
        },
        loadUserInfo({commit, state}) {
            return new promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + state.token;
                axios
                    .get("/api/getAuthDetails")
                    .then((res) => {
                        if (res.data.status != 200) reject(res.data.status);

                        let id;
                        let data = res.data.data;
                        const role = res.data.data.role;
                        switch (role) {
                            case "customer":
                                id = data.customer_info.id;
                                break;
                            case "gallery":
                                id = data.galleries_info.id;
                                break;
                            default:
                                id = data.id;
                                break;
                        }
                        commit("setUser", {
                            userName: data.user_name,
                            role: data.role,
                            lang: data.lang,
                            id: id,
                            department_id: data.employee_info
                                ? data.employee_info.department_id
                                : undefined,
                        });
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        loadAllNotifications({commit, state}) {
            return new promise((resolve, reject) => {
                axios
                    .get("/api/getUserNotification")
                    .then((res) => {
                        commit("setNotifications", {
                            notifications: res.data.data,
                        });
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        loadLastNotifications({commit, state}) {
            return new promise((resolve, reject) => {
                axios
                    .get("/api/LastNotification")
                    .then((res) => {
                        commit("setLastNotifications", {
                            notifications: res.data.data,
                        });
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        markNotificationsAsAllRead({commit, state}) {
            return new promise((resolve, reject) => {
                axios
                    .post("/api/MakeAllAsRead")
                    .then((res) => {
                        commit("markNotificationsAsAllRead");
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
});
