<template>
    <v-list subheader>
        <v-subheader class="font-weight-bold text-h5">{{$t('transactions.payInfo')}}</v-subheader>
        <v-list-item v-for="(item , index) in dataShown" :key="index">
            <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
                <v-list-item-subtitle v-if="typeof item.value == 'object'">
                    <div class="mx-2">
                        <v-list-item v-for="(item , index) in item.value" :key="index">
                            <v-list-item-content>
                                <v-list-item-title>{{item.name}}</v-list-item-title>
                                <v-list-item-subtitle>{{item.value}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list-item-subtitle>
                <v-list-item-subtitle v-else>{{item.value}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</template>

<script>
    export default {
        name: "PayInfo",
        props: {
            data: {
                type: Object,
                default: () => {
                },
            },
        },
        computed: {
            dataShown() {
                if (this.data && this.data.data['Data'] != undefined){
                let data = this.data.data['Data'];
                    return [
                        {name: this.$t('transactions.comments'), value: data['Comments']},
                        {name: this.$t('transactions.expiryDate'), value: data['ExpiryDate']},
                        {name: this.$t('transactions.invoiceDisplayValue'), value: data['InvoiceDisplayValue']},
                        {name: this.$t('transactions.currency'), value: data['InvoiceTransactions'][0]['Currency']},
                        {
                            name: this.$t('transactions.paymentGateway'),
                            value: data['InvoiceTransactions'][0]['PaymentGateway']
                        },
                        {name: this.$t('transactions.referenceId'), value: data['InvoiceTransactions'][0]['ReferenceId']},
                        {
                            name: this.$t('transactions.transactionDate'),
                            value: data['InvoiceTransactions'][0]['TransactionDate']
                        },
                        {
                            name: this.$t('transactions.transactionStatus'),
                            value: data['InvoiceTransactions'][0]['TransactionStatus']
                        },
                    ]
                }
                return [];
            },
        },
    }
</script>

<style scoped>

</style>
