<template>
    <v-dialog v-model="showPayDialog" max-width="400px" scrollable style="height: 100%">
        <v-card>
            <v-card-title>{{$t('transactions.selectPaymentMethod')}}</v-card-title>
            <v-subheader>{{$t('transactions.waitImageLoad')}}</v-subheader>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
                <v-radio-group v-model="paymentsMethodSelected" column class="px-4">
                    <v-radio class="mt-2" :key="index" :value="item.PaymentMethodId" v-for="(item , index) in paymentsMethod">
                        <template slot="label">
                            <img  class="paymentImg" :src="item.ImageUrl">
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-end p-2">
                <v-btn color="blue darken-1" outlined  @click="close()">{{$t('general.cancel')}}</v-btn>
                <v-btn color="green" class="white--text" @click="executePayment()">{{$t('transactions.pay')}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "PayDialog",
        props: {
            showPayDialog: {
                type: Boolean,
                default: () => false,
            },
            transactionsForPay: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            paymentsMethodSelected: '',
            paymentsMethod: [],
        }),
        mounted() {
            this.load()
        },
        methods: {
            close(){
                this.$emit('close');
            },
            load() {
                axios.post("/api/initiatePayment", {
                    InvoiceAmount: Math.abs(this.transactionsForPay.amount),
                    CurrencyIso: "SAR",
                }).then(({data}) => this.paymentsMethod = data.data.Data.PaymentMethods)
                        .catch((e) => {
                            console.warn(err)
                        });
            },
            executePayment() {
                axios.post("/api/executePayment", {
                    PaymentMethodId: this.paymentsMethodSelected,
                    InvoiceValue: Math.abs(this.transactionsForPay.amount),
                    CurrencyIso: "SAR",
                    transaction_id: this.transactionsForPay.id
                }).then(({data}) => {
                    if (data.data.Data.PaymentURL) {
                        window.open(data.data.Data.PaymentURL , '_self')
                    }
                }).catch((e) => {
                    console.warn(err)
                });
            }
        }
    }
</script>

<style scoped>
    .paymentImg {
        width: 100px;
        height: 100px;
    }
    /deep/ .v-dialog{
        height: 100% !important;
    }
</style>
