<template>
    <div>
        <h3>{{$t('technical.orders.title')}}</h3>
        <!-- <v-row>
          <v-col cols="2">
            <v-select
              :label="$t('general.filterByState')"
              v-model="filterByStateValue"
              :items="statusItems"
              item-text="label"
              item-value="id"
              clearable
            ></v-select>
          </v-col>
        </v-row> -->
        <br>
        <v-simple-table height="50vh" dense fixed-header>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">{{$t('general.name')}}</th>
                    <th class="text-center">{{$t('general.date')}}</th>
                    <th class="text-center">{{$t('order.deviceType')}}</th>
                    <th class="text-center">{{$t('order.manufactureName')}}</th>
                    <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
                    <th class="text-center">{{ $t("myRequests.requestTechnicalStatus") }}</th>
                    <th class="text-center"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, i) in orders" :key="i">
                    <td class="text-center">{{ row.order_info.id }}</td>
                    <td class="text-center">{{ row.name }}</td>
                    <td class="text-center">{{ formatDate( row.created_at) }}</td>
                    <td class="text-center">{{ row.device_type }}</td>
                    <td class="text-center">{{ row.manufacturer}}</td>
                    <td class="text-center">{{ $getOrderStatus(row.order_info.status).label }}</td>
                    <td class="text-center">
                        {{ $getTechnicalStatus(row.order_info.technical_status).label }}
                    </td>
                    <td class="text-center">
                        <div class="text-center">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="black" icon dark v-on="on">
                                        <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="open(row)">
                                        <v-list-item-title>{{ $t('general.open') }}</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                            v-if="
                                            $checkIfOrderStatusNotIn($getOrderStatus(row.order_info.status).value , [3,4,5 ,6])"
                                            @click="finish(row)">
                                        <v-list-item-title>{{ $t('general.finish') }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div class="text-center">
            <v-pagination
                    v-model="page"
                    @input="load"
                    :length="Math.ceil(total / limit)"
                    :total-visible="5"
                    circle
            ></v-pagination>
        </div>
        <!-- finish dialog -->
        <v-dialog v-model="finishDialog" max-width="500">
            <v-card>
                <v-card-title class="headline">{{$t('general.finishOrder')}}</v-card-title>
                <v-card-text>{{$t('general.isSure')}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="confirmFinishItem">{{ getFinishMessage() }}</v-btn>
                    <v-btn text @click="finishDialog = false">{{ $t('general.close') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    import {mdiDotsVertical} from "@mdi/js";

    export default {
        data() {
            return {
                icons: {
                    mdiDotsVertical
                },
                page: 1,
                total: 0,
                limit: 5,
                orders: [],
                statusItems: [
                    {value: "received", text: this.$t("myRequests.received")},
                    {value: "being processed", text: this.$t("myRequests.processing")},
                    {value: "under maintenance", text: this.$t("myRequests.maintaining")},
                    {value: "order finish", text: this.$t("myRequests.finished")},
                    {value: "declined", text: this.$t("myRequests.declined")}
                ],
                filterByStateValue: null,
                finishInfo: {},
                finishDialog: false
            };
        },
        methods: {
            open(order) {
                let destination;
                if (this.$getOrderStatus(order.order_info.status).value == 0)
                    destination = "im5";
                else destination = "im6";
                this.$router.push({name: destination, params: {id: order.id}});
            },
            finish(item) {
                this.finishInfo = {id: item.id, technical_status: item.order_info.technical_status};
                this.finishDialog = true;
            },
            getFinishMessage() {
                return this.$getTechnicalStatus(this.finishInfo.technical_status).value
                        ? this.$t("general.sure") : this.$t('myRequests.unfixedDevice');
            },
            confirmFinishItem() {
                let status = 3;
                let techStatus = this.$getTechnicalStatus(this.finishInfo.technical_status).value;
                if ( techStatus!= -1) {
                    status = techStatus == 1 ? 3 : 6;
                }
                axios
                        .put(`/api/InstallmentOrder/${this.finishInfo.id}`, {status: status})
                        .then(res => {
                            this.$notify({
                                text: this.$t("general.success"),
                                type: "info"
                            });
                            this.load();
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.finishDialog = false;
                        });
            },
            load() {
                axios
                        .get(`/api/InstallmentOrder?page=${this.page}`)
                        .then(res => {
                            this.orders = res.data.data.resource.data;
                            this.total = res.data.data.resource.total;
                        })
                        .catch(() => {
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
