<template>
    <div>
        <h3>{{$t('technical.orders.title')}}</h3>
        <v-row>
            <v-col cols="2">
                <v-select
                        :label="$t('general.filterByState')"
                        v-model="statusFilter"
                        :items="statusItems"
                        item-text="text"
                        item-value="value"
                        clearable
                ></v-select>
            </v-col>
            <v-col cols="2">
                <v-select
                        :label="$t('general.filterByType')"
                        v-model="typeFilter"
                        :items="filterByTypeItems"
                        item-text="text"
                        item-value="value"
                        clearable
                ></v-select>
            </v-col>
        </v-row>
        <v-simple-table fixed-header>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
                    <th class="text-center">{{ $t("myRequests.requestTechnicalStatus") }}</th>
                    <th class="text-center">{{$t('myRequests.requestType')}}</th>
                    <th class="text-center">{{$t('myRequests.requestDate')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, i) in itemsFiltered" :key="i">
                    <td class="text-center">{{ i + 1 }}</td>
                    <td class="text-center">{{ $getOrderStatus(item.status).label }}</td>
                    <td class="text-center">
                        {{ $getTechnicalStatus(item.technical_status).label }}
                    </td>
                    <td class="text-center">{{ $getOrdertype(item.type) }}</td>
                    <td class="text-center">{{ formatDate(item.created_at) }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script>
    export default {
        name: "orders",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Orders" : "الطلبات",
            };
        },

        data() {
            return {
                items: [],
                statusItems: [
                    {value: "received", text: this.$t("myRequests.received")},
                    {value: "order is being processed", text: this.$t("myRequests.processing")},
                    {value: "under maintenance", text: this.$t("myRequests.maintaining")},
                    {value: "order finish", text: this.$t("myRequests.finished")},
                    {value: "order declined", text: this.$t("myRequests.declined")}
                ],
                filterByTypeItems: [
                    {
                        value: "prevention_maintenance_order",
                        text: this.$t("preventiveMaintenance.order")
                    },
                    {
                        value: "maintenance_order",
                        text: this.$t("myRequests.maintenanceRequest")
                    },
                    {
                        value: "review_order",
                        text: this.$t("services.srv05.title")
                    }
                ],
                statusFilter: null,
                typeFilter: null
            };
        },
        computed: {
            itemsFiltered() {
                var filter = {};
                if (this.statusFilter) filter["status"] = this.statusFilter;
                if (this.typeFilter) filter["type"] = this.typeFilter;

                function filterBy(item) {
                    for (var key in filter) {
                        if (item[key] === undefined || item[key] !== filter[key]) {
                            return false;
                        }
                    }
                    return true;
                }

                let items = this.items.slice(0);
                return items.filter(filterBy);
            }
        },
        methods: {
            load() {
                axios
                        .get(`/api/order`)
                        .then(res => {
                            this.items = res.data.data;
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.load();
            });
        }
    };
</script>
<style scoped>
</style>
