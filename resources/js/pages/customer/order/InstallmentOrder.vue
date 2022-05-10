<template>
  <div class="ma-5 b-section">
    <div class="pa-2 px-5 b-back">
      <h3>{{ $t("installment.order") }}</h3>
    </div>
    <v-form lazy-validation :valid="valid" ref="form">
      <v-stepper v-model="step" class="ma-2">

          <v-stepper-header>

              <v-stepper-step :complete="step > 1" step="1" v-text="$t('admin.info')"></v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="2" v-text="$t('order.appointment')"></v-stepper-step>

          </v-stepper-header>

        <v-stepper-items>

          <v-stepper-content step="1">
            <div class="pt-4" style="width: 100%">
              <div style="width: 100%" class="d-flex flex-column justify-center align-center">
                <div style="width: 80%">
                  <v-row class="mb-3">
                    <v-col cols="12" align="center" justify="center">
                      <v-btn-toggle v-model="form.type" rounded>

                        <v-btn @click="form.type=0">{{$t("installment.reassemble_and_assemble") }}</v-btn>

                        <v-btn @click="form.type=1">{{$t("installment.Installation") }}</v-btn>

                        <v-btn @click="form.type=2">{{$t("installment.Established") }}</v-btn>

                      </v-btn-toggle>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-select
                      v-model="form.device_type"
                      :items="deviceTypes"
                      :label="$t('installment.deviceType')"
                      :rules="[(v) => v || $requiredRules]"
                      outlined
                      rounded
                      dense
                      item-text="text"
                      item-value="value"
                      v-if="form.type != 1"
                    />
                  </v-row>
                  <v-row>
                    <v-select
                      :rules="[(v) => v || $requiredRules]"
                      :items="manufacturers"
                      :label="$t('installment.manufacturer')"
                      rounded
                      outlined
                      dense
                      v-model="form.manufacturer"
                      :item-text="`name_${$i18n.locale}`"
                      item-value="id"
                    ></v-select>
                  </v-row>
                  <v-row>
                    <v-col align="center" justify="center"
                      ><v-btn
                        @click="
                          item.count =
                            item.count > 0 ? item.count-- : item.count
                        "
                        ><v-icon>mdi-window-minimize </v-icon></v-btn
                      ></v-col
                    >
                    <v-col align="center" justify="center">
                      <v-text-field
                        v-model="item.count"
                        solo
                        readonly
                        class="shrink text-center"
                        :rules="[(v) => v > 0 || $requiredRules]"
                      ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center"
                      ><v-btn @click="item.count++"
                        ><v-icon>mdi-plus-thick </v-icon></v-btn
                      ></v-col
                    >
                  </v-row>

                  <v-row class="mb-2" align="center" justify="center">
                    <v-btn @click="addToItems()">{{
                      $t("installment.add")
                    }}</v-btn>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-card>
                        <v-card-title>{{
                          $t("installment.items")
                        }}</v-card-title>
                        <v-card-text>
                          <div v-for="(item, index) in items" :key="index">
                            <v-row>
                              <v-col cols="8">
                                <h4>
                                  {{ item.brand_name }} - {{ item.quantity }}
                                </h4>
                                <h6 v-if="form.type != 1">
                                  <span v-if="item.is_new">{{
                                    $t("installment.new")
                                  }}</span
                                  ><span v-else>{{
                                    $t("installment.old")
                                  }}</span>
                                </h6>
                              </v-col>
                              <v-col cols="4" align="right" justify="right">
                                <v-btn @click="RemoveItems(index)"
                                  ><v-icon>mdi-delete</v-icon></v-btn
                                >
                              </v-col>
                            </v-row>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" v-if="form.type == 0">
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
                              @center_changed="
                                updateCenter($event, 'disassemble')
                              "
                            >
                              <GmapMarker
                                :position="disassembleLocation"
                                :draggable="true"
                                @dragend="
                                  setLocation($event.latLng, 'disassemble')
                                "
                              />
                            </GmapMap>
                          </div>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn rounded @click="addMarker('disassemble')">
                            <v-icon>{{ icons.mdiMapMarkerPlus }}</v-icon>
                            {{ $t("general.addMarker") }}
                          </v-btn>
                          <v-btn rounded @click="deleteMarker('disassemble')">
                            <v-icon>{{ icons.mdiMapMarkerOff }}</v-icon>
                            {{ $t("general.deleteMarker") }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                    <v-col :cols="form.type != 0 ? '12' : '6'">
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
                              @center_changed="updateCenter($event, 'install')"
                            >
                              <GmapMarker
                                :position="installLocation"
                                :draggable="true"
                                @dragend="setLocation($event.latLng, 'install')"
                              />
                            </GmapMap>
                          </div>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn rounded @click="addMarker('install')">
                            <v-icon>{{ icons.mdiMapMarkerPlus }}</v-icon>
                            {{ $t("general.addMarker") }}
                          </v-btn>
                          <v-btn rounded @click="deleteMarker('install')">
                            <v-icon>{{ icons.mdiMapMarkerOff }}</v-icon>
                            {{ $t("general.deleteMarker") }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="nextStep"
                  v-text="$t('general.continue')"
                >
                </v-btn>
              </v-card-actions>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
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
                            :item-text="
                              $i18n.locale == 'en' ? 'name' : 'name_ar'
                            "
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
                            :item-text="
                              $i18n.locale == 'en' ? 'name' : 'name_ar'
                            "
                            item-value="id"
                            outlined
                            dense
                            rounded
                          ></v-select>
                        </v-col>
                      </v-row>
                    </div>
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
                          <h3>
                            {{ $t("general.systemDosentHaveAppointment") }}
                          </h3>
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
    </v-form>
  </div>
</template>

<script>
import { mdiMapMarkerPlus, mdiMapMarkerOff } from "@mdi/js";

export default {
  name: "InstallmentOrder",
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Create installment Order" : "إنشاء طلب تركيب",
    };
  },
  data() {
    return {
      icons: {
        mdiMapMarkerPlus,
        mdiMapMarkerOff,
      },
      valid: true,
      step: 1,
      hasLoadedBranches: false,
      hasLoadedAppointments: false,
      noNearBranch: false,
      selectedAppointment: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      deviceTypes: [
        { text: this.$t("installment.new"), value: 2 },
        { text: this.$t("installment.old"), value: 1 },
      ],
      form: {
        device_type: "",
        manufacturer: "",
        type: 0,
      },
      item: {
        count: 0,
      },
      installLocation: null,
      location: null,
      disassembleLocation: null,
      installMapCenter: { lat: 24.774265, lng: 46.738586 },
      disassembleMapCenter: { lat: 24.774265, lng: 46.738586 },
      nearstBranches: [],
      branches: [],
      appointments: [],
      selectedBranch: null,
      manufacturers: [],
      items: [],
    };
  },
  methods: {
    addToItems() {
      if (!this.$refs.form.validate()) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }
      this.items.push({
        brand_id: this.form.manufacturer,
        is_new: this.form.device_type - 1,
        quantity: this.item.count,
        brand_name: this.manufacturers.find(
          ({ id }) => id === this.form.manufacturer
        )[`name_${this.$i18n.locale}`],
      });
    },
    RemoveItems(index) {
      this.items.splice(index, 1);
    },
    previousStep() {
      this.step--;
    },
    async nextStep() {
      switch (this.step) {
        case 1:
          if ((this.disassembleLocation == null && this.form.type == 0) || this.installLocation == null) {
              this.$notify({
                text: this.$t("general.checkMapInputs"),
                type: "warning",
              });
              return;
            } else {
              this.getNearstBranch();
              this.step++;
            }
          break;
        case 2:
          this.save();
          break;
        default:
          break;
      }
    },
    async getNearstBranch() {
      let form = new FormData();
      form.append("lat", this.installMapCenter.lat);
      form.append("lon", this.installMapCenter.lng);
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
          console.log(res);
          this.manufacturers = res.data.data.data;
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
            this.location = { lat: coordinates.lat, lng: coordinates.lng };
            this.mapCenter = { lat: coordinates.lat, lng: coordinates.lng };
          }
        })
        .catch(() => {
          //
        });
    },
    save() {
      if (
        !this.$refs.form.validate() ||
        this.disassembleLocation == null ||
        this.installLocation == null
      ) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }
      (this.form.decoding_lat = this.disassembleLocation.lat),
        (this.form.decoding_lon = this.disassembleLocation.lng),
        (this.form.installation_lat = this.installLocation.lat),
        (this.form.installation_lon = this.installLocation.lng);

      if (
        this.appointments.length > 0 &&
        this.appointments[this.selectedAppointment] &&
        this.appointments[this.selectedAppointment].id != undefined
      ) {
        this.form.device_type = 1;
        this.form["appointment_id"] = this.appointments[this.selectedAppointment].id;
        this.form["type"] = this.form.type;
        this.form["items"] = this.items;
        this.form["manufacturer"] = this.form.manufacturer;
        axios
          .post("/api/InstallmentOrder", this.form)
          .then(({ data }) => {
            this.$notify({ type: "success", text: "Order has been added" });
            this.$router.push({ name: "c2" });
          })
          .catch((e) => console.log(e));
      } else {
        this.showErrorMessage("please select an appointment");
      }
    },
    setLocation(e, type) {
      if (type == "install") {
        this.installLocation = { lat: e.lat(), lng: e.lng() };
      } else {
        this.disassembleLocation = { lat: e.lat(), lng: e.lng() };
      }
    },
    updateCenter(e, type) {
      if (type == "install") {
        this.installMapCenter = { lat: e.lat(), lng: e.lng() };
      } else {
        this.disassembleMapCenter = { lat: e.lat(), lng: e.lng() };
      }
    },
    addMarker(type) {
      if (type == "install") {
        this.installLocation = JSON.parse(
          JSON.stringify(this.installMapCenter)
        );
      } else {
        this.disassembleLocation = JSON.parse(
          JSON.stringify(this.disassembleMapCenter)
        );
      }
    },
    deleteMarker(e, type) {
      if (type == "install") {
        this.installLocation = null;
      } else {
        this.disassembleLocation = null;
      }
    },
    resetForm() {
      this.form = {};
    },
  },
  watch: {
    selectedBranch(val) {
      if (val) this.getAppointments();
    },
  },

  mounted() {
    this.getManufacturer();
  },
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  overflow: hidden;
}

.map {
  width: 100%;
  height: 400px;
  background-color: gray;
}
</style>
