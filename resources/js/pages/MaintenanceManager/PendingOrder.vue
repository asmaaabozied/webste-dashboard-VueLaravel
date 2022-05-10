<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="7" xl="5">
        <v-card>
          <v-card-title>{{ $getOrdertype(type) }}</v-card-title>
          <v-card-text>
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
            <div v-if="maintenanceDetails">
              <!-- appointment -->
              <v-row>
                <v-col cols="4"> {{ $t("order.appointment") }} </v-col>
                <v-col cols="8">
                  <v-card v-if="maintenanceDetails.appointment">
                    <v-card-title class="d-flex flex-column justify-center">
                      <div>
                        <v-icon class="mx-1">mdi-calendar-blank-outline</v-icon>
                      </div>
                      <div
                        class="text-body-2"
                        v-text="maintenanceDetails.appointment.date_start"
                      ></div>
                    </v-card-title>
                    <v-card-text>
                      <div class="text-body-2">
                        <v-icon class="mx-1">mdi-clock-in </v-icon>
                        {{ maintenanceDetails.appointment.start_time }}
                      </div>
                      <div class="text-body-2">
                        <v-icon class="mx-1">mdi-clock-out </v-icon>
                        {{ maintenanceDetails.appointment.end_time }}
                      </div>
                      <div class="text-body-2">
                        <v-icon class="mx-1">mdi-office-building-marker</v-icon>
                        {{
                          $i18n.locale == "en"
                            ? maintenanceDetails.appointment.branch.name
                            : maintenanceDetails.appointment.branch.name_ar
                        }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.type") }}</v-col>
                <v-col cols="8">{{
                  maintenanceDetails.warranty_type == "with warranty"
                    ? $t("request.maintenancewWarranty")
                    : $t("request.maintenancenWarranty")
                }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("order.deviceType") }}</v-col>
                <v-col cols="8">{{
                  maintenanceDetails.device_type == "conditioner"
                    ? $t("general.conditioner")
                    : $t("general.electric")
                }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("order.manufactureName") }}</v-col>
                <v-col cols="8">{{ maintenanceDetails.manufacture }}</v-col>
              </v-row>
                <v-row>
                <v-col cols="4">{{ $t("general.description") }}</v-col>
                <v-col cols="8">{{ maintenanceDetails.description }}</v-col>
              </v-row>
              <v-row v-if="images">
                <v-col cols="4">{{ $t("general.image") }}</v-col>
                <v-col cols="8">
                  <previewer :images="images" width="100%" :height="200" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.warranty") }}</v-col>
                <v-col cols="8">
                  <previewer
                    :src="maintenanceDetails.warranty_image"
                    width="100%"
                    :height="200"
                  />
                </v-col>
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
            <div v-if="preventiveDetails">
              <v-row>
                <v-col cols="4">{{ $t("general.name") }}</v-col>
                <v-col cols="8">{{ preventiveDetails.business_name }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.phone") }}</v-col>
                <v-col cols="8">{{
                  preventiveDetails.business_phone_number
                }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.type") }}</v-col>
                <v-col cols="8">{{ preventiveDetails.business_type }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.type") }}</v-col>
                <v-col cols="8">{{
                  preventiveDetails.maintenance_type == "electronic"
                    ? $t("general.electric")
                    : $t("general.conditioner")
                }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.date") }}</v-col>
                <v-col cols="8">{{
                  formatDate(preventiveDetails.created_at)
                }}</v-col>
              </v-row>
            </div>
            <div v-if="reviewDetails">
              <v-row>
                <v-col cols="4">{{ $t("general.description") }}</v-col>
                <v-col cols="8">{{ reviewDetails.description }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.date") }}</v-col>
                <v-col cols="8">{{
                  formatDate(reviewDetails.created_at)
                }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="4">{{ $t("general.type") }}</v-col>
                <v-col cols="8">{{
                  $getOrdertype(reviewDetails.order_info.type)
                }}</v-col>
              </v-row>
            </div>
            <v-row>
              <v-col cols="4">{{ $t("general.actions") }}</v-col>
              <v-col cols="8">
                <v-btn-toggle v-model="status" group>
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
                  v-if="status == 4"
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiCheckOutline, mdiCloseOutline } from "@mdi/js";
import { required, requiredUnless } from "vuelidate/lib/validators";
import previewer from "./../../components/imagePreview";

export default {
  name: "pending-order",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title:
        locale == "en" ? "Pending maintenance order" : "طلب صيانة قيد الانتظار",
    };
  },

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
      type: this.$route.params.type,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      location: null,
      images: [],
      reason: null,
      status: null,
      maintenanceDetails: null,
      reviewDetails: null,
      preventiveDetails: null,
      customerInfo: null,
    };
  },
  validations: {
    status: {
      required,
    },
    reason: {
      required: requiredUnless(function() {
        if (this.status == 4) return false;
        else return true;
      }),
    },
  },
  methods: {
    load() {
      let url;
      if (this.type == "maintenance_order")
        url = `/api/MaintenanceOrder/${this.id}`;
      else if (this.type == "prevention_maintenance_order")
        url = `/api/PreventionMaintenanceOrder/${this.id}`;
      else if (this.type == "review_order")
        url = `/api/OrderReviewOrder/${this.id}`;

      axios
        .get(url)
        .then((res) => {
          if (this.type == "review_order") this.reviewDetails = res.data.data;
          else if (this.type == "prevention_maintenance_order")
            this.preventiveDetails = res.data.data;
          else if (this.type == "maintenance_order") {
            this.maintenanceDetails = res.data.data;
            this.location = {
              lat: parseFloat(res.data.data.lat),
              lng: parseFloat(res.data.data.lon),
            };
            this.mapCenter = this.location;
            if (res.data.data.images)
              res.data.data.images.forEach((element) => {
                this.images.push(element.image);
              });
          }
          this.customerInfo = {
            name: res.data.data.order_info.user_info.customer.name,
            mobile: res.data.data.order_info.user_info.customer.phone,
          };
        })
        .catch((err) => {
          console.log(err);
          console.warn(err)
        });
    },
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      let url;
      if (this.type == "maintenance_order")
        url = `/api/MaintenanceOrder/${this.id}`;
      else if (this.type == "prevention_maintenance_order")
        url = `/api/PreventionMaintenanceOrder/${this.id}`;
      else if (this.type == "review_order")
        url = `/api/OrderReviewOrder/${this.id}`;

      let data = { status: this.status };
      if (this.status == 4) data["rejected_desc"] = this.reason;
      axios
        .put(url, data)
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
          let newDestination;
          if (this.type == "maintenance_order") newDestination = "mm9";
          else newDestination = "mm10";

          this.$router.push({ name: newDestination, id: this.id });
        })
        .catch((res) => {
          console.warn(err)
        });
    },
  },

  computed: {
    stateErrors() {
      const errors = [];
      if (!this.$v.status.$dirty) return errors;
      !this.$v.status.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    reasonErrors() {
      const errors = [];
      if (!this.$v.reason.$dirty) return errors;
      !this.$v.reason.required && errors.push(this.$t("validate.required"));
      return errors;
    },
  },

  created() {
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
