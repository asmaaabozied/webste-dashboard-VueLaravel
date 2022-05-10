<template>
  <div>
    <v-card>
      <v-card-title>{{$t('general.details')}}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{$t('general.customerName')}}</v-col>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{customerName}}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{$t('general.phone')}}</v-col>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{phone}}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{$t('general.deviceType')}}</v-col>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{deviceType}}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{$t('general.manufacturer')}}</v-col>
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">{{manufacturer}}</v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>{{$t('general.location')}}</v-card-title>
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
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn :to="{ name: 'g4'}" rounded color="primary">{{$t('request.orderPayments')}}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: null,
      phone: null,
      deviceType: null,
      manufacturer: null,
      location: null,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      id: this.$route.params.id
    };
  },
  methods: {
    load() {
      if (this.id)
        axios
          .get(`/api/InstallmentOrder/${this.id}`)
          .then(res => {
            let data = res.data.data;
            this.customerName = data.name;
            this.phone = data.phone;
            this.manufacturer = data.manufacturer;
            this.deviceType =
              data.device_type == "electronic"
                ? this.$t("general.electric")
                : this.$t("general.conditioner");
            this.location = {
              lat: parseFloat(data.installation_lat),
              lng: parseFloat(data.installation_lon)
            };
            this.mapCenter = this.location;
          })
          .catch(e => {
            console.warn(err)
          });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.load();
    });
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