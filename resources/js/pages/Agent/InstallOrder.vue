<template>
  <div>
    <v-card elevation="3">
      <v-card-title>{{ $t("myRequests.InstallationRequest") }}</v-card-title>
      <v-card-text class="d-flex justify-center">
        <div style="width: 80%;">
          <v-row>
            <v-col cols="12">
              <v-text-field
                :label="$t('general.customerName')"
                :error-messages="nameErrors"
                outlined
                rounded
                dense
                v-model="name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :label="$t('general.phone')"
                :error-messages="phoneErrors"
                outlined
                rounded
                dense
                v-model="phone"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-select
                v-model="deviceType"
                :items="deviceTypes"
                :label="$t('order.deviceType')"
                :error-messages="deviceTypeErrors"
                outlined
                rounded
                dense
                clearable
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-select
                :items="manufacturers"
                :label="$t('general.manufacturer')"
                rounded
                outlined
                dense
                v-model="manufacturer"
                :item-text="`name_${$i18n.locale}`"
                :item-value="`name_${$i18n.locale}`"
                :error-messages="manufacturerErrors"
              ></v-select>
            </v-col>
          </v-row>
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
              <div class="red--text" v-for="e in locationErrors" :key="e">
                {{ e }}
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
      <br />
      <v-card-actions class="d-flex justify-center">
        <v-btn rounded color="primary" @click="save">{{
          $t("general.save")
        }}</v-btn>
        <v-btn rounded :to="{ name: 'home' }">{{ $t("general.cancel") }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import { mdiMapMarkerPlus, mdiMapMarkerOff } from "@mdi/js";

export default {
  data() {
    return {
      name: null,
      phone: null,
      manufacturer: null,
      deviceType: null,
      location: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      icons: { mdiMapMarkerPlus, mdiMapMarkerOff },
      deviceTypes: [
        { text: this.$t("general.electric"), value: 0 },
        { text: this.$t("general.conditioner"), value: 1 },
      ],
      manufacturers: [],
    };
  },
  validations: {
    name: {
      required,
    },
    phone: {
      required,
    },
    manufacturer: {
      required,
    },
    deviceType: {
      required,
    },
    location: {
      required,
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required &&
        errors.push(this.$t("validate.setLocation"));
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    manufacturerErrors() {
      const errors = [];
      if (!this.$v.manufacturer.$dirty) return errors;
      !this.$v.manufacturer.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    deviceTypeErrors() {
      const errors = [];
      if (!this.$v.deviceType.$dirty) return errors;
      !this.$v.deviceType.required && errors.push(this.$t("validate.required"));
      return errors;
    },
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "error",
        });
        return;
      }

      axios
        .post("/api/InstallmentOrder", {
          device_type: this.deviceType,
          manufacturer: this.manufacturer,
          name: this.name,
          phone: this.phone,
          decoding_lat: 0,
          decoding_lon: 0,
          installation_lat: this.location.lat,
          installation_lon: this.location.lng,
        })
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
        })
        .catch((e) => {
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
    getManufacturer() {
      this.manufacturers = [];
      axios
        .get(`/api/manufacture`)
        .then((res) => {
          console.log(res);
          this.manufacturers = res.data.data;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },
  created(){
    this.getManufacturer();
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
