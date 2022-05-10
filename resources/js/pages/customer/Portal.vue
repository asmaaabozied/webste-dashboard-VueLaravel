<template>
  <div>
    <v-row justify="center" class="my-1">
      <div class="ad-container" style="width: 1000px">
        <v-carousel height="100%" cycle hide-delimiters :show-arrows="false">
          <v-carousel-item
            v-for="(item, i) in internalAds"
            :key="i"
            :src="item.image"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </v-row>
    <div class="text-center text-h5">
      {{ $t("general.welcome") + $store.state.user.userName }}
    </div>

  
    <v-row justify="center" class="my-3 mx-16">
      <v-col cols="12" md="6" xl="6" v-for="(item, i) in items" :key="i" class="d-flex justify-center">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-col cols="12" md="10" xl="8">

          <v-card :elevation="hover ? 10 : 4" class="rounded" style="overflow: hidden;">
            <router-link :to="{ name: item.to }">
              <v-img height="15rem" :src="item.img"></v-img>
            </router-link>
            <v-card-actions class="d-flex justify-center">
              <v-btn class="text-h6" text :to="{ name: item.to }"> {{ item.label }} </v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
        </v-hover>
      </v-col>
    </v-row>

    <v-row justify="center" class="my-1">
      <div class="ad-container">
        <!-- <Adsense
          data-ad-client="ca-pub-1234567891234567"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          :data-full-width-responsive="true"
        ></Adsense>-->
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "customer-portal",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "My portal" : "مكتبي",
    };
  },

  data() {
    return {
      internalAds: [],
      items: [
        {
          img: require("./../../../assets/images/customerPortal/services.jpg"),
          label: this.$t("topNav.ourServices"),
          to: "c6",
        },
        {
          img: require("./../../../assets/images/customerPortal/products.jpg"),
          label: this.$t("home.shopProducts"),
          to: "c13",
        },
        {
          img: require("./../../../assets/images/customerPortal/orders.jpg"),
          label: this.$t("myRequests.myRequests"),
          to: "c2",
        },
        {
          img: require("./../../../assets/images/customerPortal/payment.jpg"),
          label: this.$t("transactions.transactions"),
          to: "c19",
        },
      ],
    };
  },

  methods: {
    load() {
      axios
        .get(`/api/advertArea`)
        .then((res) => {
          this.internalAds = res.data.data.resource.data;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
  },
  created() {
    this.load();
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
</style>
