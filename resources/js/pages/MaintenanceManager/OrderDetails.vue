<template>
  <div>
    <v-card>
      <v-card-title>{{ $getOrdertype(type) }}</v-card-title>
      <v-card-text>
        <div v-if="preventiveDetails">
          <v-row>
            <v-col cols="4">{{ $t("general.name") }}</v-col>
            <v-col cols="8">{{ preventiveDetails.business_name }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("genral.phone") }}</v-col>
            <v-col cols="8">{{
              preventiveDetails.business_phone_number
            }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("general.type") }}</v-col>
            <v-col cols="8">{{ preventiveDetails.business_type }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("general.deviceType") }}</v-col>
            <v-col cols="8">{{
              preventiveDetails.maintenance_type == "electronic"
                ? $t("general.electric")
                : $t("general.conditioner")
            }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("general.location") }}</v-col>
            <v-col cols="8">
              <v-card>
                <v-card-text>
                  <div class="map">
                    <GmapMap
                      :center="mapCenter"
                      :zoom="7"
                      map-type-id="terrain"
                      style="width: 100%; height: 100%"
                    >
                      <GmapMarker :position="location" />
                    </GmapMap>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div v-if="reviewDetails">
          <v-row>
            <v-col cols="4">{{ $t("general.description") }}</v-col>
            <v-col cols="8">{{ reviewDetails.description }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("request.orderType") }}</v-col>
            <v-col cols="8">{{
              $getOrdertype(reviewDetails.order_info.type)
            }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("general.date") }}</v-col>
            <v-col cols="8">{{ formatDate(reviewDetails.created_at) }}</v-col>
          </v-row>
        </div>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn v-if="$checkIfOrderStatusNotIn($getOrderStatus(preventiveDetails.order_info.status).value , [-1,3,4,5,6])"
                color="success"
          rounded
          @click="finish"
          >{{ $t("general.finish") }}</v-btn
        >
      </v-card-actions>
    </v-card>
    <!-- finish dialog -->
    <v-dialog v-model="finishDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{
          $t("general.finishOrder")
        }}</v-card-title>
        <v-card-text>{{ $t("general.isSure") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmFinishItem">{{
            $t("general.sure")
          }}</v-btn>
          <v-btn text @click="finishDialog = false">{{
            $t("general.close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "orderDetails",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Order details" : "تفاصيل طلب",
    };
  },

  data() {
    return {
      preventiveDetails: {
          order_info : {},
      },
      reviewDetails: null,
      location: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      finishDialog: false,
      finishInfo: null,
      status: null,
    };
  },
  methods: {
    load() {
      let url;
      if (this.type == "prevention_maintenance_order")
        url = `/api/PreventionMaintenanceOrder/${this.id}`;
      else if (this.type == "review_order")
        url = `/api/OrderReviewOrder/${this.id}`;

      axios
        .get(url)
        .then((res) => {
          if (this.type == "review_order") {
            this.reviewDetails = res.data.data;
          } else if (this.type == "prevention_maintenance_order") {
            this.preventiveDetails = res.data.data;
            this.location = {
              lat: parseFloat(res.data.data.lat),
              lng: parseFloat(res.data.data.lon),
            };
            this.mapCenter = this.location;
          }
          this.status = res.data.data.order_info.status;
        })
        .catch((res) => {
          console.warn(err)
        });
    },
    finish() {
      this.finishInfo = { type: this.type, id: this.id };
      this.finishDialog = true;
    },
    confirmFinishItem() {
      let url;
      switch (this.finishInfo.type) {
        case "prevention_maintenance_order":
          url = `/api/PreventionMaintenanceOrder/${this.finishInfo.id}`;
          break;
        case "review_order":
          url = `/api/OrderReviewOrder/${this.finishInfo.id}`;
          break;
        default:
          break;
      }

      axios
        .put(url, { status: 3 })
        .then((res) => {
          this.load();
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          this.finishDialog = false;
        });
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    type() {
      return this.$route.params.type;
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
  background-color: gray;
}
</style>
