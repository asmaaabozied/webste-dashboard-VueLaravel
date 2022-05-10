<template>
  <div>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4">{{ $t("order.deviceType") }}</v-col>
          <v-col cols="8">{{ deviceType }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("order.manufactureName") }}</v-col>
          <v-col cols="8">{{ manufactureName }}</v-col>
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
        <v-row>
          <v-col cols="4">{{ $t("general.actions") }}</v-col>
          <v-col cols="8">
            <v-btn-toggle v-model="state" group>
              <v-btn value="1">
                <v-icon class="mx-1" color="teal">{{
                  icons.mdiCheckOutline
                }}</v-icon>
                {{ $t("general.accepted") }}
              </v-btn>
              <v-btn value="4">
                <v-icon class="mx-1" color="danger">{{
                  icons.mdiCloseOutline
                }}</v-icon>
                {{ $t("general.refused") }}
              </v-btn>
            </v-btn-toggle>
            <div>
              <small class="red--text" v-for="e in stateErrors" :key="e">{{
                e
              }}</small>
            </div>
            <v-textarea
              :error-messages="reasonErrors"
              :label="$t('general.reason')"
              v-if="state == 4"
              v-model="reason"
              filled
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="save" color="primary" rounded>{{
          $t("general.save")
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mdiCheckOutline, mdiCloseOutline } from "@mdi/js";
import { required, requiredUnless } from "vuelidate/lib/validators";
import previewer from "./../../components/imagePreview";

export default {
  name: "pendingInstallOrder",

  components: {
    previewer,
  },

  data() {
    return {
      icons: {
        mdiCheckOutline,
        mdiCloseOutline,
      },
      id: this.$route.params.id,
      name: null,
      deviceType: null,
      manufactureName: null,
      disassembleMapCenter: { lat: 24.774265, lng: 46.738586 },
      installMapCenter: { lat: 24.774265, lng: 46.738586 },
      disassembleLocation: null,
      installmentLocation: null,
      reason: null,
      state: null,
      customerInfo: null,
    };
  },

  validations: {
    state: {
      required,
    },
    reason: {
      required: requiredUnless(function() {
        if (this.state == 1) return true;
        else return false;
      }),
    },
  },

  methods: {
    load() {
      axios
        .get(`/api/InstallmentOrder/${this.id}`)
        .then((res) => {
          let data = res.data.data;
          this.customerInfo = {
            name: res.data.data.order_info.user_info.customer.name,
            mobile: res.data.data.order_info.user_info.customer.phone,
          };

          this.name = data.name;
          this.deviceType =
            data.device_type == "conditioner"
              ? this.$t("general.conditioner")
              : this.$t("general.electric");
          this.manufactureName = data.manufacturer;

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
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      axios
        .put(`/api/InstallmentOrder/${this.$route.params.id}`, {
          status: this.state,
          rejected_desc: this.reason,
        })
        .then((res) => {
          this.$router.push({ name: "im1" });
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
        })
        .catch((res) => {
          console.warn(err)
        });
    },
  },

  computed: {
    stateErrors() {
      const errors = [];
      if (!this.$v.state.$dirty) return errors;
      !this.$v.state.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    reasonErrors() {
      const errors = [];
      if (!this.$v.reason.$dirty) return errors;
      !this.$v.reason.required && errors.push(this.$t("validate.required"));
      return errors;
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
