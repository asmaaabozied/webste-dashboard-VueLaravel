<template>
  <div>
    <v-card>
      <v-card-title>{{ $t("technical.RequestProcess.title") }}</v-card-title>
      <v-card-text>
        <!-- status  -->
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step >= 0" step="1">{{
              $t("general.received")
            }}</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="step == 1 && step !== 5" step="1">{{
              $t("general.processing")
            }}</v-stepper-step>
            <v-divider v-if="step !== 5"></v-divider>
            <v-stepper-step v-if="step !== 5" :complete="step == 2" step="2">{{
              $t("general.inMaintenece")
            }}</v-stepper-step>
            <v-divider v-if="step !== 5"></v-divider>
            <v-stepper-step v-if="step !== 5" :complete="step == 3" step="3">{{
              $t("general.ready")
            }}</v-stepper-step>
            <v-divider v-if="step !== 5"></v-divider>
            <v-stepper-step v-if="step == 4" :complete="step == 4" step="4">{{
              $t("myRequests.declined")
            }}</v-stepper-step>
            <v-stepper-step v-if="step == 5" :complete="step == 5" step="5">{{
              $t("myRequests.declinedByCustomer")
            }}</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <br />
        <v-row>
          <v-col cols="4">{{ $t("general.name") }}</v-col>
          <v-col cols="8">{{ name }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("order.deviceType") }}</v-col>
          <v-col cols="8">{{ deviceType }}</v-col>
        </v-row>
        <v-row v-if="manufactureName">
          <v-col cols="4">{{ $t("order.manufactureName") }}</v-col>
          <v-col cols="8" v-if="$i18n.locale == 'en'">{{ manufactureName.name_en }}</v-col>
          <v-col cols="8" v-else>{{ manufactureName.name_ar }}</v-col>
        </v-row>

        <!-- userInfo -->
        <div v-if="customerInfo">
          <v-row>
            <v-col cols="4">{{ $t("order.customername") }}</v-col>
            <v-col cols="8">{{ customerInfo.name }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("auth.mobile") }}</v-col>
            <v-col cols="8">{{ customerInfo.mobile }}</v-col>
          </v-row>
        </div>
        <!--  -->

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>{{ $t("installment.items") }}</v-card-title>
              <v-card-text>
                <div v-for="(item, index) in items" :key="index">
                  <v-row>
                    <v-col cols="8">
                      <h4 v-if="$i18n.locale == 'ar'">{{ item.brand.name_ar }} - {{ item.quantity }}</h4>
                      <h4 v-else>{{ item.brand.name_en }} - {{ item.quantity }}</h4>
                      <h6 v-if="type != 'reassemble and assemble'">
                        <span v-if="item.is_new">{{
                          $t("installment.new")
                        }}</span
                        ><span v-else>{{ $t("installment.old") }}</span>
                      </h6>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">{{ $t("general.location") }}</v-col>
          <v-col cols="5">
            <v-card>
              <v-card-title>{{
                $t("installment.disassembleLocation")
              }}</v-card-title>
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
              <v-card-title>{{
                $t("installment.installmentLocation")
              }}</v-card-title>
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

        <!-- pricing -->
        <!-- <h4>{{$t('general.pricing')}}</h4>
        <v-row>
          <v-col cols="2">
            <v-text-field :label="$t('general.value')" type="Number" min="0" v-model="feeValue"></v-text-field>
          </v-col>
          <v-col cols="2" class="d-flex align-center">
            <v-btn rounded @click="setFee">{{$t('general.save')}}</v-btn>
          </v-col>
        </v-row> -->
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import {} from "@mdi/js";

export default {
  data() {
    return {
      icons: {},
      id: this.$route.params.id,
      step: 1,
      milestones: [],
      name: null,
      deviceType: null,
      manufactureName: null,
      disassembleMapCenter: { lat: 24.774265, lng: 46.738586 },
      installMapCenter: { lat: 24.774265, lng: 46.738586 },
      disassembleLocation: null,
      installmentLocation: null,
      feeValue: null,
      customerInfo: null,
      items: null,
      type: null
    };
  },
  methods: {
    setFee() {},
    load() {
      axios
        .get(`/api/InstallmentOrder/${this.id}`)
        .then((res) => {
          this.customerInfo = {
            name: res.data.data.order_info.user_info.customer.name,
            mobile: res.data.data.order_info.user_info.customer.phone,
          };
          let data = res.data.data;
          this.step = this.$getOrderStatus(data.order_info.status).value;
          this.name = data.name;
          this.deviceType =
            data.device_type == "conditioner"
              ? this.$t("general.conditioner")
              : this.$t("general.electric");
          this.manufactureName = data.manufacture;

          this.disassembleLocation = {
            lat: data.decoding_lat,
            lng: data.decoding_lon,
          };
          this.disassembleMapCenter = JSON.parse(
            JSON.stringify(this.disassembleLocation)
          );

          this.installmentLocation = {
            lat: data.installation_lat,
            lng: data.installation_lon,
          };
          this.installMapCenter = JSON.parse(
            JSON.stringify(this.installmentLocation)
          );
          this.items = res.data.data.item;
          this.type = res.data.data.type;
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.load();
    });
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
