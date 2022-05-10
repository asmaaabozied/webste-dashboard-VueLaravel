<template>
  <div class="b-section b-back ma-5">
    <div class="pa-4">
      <h3 class="m-0" :class="{'text-right': $vuetify.rtl}">{{$t('services.inmaServicesSection')}}</h3>
    </div>

    <div class="pa-3">
      <div class="b-container">
        <service-item v-for="item in items" :key="item.id" :item="item" class="ma-4"></service-item>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceItem from "./ServiceItem";

export default {
  components: { ServiceItem },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get('/api/getAllService')
        .then(({data}) => {
            this.items=data.data
        });
  }
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.b-container {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
}
</style>