<template>
  <v-app-bar
    color="white accent-4"
    :clipped-left="clippedLeft"
    :clipped-right="clippedRight"
    elevation="1"
    dense
    app
    :shrink-on-scroll="isShrink"
    :prominent="isShrink"
    class="pt-1"
  >
    <v-app-bar-nav-icon
      @click.stop="toggleDrawer"
      v-if="$isLoggedin && $roleEquals('admin')"
    >
      <v-icon>{{ icons.mdiMenu }}</v-icon>
    </v-app-bar-nav-icon>

    <div style="height: 95%" class="d-flex align-center">
      <v-img
        @click="$router.push({ name: 'home' })"
        style="cursor:pointer;"
        :height="`${$vuetify.application.top - 15}px`"
        contain
        :src="logo"
      ></v-img>
    </div>
    <div style="height: 100%" class="me-8 d-flex align-center">
      <div class="text-h5 mw-76" v-text="$t('topNav.inmaa')"></div>
    </div>
    <div
      style="height: 100%; width: 100%;"
      class="d-flex flex-row align-center"
    >
      <v-btn text class="mx-1" :to="{ name: 'home' }">
        {{ $t("topNav.home") }}
      </v-btn>
      <v-btn text :to="{ name: 'c6' }" class="mx-1">{{
        $t("topNav.ourServices")
      }}</v-btn>
      <v-btn text :to="{ name: 'c13' }" class="mx-1">{{
        $t("products.products")
      }}</v-btn>
      <v-btn text :to="{ name: 'c15' }" class="mx-1">{{
        $t("topNav.contactUs")
      }}</v-btn>

      <!-- Customer portal -->
      <div class="text-center" v-if="$isLoggedin && $roleEquals('customer')">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" :to="{ name: 'c4' }" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'c2' }">
              <v-list-item-title
                >{{ $t("myRequests.myRequests") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'c19' }">
              <v-list-item-title
                >{{ $t("transactions.transactions") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- Consult Manager -->
      <div
        class="text-center"
        v-if="$isLoggedin && $roleEquals('consulting_manager')"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'cm2' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Consult Emp -->
      <div
        class="text-center"
        v-if="$isLoggedin && $roleEquals('consulting_employee')"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'ce2' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- HR Manager -->
      <div class="text-center" v-if="$isLoggedin && $roleEquals('hr_manager')">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'HR2' }">
              <v-list-item-title>Job Application Orders</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Technical -->
      <div class="text-center" v-if="$isLoggedin && $roleEquals('technical')">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 't1' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- Tech manager -->
      <div
        class="text-center"
        v-if="$isLoggedin && $roleEquals('technical_manager')"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'tm1' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- maintenance manager -->
      <div
        class="text-center"
        v-if="$isLoggedin && $roleEquals('maintenance_manager')"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'mm1' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'mm3' }">
              <v-list-item-title
                >{{ $t("technical.workshops") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'mm5' }">
              <v-list-item-title>{{ $t("admin.cars") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'mm7' }">
              <v-list-item-title
                >{{ $t("admin.spareParts") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- install manager -->
      <div
        class="text-center"
        v-if="$isLoggedin && $roleEquals('installation_manager')"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'im1' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'im3' }">
              <v-list-item-title
                >{{ $t("technical.workshops") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- agent (gallery) -->
      <div class="text-center" v-if="$isLoggedin && $roleEquals('gallery')">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn :to="{ name: 'g4' }" text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'g3' }">
              <v-list-item-title>{{ $t("general.orders") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'g2' }">
              <v-list-item-title
                >{{ $t("myRequests.InstallationRequest") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'g4' }">
              <v-list-item-title
                >{{ $t("general.principalPayment") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- sales -->
      <div
        class="text-center"
        v-if="$isLoggedin && $roleEquals('sales_manager')"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1"
              >{{ $t("general.myPortal") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'sm2-1' }">
              <v-list-item-title
                >{{ $t("products.categories") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'sm3-1' }">
              <v-list-item-title
                >{{ $t("products.products") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'sm5' }">
              <v-list-item-title
                >{{ $t("transactions.transactions") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- customPages -->
      <div v-if="$vuetify.breakpoint.mdAndDown || customPages.length > 3">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mx-1" icon>
              <v-icon>mdi-dots-grid</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in customPages"
              :key="i"
              :to="item.path"
            >
              <v-list-item-title>
                {{ $i18n.locale == "ar" ? item.name_ar : item.name_en }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-if="$vuetify.breakpoint.lgAndUp && customPages.length <= 3">
        <v-btn
          text
          v-for="(item, i) in customPages"
          :key="i"
          :to="item.path"
          class="mx-1"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <h3 class="mx-4">{{ $store.state.user.userName }}</h3>
      <!-- auth -->
      <v-btn
        v-if="!$isLoggedin"
        rounded
        small
        depressed
        class="mx-1"
        color="primary"
        to="/login"
        >{{ $t("auth.login") }}
      </v-btn>
      <v-btn
        v-if="!$isLoggedin"
        rounded
        small
        depressed
        class="mx-1"
        :to="{ name: 'register' }"
        >{{ $t("auth.register") }}
      </v-btn>
      <!-- profile -->
      <div class="text-center" v-if="$isLoggedin">
        <v-menu transition="slide-y-transition" offset-y>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom :open-delay="500">
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  icon
                  class="mx-1"
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon>{{ icons.mdiAccountCircleOutline }}</v-icon>
                </v-btn>
              </template>
              <span>{{ $t("auth.showProfile") }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              :to="{ name: 'showProfile' }"
              v-if="$roleEquals('customer') || $roleEquals('gallery')"
            >
              <v-list-item-title>
                <v-icon class="me-6">{{ icons.mdiAccountDetails }}</v-icon>
                {{ $t("auth.showProfile") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              :to="{ name: 's4' }"
              v-if="!$roleEquals('customer') || !$roleEquals('gallery')"
            >
              <v-icon class="me-6">{{ icons.mdiFormTextboxPassword }}</v-icon>
              <v-list-item-title
                >{{ $t("general.modifyPass") }}
              </v-list-item-title>
            </v-list-item>

              <v-list-item @click="myorders"
              v-if="$roleEquals('customer') || $roleEquals('gallery')"


              >
              <v-list-item-title>
              <v-icon class="me-6">{{ icons.mdiFormTextboxPassword }}</v-icon>
                {{ $t("auth.myorders") }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item @click="logout">
              <v-list-item-title>
                <v-icon class="me-6">{{ icons.mdiLogout }}</v-icon>
                {{ $t("auth.logout") }}
              </v-list-item-title>
            </v-list-item>


          </v-list>
        </v-menu>
      </div>

      <!-- messages -->
      <div v-if="$isLoggedin">
        <v-tooltip bottom :open-delay="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" :to="{ name: 'messages' }" icon>
              <v-icon>{{ icons.mdiAndroidMessages }}</v-icon>
            </v-btn>
          </template>
          <span>{{ $t("topNav.messages") }}</span>
        </v-tooltip>
      </div>

      <!-- Suggest Inbox -->
      <div
        v-if="
          $isLoggedin &&
            ($roleEquals('admin') ||
              $roleEquals('maintenance_manager') ||
              $roleEquals('technical_manager') ||
              $roleEquals('consulting_manager') ||
              $roleEquals('hr_manager') ||
              $roleEquals('sales_manager'))
        "
      >
        <v-tooltip bottom :open-delay="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn :to="{ name: 'm4' }" v-bind="attrs" v-on="on" icon>
              <v-icon>{{ icons.mdiCommaBox }}</v-icon>
            </v-btn>
          </template>
          <span>{{ $t("topNav.suggestions") }}</span>
        </v-tooltip>
      </div>

      <!-- notifications -->
      <v-menu
        transition="slide-y-transition"
        v-if="$isLoggedin"
        bottom
        offset-y
      >
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom :open-delay="500">
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                <v-badge
                  overlap
                  :content="lastNotificationsLength"
                  :value="lastNotificationsLength"
                >
                  <v-icon>{{ icons.mdiBell }}</v-icon>
                </v-badge>
              </v-btn>
            </template>
            <span>{{ $t("topNav.notifications") }}</span>
          </v-tooltip>
        </template>
        <v-card width="30vw" min-height="20vh">
          <v-subheader v-if="lastNotifications.length > 0"
            >{{ $t("topNav.latestNotifications") }}
          </v-subheader>
          <v-card-text class="pa-0">
            <v-list
              two-line
              style="max-height: 70vh"
              class="overflow-y-auto"
              v-if="lastNotifications.length > 0"
            >
              <template v-for="(item, i) in lastNotifications">
                <v-divider v-if="i > 0" :key="i + 'd'"></v-divider>
                <v-list-item :key="i + 'i'" @click="open(item.order_type, item.order_id)">
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="item.message"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="formatDate(item.created_at)"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
            <v-list single-line style="max-height: 70vh" v-else>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    <v-icon class="me-4"
                      >{{ icons.mdiInformationOutline }}
                    </v-icon>
                    {{ $t("topNav.noNotifications") }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn
              v-if="lastNotifications.length > 0"
              @click="MakeAllAsRead"
              text
              small
              color="info"
            >
              <v-icon>{{ icons.mdiCheckBoxMultipleOutline }}</v-icon>
              {{ $t("topNav.markRead") }}
            </v-btn>
            <v-btn text small @click="$router.push({ name: 'notifications' })">
              <v-icon>{{ icons.mdiViewList }}</v-icon>
              {{ $t("general.checkIfThereNotification") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

      <!-- lang -->
      <v-menu transition="slide-y-transition" bottom offset-y>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom :open-delay="500">
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                <v-icon>{{ icons.mdiWeb }}</v-icon>
              </v-btn>
            </template>
            <span>{{ $t("topNav.language") }}</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item @click="setLang('ar')">
            <v-list-item-title>العربية</v-list-item-title>
          </v-list-item>
          <v-list-item @click="setLang('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-progress-linear
      :active="loading"
      indeterminate
      absolute
      top
      style="z-index: 99999;"
      color="light-blue"
      height="5px"
      class="mt-n1"
    ></v-progress-linear>

    <!-- <v-dialog v-model="Paind" shaped max-width="75%">
      <v-card>
        <v-card-title class="headline mb-4"> </v-card-title>
        <v-card-text>
          <v-row>
            <v-spacer>
              {{ $t("YouHavePayment") }}
            </v-spacer>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            color="primary"
            text
            @click="$router.push({ name: 'c19' })"
          >
            {{ $t("ViewTransactions") }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-app-bar>
</template>

<script>
import {
  mdiWeb,
  mdiAccountCircleOutline,
  mdiLogout,
  mdiFormTextboxPassword,
  mdiAccountDetails,
  mdiAndroidMessages,
  mdiBell,
  mdiCommaBox,
  mdiMenu,
  mdiCheckBoxMultipleOutline,
  mdiInformationOutline,
  mdiViewList,
} from "@mdi/js";
import message from "../plugins/notification";
import qs from "qs";

export default {
  created() {
    message.onMessage((payload) => {
      let notification = payload.notification
        ? payload.notification.body
        : payload.data.message;
      console.log(notification);
    });
  },

  data: () => ({
    logo: require("./../../assets/images/logo.svg"),
    icons: {
      mdiViewList,
      mdiWeb,
      mdiAccountCircleOutline,
      mdiLogout,
      mdiFormTextboxPassword,
      mdiAccountDetails,
      mdiAndroidMessages,
      mdiBell,
      mdiCommaBox,
      mdiMenu,
      mdiCheckBoxMultipleOutline,
      mdiInformationOutline,
    },
    Paind: false,
  }),
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang == "ar" ? true : false;
      localStorage.setItem("locale", lang);
      localStorage.setItem("rtl", this.$vuetify.rtl);
      if (this.$isLoggedin) {
        axios.post(`/api/user/changeLang`, { lang: lang });
      }
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
          this.$store.state.customPages = [];
          let pages = res.data.data;
          pages.sort(function(a, b) {
            return a.pageOrder - b.pageOrder;
          });
          pages.forEach((element) => {
            let path = "/c/" + element.name_en.toLowerCase().replace(/ /g, "");
            this.$store.commit("addCustomPage", {
              title:
                this.$i18n.locale == "en" ? element.name_en : element.name_ar,
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
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    logout() {
      this.$store
        .dispatch("logOut")
        .then((res) => {
          this.$notify({
            text: this.$t("auth.successLogout"),
            type: "info",
          });
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.$router.push({ name: "home" });
        });
    },
    myorders(){
this.$router.push({ name: "c2" });

    },
    openNotification(id) {
      //to-do
    },
    MakeAllAsRead() {
      this.$store.dispatch("markNotificationsAsAllRead");
    },
    open(type, id) {
      if (id != null) {
        switch (type) {
          case "consultant_order":
            this.$router.push({ name: "cn11", params: { id: id } });
            break;
          case "prevention_maintenance_order":
            this.$router.push({ name: "cn12", params: { id: id } });
            break;
          case "maintenance_order":
            this.$router.push({ name: "cn5", params: { id: id } });
            break;
          case "installment_order":
            this.$router.push({ name: "cn10", params: { id: id } });
            break;

          default:
            break;
        }
      } else {
        this.showErrorMessage(this.$t("general.error"));
      }
    },
  },
  computed: {
    isShrink() {
      return this.$route.name == "home" && this.$vuetify.breakpoint.mdAndUp;
    },
    clippedLeft() {
      return this.$vuetify.rtl ? false : true;
    },
    clippedRight() {
      return this.$vuetify.rtl ? true : false;
    },
    loading() {
      return this.$store.state.appLoadingBar;
    },
    lastNotifications() {
      return this.$store.state.lastNotifications;
    },
    lastNotificationsLength() {
      return this.$store.state.lastNotificationsLength;
    },
    customPages() {
      return this.$store.state.customPages;
    },
  },

  mounted() {
    if (this.$store.state.user.role == "customer") {
      axios
        .get("/api/getAccounting")
        .then((res) => {
          let data = res.data.data;
          if (data.current_amount < 0) {
            this.Paind = true;
          }
        })
        .catch((err) => {
          //
        });
    }
  },
};
</script>
<style scoped>
.text-h1,
.text-h2,
.text-h3,
.text-h4,
.text-h5,
.text-h6,
.text-lg-h5,
.text-body-1 {
  font-family: unset !important;
}
.mw-76 {
  min-width: 110px;
}
</style>
