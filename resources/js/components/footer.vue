<template>
  <v-footer dark padless>
    <div style="width: 100%; background-color: #272727">
      <v-row>
        <!-- logo -->
        <v-col cols="12" md="4" class="d-flex justify-start align-center">
          <v-img :src="whiteLogo" height="5rem" contain></v-img>
        </v-col>
          <!-- links -->
        <v-col cols="12" md="4" class="d-flex flex-column align-center" style="margin: 10px 0">
          <div>
            <v-btn fab small color="primary" class="mx-1" @click="openTwitter">
              <v-icon color="white" elevation="2"> mdi-twitter </v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="primary"
              class="mx-1"
              @click="openInstagram"
            >
              <v-icon color="white" elevation="2"> mdi-instagram </v-icon>
            </v-btn>
          </div>
          <div class="text-caption mt-auto" style="margin: 5px 0">
            &copy; {{ new Date().getFullYear() }}
            Made by
            <a
              href="https://almotkamel.com/"
              target="_blank"
              style="color: white; text-decoration: none;"
              class="text-caption font-weight-thin"
            >
              Al Motkamel
            </a>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center">
          <!-- mobile apps -->
          <v-img :src="googlePlay" height="4rem" contain width="3rem"  ></v-img>
          <v-img :src="appStore" height="4rem" contain width="3rem" ></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="width: 100%; height: 10px; background-color: #8bd886"></div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      whiteLogo: require("./../../assets/images/logo-white.png"),
      googlePlay: require("./../../assets/images/play-store.svg"),
      appStore: require("./../../assets/images/app-store.svg"),
      twitterUrl: "https://twitter.com/ALM2070",
      instagramUrl: "https://www.instagram.com/alinm.a123/",
    };
  },

  methods: {
    openTwitter() {
      window.open(this.twitterUrl, "_blank");
    },
    openInstagram() {
      window.open(this.instagramUrl, "_blank");
    },
  },
};
</script>

<style></style>
