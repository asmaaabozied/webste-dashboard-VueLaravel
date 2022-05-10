<template>
  <div>
    <v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="itemDialog = false">
          <v-icon>{{ icons.mdiClose }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-title>{{ $t("admin.agent") }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4">{{ $t("general.name") }}</v-col>
          <v-col cols="8">{{ name }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("auth.phone") }}</v-col>
          <v-col cols="8">{{ phone }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("auth.username") }}</v-col>
          <v-col cols="8">{{ username }}</v-col>
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
                  >
                    <GmapMarker :position="location" />
                  </GmapMap>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("general.actions") }}</v-col>
          <v-col cols="8">
            <v-btn-toggle v-model="isConfirmed" group>
              <v-btn :value="0">
                <v-icon class="mx-1" color="danger">{{
                  icons.mdiCloseOutline
                }}</v-icon>
                {{ $t("general.refused") }}
              </v-btn>
              <v-btn :value="1">
                <v-icon class="mx-1" color="teal">{{
                  icons.mdiCheckOutline
                }}</v-icon>
                {{ $t("general.accepted") }}
              </v-btn>
            </v-btn-toggle>
            <div></div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn rounded color="primary" @click="save">{{
          $t("general.save")
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mdiCloseOutline, mdiCheckOutline } from "@mdi/js";

export default {
  name: "agent",

  props: {
    id: {
      type: Number,
      default: 0,
    },
  },

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Agent" : "عميل",
    };
  },

  data() {
    return {
      icons: { mdiCloseOutline, mdiCheckOutline },
      name: null,
      phone: null,
      username: null,
      location: { lat: 0, lng: 0 },
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      isConfirmed: null,
    };
  },
  methods: {
    save() {
      axios
        .post(`/api/confiremGallery/${this.id}`, {
          isConfirmed: this.isConfirmed,
        })
        .then((res) => {
            this.$emit('close')
         this.load();
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    load() {
      axios
        .get(`/api/gallery/${this.id}`)
        .then((res) => {
          let data = res.data.data;
          this.name = data.name;
          this.phone = data.phone;
          this.username = data.user_info.user_name;
          this.isConfirmed = parseInt(data.isConfirmed);
          this.location.lat = parseFloat(data.lat);
          this.location.lng = parseFloat(data.lon);
        })
        .catch((err) => {
          console.warn(err)
        });
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(val, oldVal) {
        if (val) this.load();
      },
    },
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
