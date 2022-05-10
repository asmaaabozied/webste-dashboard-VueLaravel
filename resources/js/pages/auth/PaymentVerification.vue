<template>
    <v-container fill-height class="d-flex align-center justify-center">
        <v-card flat>
            <v-card-text>
                <div class="text-center">
                    <h1 class="text-danger mb-5"
                        v-text="responseMessage == '' ? this.$t('general.checkPaymentRunning') : responseMessage">
                        {{responseMessage}}</h1>
                    <br>
                    <div>{{ $t("auth.returnToMain") }}</div>
                    <router-link :to="{ name: 'home' }">{{$t("topNav.home")}}
                    </router-link>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            name: "PaymentVerification",
            img: require("../../../assets/images/page401.svg"),
            responseMessage: '',
        }),
        mounted() {
            let query = this.$router.currentRoute.query;
            if (query.paymentId != null && query.transaction_id != null) {
                axios.get('/api/payment/checkPayment', {params: query})
                        .then((res) => {
                            let status = res.data.data.original.data.Data.InvoiceStatus === "Paid";
                            if (status) {
                                this.showSuccessMessage(this.$t("general.paymentRouteSuccess"));
                                this.$router.push({name: "c19"})
                            }else{
                                this.showErrorMessage(this.$t('general.error'));
                                this.responseMessage = this.$t('general.error');
                            }
                        }).catch(error => {
                    this.responseMessage = this.$t('general.paymentFailedWithError') + error.response.data.message;
                    this.showErrorMessage(error.response.data.message);
                })
            } else {
                this.responseMessage = this.$t('general.paymentFailedWithError') + this.showErrorMessage(this.$t("general.paymentRouteFail"));
            }
        },
        methods: {
        },
    };
</script>

<style></style>
