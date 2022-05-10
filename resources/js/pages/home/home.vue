<template>
  <div>
    <!-- loading -->
    <v-dialog
      v-model="loadDialog"
      fullscreen
      persistent
      :overlay="false"
      width="95vw"
    >
      <loading-img v-if="loadDialog" />
    </v-dialog>

    <!-- content -->
    <div v-if="!loadDialog">
      <!-- hero -->
      <div
        id="section-1"
        :style="
          `min-height: 90vh;
            padding-top: 7rem;
            background-image: url(${isRtl ? heroImageRtl : heroImage});
            background-size: cover;
            `
        "
        class="d-flex align-start flex-column ps-md-12 ps-6 pb-6"
      >
        <div>
          <v-row
            :class="section1 ? 'animate__animated animate__fadeInDown' : ''"
          >
            <v-col cols="10" md="10">
              <div v-if="!isRtl" class="d-flex">
                <span
                  class="text-h2 d-inline font-weight-bold w-200"
                  style="color: #70C43C;"
                  v-text="$t('topNav.inmaa')"
                ></span>
                <span
                  class="ml-2 text-h2 d-inline font-weight-bold  w-200"
                  v-text="$t('topNav.company')"
                ></span>
              </div>
              <div v-if="isRtl" class="d-flex">
                <span
                  class="text-h2 d-inline font-weight-bold w-220"
                  v-text="$t('topNav.company')"
                ></span>
                <span
                  class="mr-2 text-h2 d-inline font-weight-bold w-300"
                  style="color: #70C43C;"
                  v-text="$t('topNav.inmaa')"
                ></span>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="mt-16">
          <v-row
            :class="
              section1
                ? 'animate__animated animate__fadeInDown animate__delay-1s'
                : ''
            "
          >
            <v-col cols="8" md="8">
              <div
                class="text-h4 font-weight-medium"
                v-text="$t('home.heroSecondary')"
              ></div>
            </v-col>
          </v-row>
        </div>
        <div class="mt-4">
          <v-row
            :class="
              section1
                ? 'animate__animated animate__fadeInUp animate__delay-1s'
                : ''
            "
          >
            <v-col cols="12" md="8">
              <div class="text-h5" v-text="$t('home.heroSub')"></div>
              <div class="mt-1">
                <v-icon>mdi-phone-dial</v-icon>
                <span class="text-h5" v-text="$t('home.telphone')"> </span>
              </div>
            </v-col>
          </v-row>
        </div>
        <div
          class="mt-auto d-flex justify-center"
          v-if="section1"
          style="width: 100%;"
        >
          <v-btn
            :class="
              section1
                ? 'animate__animated animate__bounceIn animate__delay-2s'
                : ''
            "
            icon
            @click="$vuetify.goTo('#section-2')"
          >
            <v-icon color="black" x-large>mdi-chevron-double-down</v-icon>
          </v-btn>
        </div>
      </div>

      <!-- inmaa services -->
      <div class="pt-8" id="section-2" style="min-height: 80vh">
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <div
              class="text-center text-h4 mb-2 no-select font-weight-bold"
              v-text="$t('home.servicesTitle')"
            ></div>
            <div
              class="text-center text-h5 mt-6 mb-8 no-select font-weight-regular"
              v-text="$t('home.serviceSub')"
            ></div>
          </v-col>
        </v-row>
        <v-container fluid style="background-color: #f4f4f4">
          <v-row class="py-md-4 py-1 mx-md-12 mx-2">
            <v-col
              v-for="(item, i) in services"
              :key="item.id"
              cols="12"
              md="3"
              :class="
                section2
                  ? `animate__fadeInUp animate__animated delay-${i + 1}`
                  : ''
              "
              v-view.once="reachSection2"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 4" class="service-card">
                  <v-img
                    :src="item.img"
                    contain
                    height="6rem"
                    class="mb-4"
                  ></v-img>
                  <v-card-text class="service-content">
                    <div
                      class="text-h6 black--text text-center mb-2 no-select"
                      v-text="item.header"
                    ></div>
                    <div
                      class="text-body2 black--text text-center no-select"
                      v-text="item.text"
                    ></div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- are you ready -->
      <div id="section-3" style="min-height: 90vh" class="mt-8">
        <div
          class="text-center text-h5"
          :class="section3 ? 'animate__fadeInDown animate__animated' : ''"
          v-text="$t('home.areYouReady')"
          v-show="section3"
        ></div>
        <div
          class="text-center text-h3 mt-2"
          :class="section3 ? 'animate__fadeInDown animate__animated' : ''"
          v-text="$t('home.getOurServices')"
          v-show="section3"
        ></div>
        <v-row class="mt-16 mx-1">
          <v-col
            cols="12"
            md="10"
            lg="8"
            xl="6"
            v-view.once="reachSection3"
            class="d-flex align-center justify-center"
          >
            <div>
              <div
                :class="
                  section3
                    ? 'animate__fadeInUp animate__animated animate__delay-1s'
                    : ''
                "
                class="mt-2"
                @mouseover="carousel = 0"
              >
                <div
                  class="text-lg-h5 text-body-1 ms-lg-1 mb-2 connect-item d-inline"
                >
                  <v-icon x-large color="#70C43C">mdi-check-bold</v-icon>
                  {{ $t("home.applyFromWeb") }}
                  <div class="slider" :class="isRtl ? 'sliderRtl' : ''"></div>
                </div>
              </div>

              <div
                :class="
                  section3
                    ? 'animate__fadeInUp animate__animated animate__delay-2s'
                    : ''
                "
                class="mt-8"
                @mouseover="carousel = 1"
              >
                <div
                  class="text-lg-h5 text-body-1 ms-lg-6 mb-2 connect-item d-inline"
                >
                  <v-icon x-large color="#70C43C">mdi-check-bold</v-icon>
                  {{ $t("home.donwloadApp") }}
                  <div class="slider" :class="isRtl ? 'sliderRtl' : ''"></div>
                </div>
              </div>

              <div
                :class="
                  section3
                    ? 'animate__fadeInUp animate__animated animate__delay-3s'
                    : ''
                "
                class="mt-8"
                @mouseover="carousel = 2"
              >
                <div
                  class="text-lg-h5 text-body-1 ms-lg-10 mb-2 connect-item d-inline"
                >
                  <v-icon x-large color="#70C43C">mdi-check-bold</v-icon>
                  {{ $t("home.callByPhone") }}
                  <div class="slider" :class="isRtl ? 'sliderRtl' : ''"></div>
                </div>
              </div>

              <div
                :class="
                  section3
                    ? 'animate__fadeInUp animate__animated animate__delay-4s'
                    : ''
                "
                class="mt-8"
                @mouseover="carousel = 3"
              >
                <div
                  class="text-lg-h5 text-body-1 ms-lg-16 mb-2 connect-item d-inline"
                >
                  <v-icon x-large color="#70C43C">mdi-check-bold</v-icon>
                  {{ $t("home.visitUs") }}
                  <div class="slider" :class="isRtl ? 'sliderRtl' : ''"></div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            lg="4"
            xl="6"
            class="d-flex align-center justify-center"
          >
            <!-- imgs -->
            <v-carousel v-model="carousel" :show-arrows="false" hide-delimiters>
              <v-carousel-item
                v-for="item in connectImgs"
                :key="item.id"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-img
                  :key="item.id"
                  :src="item.src"
                  height="100%"
                  contain
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>

      <!-- your happiness -->
      <div
        id="section-4"
        style="min-height: 80vh; margin-bottom: 10rem;"
        class="d-flex flex-column align-center"
        v-view.once="reachSection4"
      >
        <div
          class="text-center text-h4 font-weight-bold"
          v-text="$t('home.yourHappy')"
          :class="
            section4 ? 'animate__fadeInDown animate__animated delay-1' : ''
          "
          v-show="section4"
        ></div>
        <div
          class="mt-4 text-center text-h5"
          style="width: 60%"
          v-text="$t('home.yourHappyDesc')"
          :class="
            section4 ? 'animate__fadeInDown animate__animated delay-2' : ''
          "
          v-show="section4"
        ></div>
        <v-row class="mt-10" no-gutters>
          <v-col cols="12" md="5" class="d-flex justify-center align-center">
            <div
              :class="
                section4 ? 'animate__zoomIn animate__animated delay-3' : ''
              "
            >
              <v-img :src="distractedGuy" height="20rem" contain></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="2" class="d-flex justify-center align-center">
            <div
              :class="
                section4 ? 'animate__rotateIn animate__animated delay-4' : ''
              "
            >
              <v-img
                :src="isRtl ? inmaaRotateRtl : inmaaRotate"
                contain
                height="5rem"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="5" class="d-flex justify-center align-center">
            <div
              :class="
                section4 ? 'animate__zoomIn animate__animated delay-5' : ''
              "
            >
              <v-img :src="family" width="32rem" contain></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column align-center justify-center"
          >
            <div
              v-text="$t('home.ourTeamWill')"
              class="text-h5 text-center"
              :class="
                section4 ? 'animate__zoomIn animate__animated delay-6' : ''
              "
            ></div>
            <v-btn
              x-large
              elevation="12"
              color="#70B94B"
              class="white--text mt-4"
              :class="
                section4 ? 'animate__zoomIn animate__animated delay-6' : ''
              "
              @click="$router.push({ name: 'login' })"
              v-text="$t('home.startNow')"
            ></v-btn>
          </v-col>
        </v-row>
      </div>

      <!-- stats banner -->
      <div style="min-height: 50vh; ">
        <v-row justify="start" style="margin-bottom: -5%;">
          <v-col cols="8" md="6">
            <v-img :src="isRtl ? vanRtl : van" height="20rem"></v-img>
          </v-col>
        </v-row>
        <div
          style="
          width: 100%;
          background-image: linear-gradient(to right, #435539, #323232);
        "
          class="py-10 white--text"
          v-view.once="viewHandler"
        >
          <v-row class="mt-16" no-gutters>
            <v-col
              offset="1"
              offset-sm="0"
              offset-md="1"
              offset-lg="1"
              offset-xl="1"
            ></v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3">
              <h4 class="ml-4 mb-2">{{ $t("home.stats") }}</h4>
              <p class="description ml-4 px-4">
                <span :class="{ divider: !isRtl, dividerRtl: isRtl }"></span>
                {{ $t("home.statsDesc") }}
              </p>
            </v-col>
            <v-col
              offset="1"
              offset-sm="0"
              offset-md="1"
              offset-lg="1"
              offset-xl="1"
            ></v-col>
            <v-col
              cols="12"
              sm="12"
              md="2"
              lg="2"
              xl="2"
              class="d-flex justify-center align-center flex-column mb-4"
            >
              <h2 class="text-center">{{ servicesCount }} +</h2>
              <h2 class="text-center">{{ $t("home.servicecount") }}</h2>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="2"
              lg="2"
              xl="2"
              class="d-flex justify-center align-center flex-column mb-4"
            >
              <h2 class="text-center">{{ techCount }} +</h2>
              <h2 class="text-center">{{ $t("home.techCount") }}</h2>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="2"
              lg="2"
              xl="2"
              class="d-flex justify-center align-center flex-column mb-4"
            >
              <h2 class="text-center">{{ usedCount }} +</h2>
              <h2 class="text-center">{{ $t("home.usedCount") }}</h2>
            </v-col>
            <v-col offset="1"></v-col>
          </v-row>
        </div>
      </div>

      <!-- brands -->
      <div
        id="section-4"
        :style="
          `min-height: 20vh; background-image: url(${brandsBack});
            background-size: cover;
          `
        "
        class="mt-16 mb-16"
      >
        <div
          class="mt-8 pt-8 text-h4 text-center"
          v-text="$t('home.brands')"
        ></div>
        <v-row justify="center" class="px-16 mt-10">
          <v-col
            cols="6"
            md="2"
            v-for="item in brands"
            :key="item.id"
            class="d-flex justify-center"
          >
            <v-img
              class="mx-4"
              :src="item.src"
              height="4rem"
              contain
              :key="item.id"
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import checkView from "vue-check-view";
Vue.use(checkView);
var webappSvg = require("../../../assets/images/webapp.svg");
var mobileSvg = require("../../../assets/images/mobile.svg");
var callSvg = require("../../../assets/images/call.svg");
var shopSvg = require("../../../assets/images/shop.svg");
import loadingImg from "./loader.vue";

export default {
  name: "Home",

  components: {
    loadingImg,
  },

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title:
        locale == "en"
          ? "Inma company for HVAC"
          : "شركة إنماء للتكييف والتبريد والتهوية",
      meta: [
        {
          vmid: "description",
          property: "description",
          content:
            locale == "en"
              ? "The leading company in the Saudi Arabia in HVAC systems"
              : "الشركة الرائدة في المملكة في مجال أنظمة التدفئة والتهوية وتكييف الهواء",
        },
        {
          vmid: "keywords",
          property: "keywords",
          content:
            locale == "en"
              ? "Alinma one, Inma, AlInma, Al inma, Inma Company, HVAC, systems, KSA, Saudi, Arabia, Air, Conditioner, AC, air conditioning repair, ac repair, heating, cooling, hvac repair"
              : "تبريد, تبريد وتكييف, مكيف, شركة إنماء, انماء, انماء الاولى, إنماء الأولى, مشاريع, صيانة, تدفئة",
        },
      ],
    };
  },

  data() {
    return {
      loadDialog: true,
      heroImage: require("../../../assets/images/hero.jpg"),
      heroImageRtl: require("./../../../assets/images/heroRtl.jpg"),
      servicesCount: 0,
      techCount: 0,
      usedCount: 0,

      section1: false,
      section2: false,
      section3: false,
      section4: false,
      services: [
        {
          id: 1,
          img: require("../../../assets/images/maintenance.png"),
          header: this.$t("services.srv01.title"),
          text: this.$t("services.srv01.desc"),
          color: "#75c9b7",
        },
        {
          id: 2,
          img: require("../../../assets/images/install.png"),
          header: this.$t("services.srv02.title"),
          text: this.$t("services.srv02.desc"),
          color: "#75c9b7",
        },
        {
          id: 3,
          img: require("../../../assets/images/consult.png"),
          header: this.$t("services.srv04.title"),
          text: this.$t("services.srv04.desc"),
          color: "#75c9b7",
        },
        {
          id: 4,
          img: require("../../../assets/images/preventive.png"),
          header: this.$t("services.srv03.title"),
          text: this.$t("services.srv03.desc"),
          color: "#75c9b7",
        },
      ],
      carousel: null,
      connectImgs: [
        { id: 1, src: webappSvg },
        { id: 2, src: mobileSvg },
        { id: 3, src: callSvg },
        { id: 4, src: shopSvg },
      ],
      brandsBack: require("../../../assets/images/brands-back.jpg"),
      brands: [
        { id: 1, src: require("../../../assets/images/brands/general.png") },
        { id: 2, src: require("../../../assets/images/brands/gree.png") },
        { id: 3, src: require("../../../assets/images/brands/lg.png") },
        { id: 4, src: require("../../../assets/images/brands/samsung.png") },
        { id: 5, src: require("../../../assets/images/brands/sharp.png") },
      ],
      distractedGuy: require("../../../assets/images/distracted.png"),
      family: require("../../../assets/images/family.png"),
      inmaaRotate: require("../../../assets/images/inmaaRotate.svg"),
      inmaaRotateRtl: require("../../../assets/images/inmaaRotateRtl.svg"),
      vanRtl: require("../../../assets/images/vanR.png"),
      van: require("../../../assets/images/van.png"),
    };
  },

  computed: {
    isRtl() {
      return this.$vuetify.rtl;
    },
  },

  methods: {
    viewHandler(e) {
      if (e.type == "enter") {
        let interval = setInterval(() => {
          if (this.servicesCount < 30) this.servicesCount++;
          if (this.techCount < 15) this.techCount++;
          if (this.usedCount < 10) this.usedCount++;

          if (
            this.servicesCount == 30 &&
            this.techCount == 15 &&
            this.usedCount == 10
          )
            clearInterval(interval);
        }, 200);
      }
    },
    reachSection1() {
      this.section1 = true;
    },
    reachSection2() {
      this.section1 = true;
      this.section2 = true;
    },
    reachSection3() {
      this.section1 = true;
      this.section2 = true;
      this.section3 = true;
    },
    reachSection4() {
      this.section1 = true;
      this.section2 = true;
      this.section3 = true;
      this.section4 = true;
    },
  },

  mounted() {
    this.loadDialog = false;
    this.reachSection1();
  },

  watch: {
    loadDialog(val) {
      document.querySelector("html").style.overflowY = val ? "hidden" : null;
    },
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
/* 
@media screen and (min-width: 1200px) {
  .section {
    height: 100vh;
  }
} */

.description {
  position: relative;
  width: 100%;
}

.divider {
  position: absolute;
  background: green;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  margin-left: 5px;
}

.dividerRtl {
  position: absolute;
  background: green;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  margin-right: 5px;
}

.delay-1 {
  animation-delay: 0.75s;
}

.delay-2 {
  animation-delay: 1s;
}

.delay-3 {
  animation-delay: 1.25s;
}

.delay-4 {
  animation-delay: 1.5s;
}

.delay-5 {
  animation-delay: 1.75s;
}

.delay-6 {
  animation-delay: 2s;
}

.service-content {
  background-color: #f2f2f2;
  min-height: 10rem;
  max-height: 10rem;
}

.service-card {
  border: solid 5px #f2f2f2;
}

.no-select {
  user-select: none;
}

.connect-item {
  position: relative;
  cursor: pointer;
  width: 100%;
}

.slider {
  position: absolute;
  bottom: -15px;
  left: 0;
  height: 4px;
  background-color: #eef6ff;
  width: 5%;
  -webkit-transition: width 2s ease;
  transition: width 1s ease;
}

.connect-item:hover .slider {
  width: 100%;
}

.sliderRtl {
  left: unset !important;
  right: 0;
}

.w-200 {
  min-width: 200px;
}

.w-220 {
  min-width: 220px;
}

.w-300 {
  min-width: 300px;
}
</style>
