<template>
  <div class="ma-5 b-section">
    <div class="pa-2 px-5 b-back">
      <h3>{{ $t("preventiveMaintenance.order") }}</h3>
    </div>
    <v-form lazy-validation :valid="valid" ref="form">
      <div class="pt-6 b-form-row d-flex align-center">
        <v-alert
          color="pink"
          dark
          border="top"
          :icon="icons.mdiHome"
          transition="scale-transition"
          >{{ $t("request.preventiveAlert") }}
        </v-alert>
      </div>
      <div class="pt-6 b-form-row d-flex align-start">
        <v-text-field
          v-model="business_name"
          :label="$t('preventiveMaintenance.fullName')"
          :rules="[(v) => !!v || $requiredRules]"
          outlined
          rounded
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
        </v-text-field>
      </div>
      <div class="b-form-row d-flex align-start">
        <v-text-field
          v-model="business_phone_number"
          :label="$t('preventiveMaintenance.phoneNumber')"
          :rules="[(v) => !!v || $requiredRules]"
          outlined
          rounded
          type="number"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        ></v-text-field>
      </div>
      <div class="b-form-row d-flex align-start">
        <v-text-field
          v-model="business_type"
          :label="$t('preventiveMaintenance.jobType')"
          :rules="[(v) => !!v || $requiredRules]"
          outlined
          rounded
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        ></v-text-field>
      </div>
      <div class="b-form-row d-flex align-start">
        <v-select
          v-model="manufactures_id"
          :items="deviceTypes"
          :label="$t('preventiveMaintenance.maintenanceType')"
          :rules="[(v) => v || $requiredRules]"
          :item-text="`name_${$i18n.locale}`"
          item-value="id"
          outlined
          rounded
          dense
        />
      </div>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>{{ $t("general.location") }}</v-card-title>
            <v-card-text>
              <div class="map">
                <GmapMap
                  :center="mapCenter"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 100%; height: 100%"
                  @center_changed="updateCenter"
                >
                  <GmapMarker
                    :position="location"
                    :draggable="true"
                    @dragend="setLocation($event.latLng)"
                  />
                </GmapMap>
                <!-- <div class="red--text" v-for="e in locationErrors" :key="e">{{e}}</div> -->
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn rounded @click="addMarker">
                <v-icon>{{ icons.mdiMapMarkerPlus }}</v-icon>
                {{ $t("general.addMarker") }}
              </v-btn>
              <v-btn rounded @click="deleteMarker">
                <v-icon>{{ icons.mdiMapMarkerOff }}</v-icon>
                {{ $t("general.deleteMarker") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div class="pa-6 d-flex justify-end">
        <v-btn
          v-if="
            $checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value, [
              3,
              4,
              5,
              6,
            ])
          "
          rounded
          color="primary"
          class="mx-2"
          @click="add()"
          >{{ $t("preventiveMaintenance.send") }}
        </v-btn>
        <v-btn
          v-if="
            $checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value, [
              -3,
              4,
              5,
              6,
            ])
          "
          rounded
          color="secondary"
          class="mx-2"
          :to="{ name: 'home' }"
          >{{ $t("general.cancel") }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mdiMapMarkerPlus, mdiMapMarkerOff, mdiHome } from "@mdi/js";

export default {
  name: "preventive",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title:
        locale == "en"
          ? "Create preventive maintenance order"
          : "إنشاء طلب صيانة وقائية",
    };
  },
  mounted() {
    this.$refs.form.resetValidation();
  },
  data() {
    return {
      valid: true,
      icons: { mdiMapMarkerPlus, mdiMapMarkerOff, mdiHome },
      id: this.$route.params.id,
      order_info: "",
      business_name: "",
      business_phone_number: "",
      business_type: "",
      manufactures_id: "",
      location: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      deviceTypes: [
        { text: this.$t("general.electric"), value: 1 },
        { text: this.$t("general.conditioner"), value: 2 },
      ],
    };
  },
  props: {
    isFromNotification: Boolean,
  },
  methods: {
    add() {
      if (!this.$refs.form.validate() || this.location == null) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }
      if (this.id == 0) {
        axios
          .post("/api/PreventionMaintenanceOrder", {
            device_type: this.device_type - 1,
            business_name: this.business_name,
            business_phone_number: this.business_phone_number,
            lat: this.location.lat,
            lon: this.location.lng,
            business_type: this.business_type,
            manufactures_id: this.manufactures_id,
            maintenance_type: 1,
          })
          .then(({ data }) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
            this.$router.push({ name: "c2" });
          })
          .catch((e) => console.log(e));
      } else {
        axios
          .put(`/api/PreventionMaintenanceOrder/${this.id}`, {
            business_name: this.business_name,
            business_phone_number: this.business_phone_number,
            lat: this.location.lat,
            lon: this.location.lng,
            business_type: this.business_type,
            manufactures_id: this.manufactures_id,
          })
          .then(({ data }) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
            this.$router.push({ name: "c2" });
          })
          .catch((e) => console.log(e));
      }
    },
    async load() {
      if (this.isFromNotification) {
        await axios
          .get(`/api/order/${this.id}`)
          .then((res) => {
            console.log(res);
            this.id = res.data.data.id;
          })
          .catch((err) => {
            console.warn(err);
          });
      }
      axios
        .get(`/api/PreventionMaintenanceOrder/${this.id}`)
        .then((res) => {
          let data = res.data.data;

          this.business_name = data.business_name;
          this.order_info = data.order_info;
          this.business_phone_number = data.business_phone_number;
          this.business_type = data.business_type;
          // this.manufactures_id =
          //   data.manufactures_id == "conditioner" ? 1 : 0;
          this.location = {
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lon),
          };
          this.mapCenter = this.location;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    async createNew() {
      this.business_name = null;
      this.business_phone_number = null;
      this.business_type = null;
      this.manufactures_id = null;
      this.location = null;
      await axios
        .get(`/api/manufacture`)
        .then((res) => {
          this.deviceTypes = res.data.data.data;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    setLocation(evnt) {
      this.location = { lat: evnt.lat(), lng: evnt.lng() };
    },
    updateCenter(evnt) {
      this.mapCenter = { lat: evnt.lat(), lng: evnt.lng() };
    },
    addMarker() {
      this.location = JSON.parse(JSON.stringify(this.mapCenter));
    },
    deleteMarker() {
      this.location = null;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.id > 0) vm.load();
      else vm.createNew();
    });
  },
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  overflow: hidden;
}

.b-form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 100px 30px 100px;
}

.b-form-row label {
  padding: 5px;
  width: 200px;
}

.map {
  width: 100%;
  height: 400px;
  background-color: gray;
}
</style>
