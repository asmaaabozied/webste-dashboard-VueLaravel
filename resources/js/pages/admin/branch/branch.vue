<template>
  <v-container>
    <v-row justify="end">
      <v-col cols="2">
        <v-btn v-text="$t('general.return')" @click="$router.go(-1)"> </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title primary-title v-text="$t('general.branch')">
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="nameAr"
                  :label="$t('general.nameAr')"
                  outlined
                  rounded
                  dense
                  autocomplete="off"
                  autocorrect="off"
                  spellcheck="false"
                  :error-messages="nameArErrors"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="nameEn"
                  :label="$t('general.nameEn')"
                  outlined
                  rounded
                  dense
                  autocomplete="off"
                  autocorrect="off"
                  spellcheck="false"
                  :error-messages="nameEnErrors"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="radius"
                  label="Radius"
                  type="number"
                  min="0"
                  outlined
                  rounded
                  dense
                  autocomplete="off"
                  autocorrect="off"
                  spellcheck="false"
                  :hint="$t('general.radiusHint')"
                  persistent-hint
                  :error-messages="radiusErrors"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-card class="mb-4">
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
                  <div class="red--text" v-for="e in locationErrors" :key="e">
                    {{ e }}
                  </div>
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

            <!-- <v-row justify="center">
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="workshops"
                  :items="workshopsItems"
                  multiple
                  outlined
                  dense
                  rounded
                  chips
                  item-text="label"
                  item-value="id"
                  label="Workshops select"
                ></v-autocomplete>
              </v-col>
            </v-row> -->
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn rounded color="success" @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEye, mdiEyeOff, mdiMapMarkerPlus, mdiMapMarkerOff } from "@mdi/js";
import { required } from "vuelidate/lib/validators";

export default {
  name: "branch-show",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Branch" : "الفرع",
    };
  },

  data() {
    return {
      icons: {
        mdiEye,
        mdiEyeOff,
        mdiMapMarkerPlus,
        mdiMapMarkerOff,
      },
      id: 0,
      nameAr: null,
      nameEn: null,
      radius: null,
      location: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
    };
  },

  validations: {
    nameAr: { required },
    nameEn: { required },
    location: { required },
    radius: { required },
  },

  methods: {
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
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }

      if (this.id == 0) {
        let form = new FormData();
        form.append("name", this.nameEn);
        form.append("name_ar", this.nameAr);
        form.append("lat", this.location.lat);
        form.append("lon", this.location.lng);
        form.append("radius", this.radius);

        axios
          .post("/api/branch", form)
          .then((res) => {
            this.$router.push({ name: "sa13" });
          })
          .catch((err) => {
            for (const key in err.response.data) {
              if (err.response.data.hasOwnProperty(key)) {
                this.errorMessages.push(err.response.data[key]);
              }
            }
           console.warn(err)
          });
      } else if (this.id > 0) {
        let data = {
          name: this.nameEn,
          name_ar: this.nameAr,
          lat: this.location.lat,
          lon: this.location.lng,
          radius: this.radius,
        };

        axios
          .patch(`/api/branch/${this.id}`, data)
          .then((res) => {
            this.$router.push({ name: "sa13" });
          })
          .catch((err) => {
            for (const key in err.response.data) {
              if (err.response.data.hasOwnProperty(key)) {
                this.errorMessages.push(err.response.data[key]);
              }
            }
           console.warn(err)
          });
      }
    },
    load() {
      axios
        .get(`/api/branch/${this.id}`)
        .then((res) => {
          let data = res.data.data;
          this.nameAr = data.name_ar;
          this.nameEn = data.name;
          this.radius = parseInt(data.radius);
          this.location = { lat: data.lat, lng: data.lon };
          this.mapCenter = JSON.parse(JSON.stringify(this.location));
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    reset() {
      this.nameAr = null;
      this.nameEn = null;
      this.radius = 0;
      this.location = null;
    },
  },

  computed: {
    nameArErrors() {
      const errors = [];
      if (!this.$v.nameAr.$dirty) return errors;
      !this.$v.nameAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors() {
      const errors = [];
      if (!this.$v.nameEn.$dirty) return errors;
      !this.$v.nameEn.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    radiusErrors() {
      const errors = [];
      if (!this.$v.radius.$dirty) return errors;
      !this.$v.radius.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required &&
        errors.push(this.$t("validate.setLocation"));
      return errors;
    },
  },

  created() {
    this.id = parseInt(this.$route.params.id);
    if (this.id == 0) this.reset();
    else if (this.id > 0) this.load();
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
