<template>
  <div>
    <v-row justify="center" class="my-1">
      <div class="ad-container">
        <v-carousel height="100%" cycle hide-delimiters :show-arrows="false">
          <v-carousel-item
            v-for="(item, i) in internalAds"
            :key="i"
            :src="item.image"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </v-row>
    <v-row justify="center" class="my-3">
      <v-card flat width="80vw">
        <v-card-title>{{ $t('general.welcome') + $store.state.user.userName }}</v-card-title>
        <v-card-text class="d-flex flex-column align-center">
          <div class="my-4">
            <v-btn :to="{ name: 'g3'}">{{$t('general.orders')}}</v-btn>
          </div>
          <div class="my-4">
            <v-btn :to="{ name: 'g4'}">{{$t('general.principalPayment')}}</v-btn>
          </div>
          <div class="my-4">
            <v-btn :to="{ name: 'g7'}">{{$t('contactUs.contactUs')}}</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="center" class="my-1">
      <div class="ad-container">
        <!-- google adSense -->
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      internalAds: []
    };
  },
  methods: {
    load() {
      axios
        .get(`/api/advertArea`)
        .then(res => {
          this.internalAds = res.data.data.resource.data;
        })
        .catch(err => {
           console.warn(err)
        });
    }
  },
  created() {
    this.load();
  }
};
</script>

<style scoped>
</style>