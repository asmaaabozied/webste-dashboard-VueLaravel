<template>
  <!-- pending more info from api. this page needs refactor to match payment api -->
  <div class="d-flex justify-center">
    <div class="b-card">
      <div class="d-flex flex-column align-center pa-10">
        <h3>{{ $t("payment.PaymentMethods") }}</h3>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "payment",

  data() {
    return {
      PaymentMethods: [],
    };
  },

  methods: {
    save() {},
  },
};
</script>

<style scoped>
.b-card {
  width: 80%;
  border-radius: 25px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
</style>
