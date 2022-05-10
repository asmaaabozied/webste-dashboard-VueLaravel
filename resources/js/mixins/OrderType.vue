<script>
export default {
  methods: {
    $getOrdertype(type) {
      switch (type) {
        case "maintenance_order":
          return this.$t("myRequests.maintenanceRequest");
          break;
        case "installment_order":
          return this.$t("myRequests.InstallationRequest");
          break;
        case "consultant_order":
          return this.$t("consultation.order");
          break;
        case "job_application_order":
          return this.$t("jobApplication.order");
          break;
        case "prevention_maintenance_order":
          return this.$t("preventiveMaintenance.order");
          break;
        case "review_order":
          return this.$t("services.srv05.title");
          break;

        default:
          break;
      }
    }
  }
};
</script>