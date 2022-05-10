<template>
    <div>
        <v-card>
            <v-card-title>{{ $t('technical.installDetails') }}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="4">{{$t('general.name')}}</v-col>
                    <v-col cols="8">{{ name }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{$t('order.deviceType')}}</v-col>
                    <v-col cols="8">{{ deviceType }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{$t('order.manufactureName')}}</v-col>
                    <v-col cols="8">{{ manufactureName}}</v-col>
                </v-row>

                <!-- userInfo -->
                <div v-if="customerInfo">
                    <v-row>
                        <v-col cols="4">{{ $t("order.customername") }}</v-col>
                        <v-col cols="8">{{ customerInfo.name }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">{{ $t("auth.mobile") }}</v-col>
                        <v-col cols="8">{{ customerInfo.mobile }}</v-col>
                    </v-row>
                </div>
                <!--  -->
                <v-row>
                    <v-col cols="2">{{$t('general.location')}}</v-col>
                    <v-col cols="5">
                        <v-card>
                            <v-card-title>{{$t('installment.disassembleLocation')}}</v-card-title>
                            <v-card-text>
                                <div class="map">
                                    <GmapMap
                                            :center="disassembleMapCenter"
                                            :zoom="7"
                                            map-type-id="terrain"
                                            style="width: 100%; height: 100%"
                                    >
                                        <GmapMarker :position="disassembleLocation"/>
                                    </GmapMap>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card>
                            <v-card-title>{{$t('installment.installmentLocation')}}</v-card-title>
                            <v-card-text>
                                <div class="map">
                                    <GmapMap
                                            :center="installMapCenter"
                                            :zoom="7"
                                            map-type-id="terrain"
                                            style="width: 100%; height: 100%"
                                    >
                                        <GmapMarker :position="installmentLocation"/>
                                    </GmapMap>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
           <v-row class="d-flex justify-center align-center">
               <v-card-actions>
                   <v-btn
                           v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])"
                           color="primary"
                           class="mx-2"
                           @click="finishOrder"
                   >{{ $t("general.finishOrder") }}
                   </v-btn
                   >
               </v-card-actions>
               <v-card-actions>
                   <v-btn
                           v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])"
                           color="primary"
                           class="mx-2"
                           @click="finishFailOrder"
                   >{{ $t("general.finishFailOrder") }}
                   </v-btn
                   >
               </v-card-actions>
           </v-row>
        </v-card>
        <!-- finish dialog -->
        <v-dialog v-model="finishDialog" max-width="290" v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">
            <v-card>
                <v-card-title class="headline">{{$t('general.finishOrder')}}</v-card-title>
                <v-card-text>{{$t('general.isSure')}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])" color="red" text @click="confirmFinishItem">{{ $t('general.sure') }}</v-btn>
                    <v-btn text @click="finishDialog = false">{{ $t('general.close') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="finishFailOrderDialog" max-width="290" v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">
            <v-card>
                <v-card-title class="headline">{{
                    $t("general.finishFailOrder")
                    }}
                </v-card-title>
                <v-card-text>{{ $t("general.isSure") }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="confirmFailFinishItem">{{
                        $t("general.sure")
                        }}
                    </v-btn>
                    <v-btn text @click="finishFailOrderDialog = false">{{
                        $t("general.close")
                        }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "installDetails",

        data() {
            return {
                icons: {},
                id: this.$route.params.id,
                disassembleMapCenter: {lat: 24.774265, lng: 46.738586},
                installMapCenter: {lat: 24.774265, lng: 46.738586},
                disassembleLocation: null,
                installmentLocation: null,
                manufactureName: null,
                finishFailOrderDialog: false,
                name: null,
                deviceType: null,
                orderInfo: {},
                finishDialog: false,
                order_info: {},
                finishInfo: {},
                customerInfo: null
            };
        },

        methods: {
            finish(type, id) {
                this.finishInfo = {id: id};
                this.finishDialog = true;
            },
            load() {
                axios
                        .get(`/api/InstallmentOrder/${this.id}`)
                        .then(res => {
                            this.order_info =res.data.data.order_info;
                            this.customerInfo = {
                                name: res.data.data.order_info.user_info.customer.name,
                                mobile: res.data.data.order_info.user_info.customer.phone,
                            };
                            let data = res.data.data;
                            this.name = data.name;
                            this.deviceType =
                                    data.device_type == "conditioner"
                                            ? this.$t("general.conditioner")
                                            : this.$t("general.electric");
                            this.manufactureName = data.manufacturer;

                            this.disassembleLocation = {
                                lat: data.decoding_lat,
                                lng: data.decoding_lon
                            };
                            this.disassembleMapCenter = JSON.parse(
                                    JSON.stringify(this.disassembleLocation)
                            );

                            this.installmentLocation = {
                                lat: data.installation_lat,
                                lng: data.installation_lon
                            };
                            this.installMapCenter = JSON.parse(
                                    JSON.stringify(this.installmentLocation)
                            );
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            finishOrder() {
                this.finishDialog = true;
            },
            finishFailOrder() {
                this.finishFailOrderDialog = true;
            },
            confirmFinishItem() {
                axios
                        .put(`/api/InstallmentOrder/${this.id}`, {technical_status: 1})
                        .then((res) => {
                            this.load();
                        })
                        .catch((err) => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.finishDialog = false;
                        });
            },
            confirmFailFinishItem() {
                axios.put(`/api/InstallmentOrder/${this.id}`, {technical_status: 0}).then((res) => {
                    this.load();
                })
                        .catch((err) => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.finishDialog = false;
                        });
            },
        },

        created() {
            this.load();
        }
    };
</script>
<style scoped>
    .map {
        width: 100%;
        height: 400px;
        background-color: gray;
    }
</style>
