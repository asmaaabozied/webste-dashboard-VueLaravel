<script>
    export default {
        methods: {
            $checkIfUserCancelOrder(item) {
                return item.status !== 'order declined by client'
            },
            $checkIfOrderStatusNotIn(value, arr = []) {
                return !arr.includes(value);
            },
            $checkIfTechStatusInsert(value) {
                return this.$getTechnicalStatus(value) !== -1 ? this.$getOrderStatus(value) : false;
            },
            $getTechnicalStatus(status) {
                switch (status) {
                    case "failed":
                        return {value: 0, label: this.$t("myRequests.failed")};
                        break;
                    case "success":
                        return {value: 1, label: this.$t("myRequests.success")};
                        break;
                    default:
                        return {value: -1, label: this.$t('myRequests.notInsertYet')};
                        break;
                }
            },
            $getOrderStatus(status) {
                switch (status) {
                    case "received":
                        return {value: 0, label: this.$t("myRequests.received")};
                        break;
                    case "order is being processed":
                        return {value: 1, label: this.$t("myRequests.processing")};
                        break;
                    case "order under maintenance":
                        return {value: 2, label: this.$t("myRequests.maintaining")};
                        break;
                    case "order finish":
                        return {value: 3, label: this.$t("myRequests.ready")};
                        break;
                    case "order declined":
                        return {value: 4, label: this.$t("myRequests.declined")};
                        break;
                    case "order declined by client":
                        return {value: 5, label: this.$t("myRequests.declinedByCustomer")};
                        break;
                    case "order finish with unfixed device":
                        return {value: 6, label: this.$t("myRequests.unfixedDevice")};
                        break;
                    default:
                        return {value: -1, label: "error"};
                        break;
                }
            }
        }
    };
</script>
