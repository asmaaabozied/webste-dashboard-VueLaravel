<template>
  <div class="pt-10">
    <div class="d-flex flex-row justify-center mt-10">
      <v-card width="60vw" elevation="3" class="pa-12 mb-12">
        <v-card-title>{{ $t('auth.showProfile')}}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4">{{$t('auth.username')}}</v-col>
            <v-col cols="8">{{ username }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t('general.name') }}</v-col>
            <v-col cols="8">{{name}}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t('auth.phone')}}</v-col>
            <v-col cols="8">{{ phone }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
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
          <v-row v-if="approvedAgent">
            <v-col cols="12">
              <v-chip class="ma-2" color="indigo" text-color="white">
                <v-avatar left>
                  <v-icon>{{icons.mdiAccountCircle}}</v-icon>
                </v-avatar>
                {{ $t('auth.approvedAgent')}}
              </v-chip>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn rounded class="mx-2" color="primary" @click="edit">{{$t('general.edit')}}</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mdiAccountCircle } from "@mdi/js";

export default {
  props: {},
  data() {
    return {
      name: null,
      username: null,
      phone: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      location: null,
      approvedAgent: false,
      icons: {
        mdiAccountCircle
      }
    };
  },
  methods: {
    load() {
      if (this.$roleEquals("customer"))
        axios
          .get(`/api/customer/${this.id}`)
          .then(res => {
            let data = res.data.data;

            this.name = data.name;
            this.username = data.user_info.user_name;
            this.phone = data.phone;
            this.location = { lat: parseFloat(data.lat), lng: parseFloat(data.lon) };
            this.mapCenter = this.location;
          })
          .catch(err => {
            console.warn(err)
          });
      else if (this.$roleEquals("gallery"))
        axios
          .get(`/api/gallery/${this.id}`)
          .then(res => {
            let data = res.data.data;

            this.name = data.name;
            this.username = data.user_info.user_name;
            this.phone = data.phone;
            this.location.lat = parseFloat(data.lat);
            this.location.lng = parseFloat(data.lon);
            this.approvedAgent = data.approvedAgent;
          })
          .catch(err => {
            console.warn(err)
          });
    },
    edit() {
      this.$router.push({ name: "editProfile" });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.load();
    });
  },
  computed: {
    id() {
      return this.$store.state.user.id;
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