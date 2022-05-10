<template>
    <v-dialog v-model="viewTransactionDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon green @click="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{$t('transactions.transaction')}}</v-toolbar-title>
            </v-toolbar>
            <div class="d-flex">
                <maintenance-order-info
                        style="width: 50%"
                        :data="transactionInfo['maintenance_order_info']"
                        v-if="transactionInfo['maintenance_order_info'] != null"
                ></maintenance-order-info>
                <product-info
                        style="width: 50%"
                        :data="transactionInfo['cart_info']"
                        v-else
                ></product-info>
                <pay-info style="width: 50%"
                          :data="JSON.parse(transactionInfo['payed_info'])"
                ></pay-info>

                <!--                <transaction-info-->
                <!--                        :data="JSON.parse(transactionInfo['payed_info'])"-->
                <!--                ></transaction-info>-->
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import MaintenanceOrderInfo from "./DialogComponents/MaintenanceOrderInfo";
    import ProductInfo from "./DialogComponents/ProductInfo";
    import PayInfo from "./DialogComponents/PayInfo";
    import TransactionInfo from "./DialogComponents/TransactionInfo";

    export default {
        name: "TransactionsInfoDialog",
        components: {TransactionInfo, PayInfo, ProductInfo, MaintenanceOrderInfo},
        props: {
            viewTransactionDialog: {
                type: Boolean,
                default: () => false,
            },
            transactionInfo: {
                type: Object,
                default: () => {
                },
            }
        },
        data: () => ({}),
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>
