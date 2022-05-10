<template>
  <v-app>
    <top-nav></top-nav>
    <side-nav v-if="$isLoggedin && $roleEquals('admin')"></side-nav>
    <notification />
    <v-main>
      <v-container fluid :class="classes">
        <router-view></router-view>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>
<script>

import topNav from "./../components/Topnav";
import sideNav from "./../components/Sidenav";
import appFooter from "./../components/footer";
import notification from "./../components/Notifications";
import message from "./../plugins/notification";
import qs from "qs";
// --------------
const customPage = () => import("./CustomPages/page");
const page404    = () => import("./../pages/Auth/Page404");
// --------------

export default {
  name: "app",

  components: {
    topNav,
    sideNav,
    notification,
    appFooter,
  },
  data() {
    return {};
  },

  methods: {
    loadPages() {
      axios
        .get("/api/contentManagement", {
          params: {
            only: ["id", "name_ar", "name_en", "pageOrder"],
          },
          paramsSerializer: function(params) {
            return qs.stringify(params, { encode: false });
          },
        })
        .then((res) => {
          let pages = res.data.data;
          pages.sort(function(a, b) {
            return a.pageOrder - b.pageOrder;
          });
          pages.forEach((element) => {
            let path = "/c/" + element.name_en.toLowerCase().replace(/ /g, "");
            this.$store.commit("addCustomPage", {
              title: this.$i18n.locale == "en" ? element.name_en : element.name_ar,
              path: path,
            });
            this.$router.addRoutes([
              {
                path: path,
                component: customPage,
                props: { id: element.id },
              },
            ]);
          });
        })
        .catch((err) => {
          //
        })
        .finally(() => {
          this.$router.addRoutes([
            {
              path: "*",
              component: page404,
            },
          ]);
        });
    },
  },

  created() {
    this.$vuetify.rtl = localStorage.getItem("rtl") == "true" ? true : false;

    if (this.$store.state.token)
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.token;

    this.loadPages();
  },

  computed: {
    classes() {
      if (this.$route.path == "/home") return "pa-0";
      else if (
        this.$route.name == "messages" ||
        this.$route.name == "m4" ||
        this.$route.name == "c13" ||
        this.$route.name == "c4" ||
        this.$route.name == "g1"
      )
        return "pa-2";
      else return "px-12 pt-4";
    },
  },

  mounted() {
    if (this.$isLoggedin) {
      this.$store.dispatch("loadAllNotifications");
      this.$store.dispatch("loadLastNotifications");

      let notification;
      message.onMessage((payload) => {
        notification = {
          message: payload.notification
            ? payload.notification.body
            : payload.data.message,
          created_at: Date.now(),
        };
        this.$store.dispatch("loadAllNotifications");
        this.$store.commit("addNotification", notification);
        this.$notify({
          text: notification.message,
          type: "info",
        });
      });
    }
  },

  watch: {
    $isLoggedin(newVal, oldVal) {
      if (newVal == true) {
        this.$store.dispatch("loadAllNotifications");
        this.$store.dispatch("loadLastNotifications");
      }
    },
  },
};
</script>
<style></style>
