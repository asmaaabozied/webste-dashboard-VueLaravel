<template>
  <div>
    <v-card>
      <v-card-text>
        <div class="text-center my-4">
          <h3>{{ $t("payment.chooseMethod") }}</h3>
        </div>
        <v-row v-for="(item, i) in paymentWays" :key="i">
          <v-col cols="12" md="3" xl="2">
            <v-card>
              <v-img :src="item.ImageUrl" height="5rem" contain></v-img>
              <v-card-actions>
                <v-btn text v-text="$i18n.locale == 'en' ? item.PaymentMethodAr : item.PaymentMethodEn"> </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "paymentWays",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Transactions" : "عمليات الدفع",
    };
  },

  data() {
    return {
      paymentWays: [],
    };
  },

  methods: {
    load() {
      axios
      .post("/api/")
      .then(res => {
        //
      })
      .catch(err => {
        //
      });
    },

    created() {
      this.load();
    }
  }
};
</script>

<style></style>
