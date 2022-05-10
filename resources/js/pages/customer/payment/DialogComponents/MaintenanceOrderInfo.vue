<template>
    <v-list subheader>
        <v-subheader class="font-weight-bold text-h5">{{$t('transactions.orderInfo')}}</v-subheader>
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
        name: "MaintenanceOrderInfo",
        props: {
            data: {
                type: Object,
                default: () => {
                },
            },
        },
        computed: {
            dataShown() {
                let arr = [];
                if (this.data != undefined) {
                    arr = [
                        {name: this.$t('general.description'), value: this.data.description},
                        {name: this.$t('general.deviceType'), value: this.data.device_type},
                        {name: this.$t('order.manufactureName'), value: this.data.manufacture},
                        {name: this.$t('general.createdAt'), value: this.formatDate(this.data.created_at)},
                        {name: this.$t('general.warranty'), value: this.data.warranty_type},
                    ];
                }
                if (this.data['fee_info']) {
                    arr.push({
                        name: this.$t('general.fees'), value: this.getFees(this.data['fee_info']),
                    })
                }
                return arr;
            },
        },
        methods: {
            getFees(items) {
                let fees = [];
                items.forEach(item => {
                    let name = this.$t('general.fees');
                    if (item.fees[0]) {
                        name = item.fees[0].name;
                    }
                    fees.push({name: `${this.$t('general.name')} : ${name}`, value: item.amount})
                });
                return fees;
            }
        }
    }
</script>

<style scoped>

</style>
