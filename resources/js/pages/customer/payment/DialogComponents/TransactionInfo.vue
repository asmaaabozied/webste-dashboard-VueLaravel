<template>
    <v-list subheader>
        <v-subheader class="font-weight-bold text-h5">{{$t('transactions.transactionInfo')}}</v-subheader>
<!--        <v-list-item v-for="(item , index) in data">-->
<!--            <v-list-item-content :key="index">-->
<!--                <v-list-item-title>{{item.name}}</v-list-item-title>-->
<!--                <v-list-item-subtitle v-if="typeof item.value == 'object'">-->
<!--                    <div class="mx-2">-->
<!--                        <v-list-item v-for="(item , index) in item.value">-->
<!--                            <v-list-item-content :key="index">-->
<!--                                <v-list-item-title>{{item.name}}</v-list-item-title>-->
<!--                                <v-list-item-subtitle>{{item.value}}</v-list-item-subtitle>-->
<!--                            </v-list-item-content>-->
<!--                        </v-list-item>-->
<!--                    </div>-->
<!--                </v-list-item-subtitle>-->
<!--                <v-list-item-subtitle v-else>{{item.value}}</v-list-item-subtitle>-->
<!--            </v-list-item-content>-->
<!--        </v-list-item>-->
    </v-list>

</template>

<script>
    export default {
        name: "TransactionInfo",
        props:{
            data : {
                type : Object,
                default : () => {},
            },
        },
    }
</script>

<style scoped>

</style>
