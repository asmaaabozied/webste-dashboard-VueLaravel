<template>
  <div>
    <v-card>
      <v-card-text>
        <div class="text-center my-4">
          <h3>{{ $t("request.chooseOrderType") }}</h3>
        </div>
        <div class="d-flex flex-row justify-center">
          <v-btn class="mx-1" :to="{ name: 'c1' }" rounded>{{
            $t("request.maintenancewWarranty")
          }}</v-btn>
          <v-btn class="mx-1" :to="{ name: 'c3' }" rounded>{{
            $t("request.maintenancenWarranty")
          }}</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Create Maintenance Order" : "إنشاء طلب صيانة",
    };
  },
};
</script>

<style></style>
