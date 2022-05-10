<template>
  <div>
    <v-card>
      <v-card-title>{{$t('general.details')}}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">{{$t('general.orderId')}}</v-col>
          <v-col cols="6">{{orderId}}</v-col>
        </v-row>
        <v-row>
          <v-col cols="6">{{$t('general.price')}}</v-col>
          <v-col cols="6">{{price }}</v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="pay">{{$t('payment.pay')}}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: 0
  },
  data() {
    return {
      id: 0,
      orderId: 0,
      price: 0
    };
  },
  methods: {
    load() {
      axios
        .get(``)
        .then(res => {})
        .catch(() => {});
    },
    pay() {
      this.$router.push({ name: "payment" });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // vm.load();
    });
  }
};
</script>

<style>
</style>