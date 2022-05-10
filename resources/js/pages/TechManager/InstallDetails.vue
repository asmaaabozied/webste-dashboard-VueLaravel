//tm6
<template>
  <div>
    <v-card>
      <v-card-title>{{ $t('technical.serviceDetails') }}</v-card-title>
      <v-card-text>
        <div>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step :complete="step >= 0" step="0">{{$t('general.received')}}</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="step >= 1 && step != 5" step="1">{{$t('general.processing')}}</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="step >= 2 && step != 5" step="2">{{$t('general.inMaintenece')}}</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="step >= 3 && step != 5" step="3">{{$t('myRequests.ready')}}</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step v-if="step >= 4" :complete="step >= 4 && step != 5" step="4">{{$t('myRequests.declined')}}</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step v-if="step >= 5" :complete="step >= 5 && step != 5" step="5">{{$t('myRequests.declinedByCustomer')}}</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step v-if="step >= 6" :complete="step >= 6 && step != 5" step="4">{{$t('myRequests.unfixedDevice')}}</v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
        <br />
        <!-- details -->
        <v-row>
          <v-col cols="4">{{$t('general.name')}}</v-col>
          <v-col cols="8">{{ order.name }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{$t('order.deviceType')}}</v-col>
          <v-col cols="8">
            {{ order.device_type == "conditioner"
            ? this.$t("general.conditioner")
            : this.$t("general.electric") }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{$t('order.manufactureName')}}</v-col>
          <v-col cols="8">{{ order.manufacturer }}</v-col>
        </v-row>

        <v-row>
          <v-col cols="2">{{$t('general.location')}}</v-col>
          <v-col cols="5">
            <v-card>
              <v-card-title>{{$t('installment.disassembleLocation')}}</v-card-title>
              <v-card-text>
                <div class="map">
                  <GmapMap
                    :center="disassembleMapCenter"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%"
                  >
                    <GmapMarker :position="disassembleLocation" />
                  </GmapMap>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card>
              <v-card-title>{{$t('installment.installmentLocation')}}</v-card-title>
              <v-card-text>
                <div class="map">
                  <GmapMap
                    :center="installMapCenter"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%"
                  >
                    <GmapMarker :position="installmentLocation" />
                  </GmapMap>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- fees -->
<!--        <h4>{{$t('general.price')}}</h4>-->
<!--        <v-row>-->
<!--          <v-col cols="2">-->
<!--            <v-text-field :label="$t('general.value')" type="Number" min="0" v-model="price"></v-text-field>-->
<!--          </v-col>-->
<!--          <v-col cols="2" class="d-flex align-center">-->
<!--            <v-btn rounded @click="setPrice">{{$t('general.set')}}</v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
        <br />
      </v-card-text>
      <v-card-actions class="d-flex justify-center" v-if="$checkIfOrderStatusNotIn($getOrderStatus(order.order_info.status).value , [1,2,3,4,5,6])">
        <v-btn color="primary" class="mx-2" @click="assignTech">{{ $t('technical.assignTech') }}</v-btn>
        <!--        <v-btn color="primary" class="mx-2" @click="finishOrder">{{ $t('general.finishOrder') }}</v-btn>-->
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mdiPlusCircleOutline } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        mdiPlusCircleOutline
      },
      id: this.$route.params.id,
      type: this.$route.params.type,
      step: 1,
      items: [],
      price: null,
      order: {
        order_info: {}
      },
      disassembleMapCenter: { lat: 24.774265, lng: 46.738586 },
      installMapCenter: { lat: 24.774265, lng: 46.738586 },
      disassembleLocation: null,
      installmentLocation: null
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    setPrice() {
      let type = this.type;
      axios
        .put(`/api/${this.$getOrderTypeAPI(type)}/${this.id}`, {
          price: this.price
        })
        .then(({ data }) => {
          this.$notify({ text: this.$t("general.success"), type: "success" });
        })
        .catch(res => {});
    },
    assignTech() {
      this.$router.push({
        name: "tm5",
        params: {
          orderId: this.order.id,
          id: this.order.order_id,
          type: this.type
        }
      });
    },
    finishOrder() {
      axios
        .post(`/api/`)
        .then(res => {})
        .catch(err => {});
    },
    load() {
      let type = this.type;
      axios
        .get(`/api/${this.$getOrderTypeAPI(type)}/${this.id}`)
        .then(({ data }) => {
          this.order = data.data;
          this.step = this.$getOrderStatus(this.order.order_info.status).value;
          this.disassembleLocation = {
            lat: this.order.decoding_lat,
            lng: this.order.decoding_lon
          };
          this.installmentLocation = {
            lat: this.order.installation_lat,
            lng: this.order.installation_lon
          };
          this.disassembleMapCenter = this.disassembleLocation;
          this.installMapCenter = this.installmentLocation;
        });
    }
  }
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 400px;
  background-color: gray;
}
</style>
