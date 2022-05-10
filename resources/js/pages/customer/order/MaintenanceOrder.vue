<template>
  <div class="ma-5">
    <div class="pa-2 px-5 b-back mb-3">
      <h3>
        {{ warranty ? $t("request.maintenancewWarranty") : $t("request.maintenancenWarranty") }}
      </h3>
    </div>
    <v-stepper v-model="step" class="ma-2">

        <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1" v-text="$t('admin.info')"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2" v-text="$t('general.location')"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" v-text="$t('order.appointment')"></v-stepper-step>

        </v-stepper-header>

      <v-stepper-items>

          <v-stepper-content step="1">
              <v-card class="mb-12" flat>

                  <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-select
                                  v-model="payment_type"
                                  :items="paymentType"
                                  :label="$t('payment.PaymentMethods')"
                                  :error-messages="deviceErrors"
                                  outlined
                                  rounded
                                  dense
                                  clearable
                          />
                      </v-col>
                  </v-row>

                  <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-select
                                  :items="manufacturers"
                                  :label="$t('order.manufactureName')"
                                  rounded
                                  outlined
                                  dense
                                  clearable
                                  v-model="manufacture"
                                  :item-text="`name_${$i18n.locale}`"
                                  item-value="id"
                                  :error-messages="manufactureErrors"
                                   @change="getManufacturersDevices()"
                          ></v-select>
                      </v-col>
                  </v-row>

                  <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-select
                                  v-model="device_type"
                                  :items="deviceTypes"
                                  :label="$t('order.deviceType')"
                                  :error-messages="deviceErrors"
                                  outlined
                                  rounded
                                  dense
                                  clearable
                          />
                      </v-col>
                  </v-row>

                  <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-textarea
                                  v-model="description"
                                  :label="$t('order.problemDescription')"
                                  :error-messages="descriptionErrors"
                                  outlined
                                  rounded
                                  dense
                                  clearable
                                  no-resize
                          />
                      </v-col>
                  </v-row>

                  <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-file-input
                                  v-model="images"
                                  :label="$t('order.uploadDeviceImage')"
                                  accept="image/*"
                                  rounded
                                  outlined
                                  clearable
                                  dense
                                  chips
                                  multiple
                                  :prepend-icon="icons.mdiAttachment"
                                  :clear-icon="icons.mdiClose"
                          />
                      </v-col>
                  </v-row>

                  <v-row v-if="warranty == true" justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-file-input
                                  v-model="warranty_image"
                                  :label="$t('order.uploadWarrantyImage')"
                                  :error-messages="warrantyImageErrors"
                                  accept="image/*"
                                  rounded
                                  outlined
                                  dense
                                  clearable
                                  chips
                                  :prepend-icon="icons.mdiAttachment"
                                  :clear-icon="icons.mdiClose"
                          />
                      </v-col>
                  </v-row>

                  <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                          <v-text-field
                                  v-model="discount"
                                  :label="$t('admin.discountCode')"
                                  v-if="warranty == false"
                                  outlined
                                  rounded
                                  dense
                          />
                      </v-col>
                  </v-row>

                  <v-card-actions>
                      <v-btn
                              color="primary"
                              @click="nextStep"
                              v-text="$t('general.continue')"
                      >
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat>
            <v-card-title>{{ $t("order.location") }}</v-card-title>
            <v-card-text>
              <div class="map">
                <GmapMap
                  :center="mapCenter"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 100%; height: 100%"
                  @center_changed="updateCenter($event)"
                >
                  <GmapMarker
                    :position="location"
                    :draggable="true"
                    @dragend="setLocation($event.latLng)"
                  />
                </GmapMap>
                <div class="red--text" v-for="e in locationErrors" :key="e">
                  {{ e }}
                </div>
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn rounded @click="addMarker()">
                <v-icon>{{ icons.mdiMapMarkerPlus }}</v-icon>
                {{ $t("general.addMarker") }}
              </v-btn>
              <v-btn rounded @click="deleteMarker()">
                <v-icon>{{ icons.mdiMapMarkerOff }}</v-icon>
                {{ $t("general.deleteMarker") }}
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-btn
            color="primary"
            @click="nextStep"
            v-text="$t('general.continue')"
          >
          </v-btn>

          <v-btn text @click="previousStep" v-text="$t('general.previous')">
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" flat>
            <v-item-group v-model="selectedAppointment" mandatory>
              <v-container>
                <div v-if="hasLoadedBranches">
                  <!--  near branches -->
                  <div v-if="!noNearBranch">
                    <div
                      class="text-body-1 mb-2"
                      v-text="$t('order.nearstBranch')"
                    ></div>
                    <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                        <v-select
                          :items="nearstBranches"
                          v-model="selectedBranch"
                          :item-text="$i18n.locale == 'en' ? 'name' : 'name_ar'"
                          item-value="id"
                          outlined
                          dense
                          rounded
                        ></v-select>
                      </v-col>
                    </v-row>
                  </div>

                  <!-- no near branch -->
                  <div v-if="noNearBranch">
                    <div class="text-center text-body-1  mb-2">
                      {{ $t("order.noNearBranch") }}
                    </div>
                    <v-row justify="center">
                      <v-col cols="12" md="4" xl="3">
                        <v-select
                          :items="branches"
                          v-model="selectedBranch"
                          :item-text="$i18n.locale == 'en' ? 'name' : 'name_ar'"
                          item-value="id"
                          outlined
                          dense
                          rounded
                        ></v-select>
                      </v-col>
                    </v-row>
                  </div>

                  <!-- appointmets -->
                  <div v-if="hasLoadedAppointments">
                    <div
                      class="text-body-1 mb-2"
                      v-text="$t('order.selectAppointment')"
                    ></div>
                    <v-row>
                      <v-col
                        v-if="appointments.length > 0"
                        v-for="(item, i) in appointments"
                        :key="i"
                        cols="6"
                        md="2"
                      >
                        <v-item v-slot:default="{ active, toggle }">
                          <v-card
                            :color="
                              active ? 'blue-grey darken-1' : 'grey lighten-2'
                            "
                            height="150"
                            @click="toggle"
                            :dark="active"
                          >
                            <v-card-title class="d-flex justify-center">
                              <v-icon class="mx-1">
                                mdi-calendar-blank-outline
                              </v-icon>
                              <div
                                v-text="item.date_start"
                                class="text-body-2"
                              ></div>
                            </v-card-title>
                            <v-card-text>
                              <div class="text-body-2">
                                <v-icon class="mx-1">
                                  mdi-timeline-clock-outline
                                </v-icon>
                                {{ item.start_time }}
                              </div>
                              <div class="text-body-2">
                                <v-icon class="mx-1">
                                  mdi-timeline-clock-outline
                                </v-icon>
                                {{ item.end_time }}
                              </div>
                            </v-card-text>
                          </v-card>
                        </v-item>
                      </v-col>
                      <v-col v-else>
                        <h3>{{ $t("general.systemDosentHaveAppointment") }}</h3>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-container>
            </v-item-group>
          </v-card>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              color="primary"
              @click="nextStep"
              v-text="$t('general.save')"
            >
            </v-btn>
            <v-btn text @click="previousStep" v-text="$t('general.previous')">
            </v-btn>
          </v-card-actions>
        </v-stepper-content>

      </v-stepper-items>

    </v-stepper>
    <!--  -->
  </div>
</template>

<script>
import {
  mdiMapMarkerPlus,
  mdiMapMarkerOff,
  mdiAttachment,
  mdiClose,
  mdiTimelapse,
  mdiCalendar,
} from "@mdi/js";
import { required, requiredUnless } from "vuelidate/lib/validators";

export default {
  name: "createOrder",

  props: {
    warranty: { type: Boolean, default: false },
  },

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Create Maintenance Order" : "إنشاء طلب صيانة",
    };
  },

  data() {
    return {
      icons: {
        mdiMapMarkerPlus,
        mdiMapMarkerOff,
        mdiAttachment,
        mdiClose,
        mdiTimelapse,
        mdiCalendar,
      },
      step: 1,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      hasLoadedBranches: false,
      hasLoadedAppointments: false,
      noNearBranch: false,
      //items
      deviceTypes: [],
      paymentType: [
        { text: this.$t("general.cash"), value: 0 },
        { text: this.$t("general.online"), value: 1 },
      ],
      nearstBranches: [],
      branches: [],
      appointments: [],

      //form
      payment_type: null,
      device_type: null,
      manufacture: null,
      description: null,
      location: null,
      warranty_image: null,
      images: null,
      discount: null,
      selectedBranch: null,
      selectedAppointment: null,
      manufacturers: [],

    };
  },

  validations: {
    payment_type: { required },
    device_type: { required },
    manufacture: { required },
    description: { required },
    location: { required },
    warranty_image: {
      required: requiredUnless(function() {
        return !this.warranty;
      }),
    },
    selectedBranch: { required },
  },

  methods: {
    previousStep() {
      this.step--;
    },
    async nextStep() {
      switch (this.step) {
        case 1:
          this.$v.payment_type.$touch();
          this.$v.device_type.$touch();
          this.$v.manufacture.$touch();
          this.$v.description.$touch();
          this.$v.warranty_image.$touch();

          if (
            !this.$v.payment_type.$invalid &&
            !this.$v.device_type.$invalid &&
            !this.$v.manufacture.$invalid &&
            !this.$v.description.$invalid &&
            !this.$v.warranty_image.$invalid
          ) {
            this.step++;
            this.getGeoLocation();
          }
          break;
        case 2:
          this.$v.location.$touch();
          if (!this.$v.location.$invalid) {
            this.getNearstBranch();
            this.step++;
          }
          break;
        case 3:
          this.$v.selectedBranch.$touch();
          if (!this.$v.manufacture.$invalid) {
            this.saveOrder();
          }
          break;

        default:
          break;
      }
    },
    saveOrder() {

      if (
        this.appointments.length > 0 &&
        this.appointments[this.selectedAppointment] &&
        this.appointments[this.selectedAppointment].id != undefined
      ) {
        let appointmentId = this.appointments[this.selectedAppointment].id;
        let form = new FormData();
        form.append(`payment_method`, this.payment_type);
        form.append(`device_type`, this.device_type);
        form.append(`manufacture`, this.manufacture);
        form.append(`lat`, this.location.lat);
        form.append(`lon`, this.location.lng);
        form.append(`description`, this.description);
        form.append(`fix_place`, 0);
        form.append(`has_image`, this.has_image);
        form.append(`appointment_id`, appointmentId);
        if (this.discount) form.append(`discount`, this.discount);
        if (this.images)
          for (let i = 0; i < this.images.length; i++)
            form.append(`images[]`, this.images[i]);
        if (this.warranty_image)
          form.append(`warranty_image`, this.warranty_image);

        axios
          .post("/api/MaintenanceOrder", form)
          .then((res) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
            this.$router.push({ name: "c2" });
          })
          .catch((err) => {
            console.warn(err);
          });
      } else {
        this.showErrorMessage("please select an appointment");
      }
    },
    loadDefaults() {},
    setLocation(e) {
      this.location = { lat: e.lat(), lng: e.lng() };
    },
    updateCenter(e) {
      this.mapCenter = { lat: e.lat(), lng: e.lng() };
    },
    addMarker() {
      this.location = JSON.parse(JSON.stringify(this.mapCenter));
    },
    deleteMarker(e) {
      this.location = null;
    },
    resetForm() {
      this.device_type = null;
      this.manufacture = null;
      this.description = null;
      this.location = null;

      this.warranty_image = null;
      this.images = null;
      this.$v.$reset();
    },
    async getNearstBranch() {
      let form = new FormData();
      form.append("lat", this.location.lat);
      form.append("lon", this.location.lng);
      await axios.post("/api/branch/getNearestLocation", form).then((res) => {
        if (res.data.data.length > 0) {
          this.nearstBranches = res.data.data;
          this.selectedBranch = this.nearstBranches[0].id;
        } else {
          this.noNearBranch = true;
        }
      });

      if (this.nearstBranches.length == 0) {
        axios.get("/api/branch").then((res) => {
          this.branches = res.data.data;
        });
      }

      this.hasLoadedBranches = true;
    },
    getAppointments() {
      this.appointments = [];
      axios
        .get(`/api/appointment/getByBranch/${this.selectedBranch}`)
        .then((res) => {
          this.appointments = res.data.data;
          this.hasLoadedAppointments = true;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    getManufacturer() {
        this.manufacturers = [];
        axios
            .get(`/api/manufacture`)
            .then((res) => {
                this.manufacturers = res.data.data.data;
                console.log(this.manufacturers);
            })
            .catch((err) => {
                console.warn(err);
            });
    },
    getManufacturersDevices() {
        axios
            .get(`/api/getManufactureDevices/${this.manufacture}`)
            .then((res) => {
                this.deviceTypes = res.data.data;
            })
            .catch((err) => {
                console.warn(err);
            });
    },
    getGeoLocation() {
        this.$getLocation({
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
        })
            .then((coordinates) => {
                if (coordinates) {
                    this.location  = {lat: coordinates.lat, lng: coordinates.lng};
                    this.mapCenter = {lat: coordinates.lat, lng: coordinates.lng};
                }
            })
            .catch(() => {
                //
            });
    },
  },

  computed: {
    deviceErrors() {
      const errors = [];
      if (!this.$v.device_type.$dirty) return errors;
      !this.$v.device_type.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    manufactureErrors() {
      const errors = [];
      if (!this.$v.manufacture.$dirty) return errors;
      !this.$v.manufacture.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    warrantyImageErrors() {
      const errors = [];
      if (!this.$v.warranty_image.$dirty) return errors;
      !this.$v.warranty_image.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    has_image() {
      return this.images ? 1 : 0;
    },
  },

  watch: {
    selectedBranch(val) {
      if (val) this.getAppointments();
    },
  },

  created() {
    this.loadDefaults();
    this.getManufacturer();
  },
};
</script>

<style scoped>
.b-form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 100px 10px 100px;
}

.map {
  width: 100%;
  height: 300px;
  background-color: gray;
}

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
