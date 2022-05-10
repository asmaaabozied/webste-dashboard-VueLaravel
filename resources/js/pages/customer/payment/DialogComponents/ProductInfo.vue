<template>
    <v-list subheader>
        <v-subheader class="font-weight-bold text-h5">{{$t('transactions.productInfo')}}</v-subheader>
        <v-list-item v-for="(item , index) in dataShown" :key="index">
            <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
                <v-list-item-subtitle>{{item.value}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: "ProductInfo",
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
                this.data['carts_products'].forEach(item => {
                    arr.push({name: item.product.name, value: `${this.$t('general.quantity')} : ${item.quantity}`})
                })
                return arr;
            },
        },
    }
</script>

<style scoped>

</style>
