<template>
    <div>
        <v-card>
            <v-card-title>{{ $t("technical.RequestProcess.title") }}</v-card-title>
            <v-card-text>
                <div>
                    <v-stepper v-model="step">
                        <v-stepper-header>
                            <v-stepper-step :complete="step >= 0" step="1">{{
                                $t("general.received")
                                }}
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="step >= 1" step="1">{{
                                $t("general.processing")
                                }}
                            </v-stepper-step>
                            <v-divider v-if="step !== 5"></v-divider>
                            <v-stepper-step v-if="step !== 5" :complete="step >= 2" step="2">{{
                                $t("general.inMaintenece")
                                }}
                            </v-stepper-step>
                            <v-divider v-if="step !== 5"></v-divider>
                            <v-stepper-step v-if="step !== 5" :complete="step >= 3" step="3">{{
                                $t("myRequests.ready")
                                }}
                            </v-stepper-step>
                            <v-divider v-if="step >= 4"></v-divider>
                            <v-stepper-step v-if="step >= 4" :complete="step >= 4" step="4">{{
                                $t("myRequests.declined")
                                }}
                            </v-stepper-step>
                            <v-divider v-if="step >= 5"></v-divider>
                            <v-stepper-step v-if="step >= 5" :complete="step >= 5" step="5">{{
                                $t("myRequests.declinedByCustomer")
                                }}
                            </v-stepper-step>
                            <v-divider v-if="step >= 5"></v-divider>
                            <v-stepper-step v-if="step >= 6" :complete="step >= 6" step="5">{{
                                $t("myRequests.unfixedDevice")
                                }}
                            </v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                </div>
                <br/>
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
                <!-- appointment  -->
                <v-row>
                    <v-col cols="4"> {{ $t("order.appointment") }}</v-col>
                    <v-col cols="8">
                        <v-card v-if="appointment">
                            <v-card-title class="d-flex flex-column justify-center">
                                <div>
                                    <v-icon class="mx-1">mdi-calendar-blank-outline</v-icon>
                                </div>
                                <div class="text-body-2" v-text="appointment.date_start"></div>
                            </v-card-title>
                            <v-card-text>
                                <div class="text-body-2">
                                    <v-icon class="mx-1">mdi-clock-in</v-icon>
                                    {{ appointment.start_time }}
                                </div>
                                <div class="text-body-2">
                                    <v-icon class="mx-1">mdi-clock-out</v-icon>
                                    {{ appointment.end_time }}
                                </div>
                                <div class="text-body-2">
                                    <v-icon class="mx-1">mdi-office-building-marker</v-icon>
                                    {{
                                    $i18n.locale == "en"
                                    ? appointment.branch.name
                                    : appointment.branch.name_ar
                                    }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- info -->
                <v-row>
                    <v-col cols="4">{{ $t("general.type") }}</v-col>
                    <v-col cols="8">{{
                        orderInfo.warranty_type == "with warranty"
                        ? $t("request.maintenancewWarranty")
                        : $t("request.maintenancenWarranty")
                        }}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t("order.deviceType") }}</v-col>
                    <v-col cols="8">{{
                        orderInfo.device_type == "conditioner"
                        ? $t("general.conditioner")
                        : $t("general.electric")
                        }}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t("general.description") }}</v-col>
                    <v-col cols="8">{{ orderInfo.description }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t("order.manufactureName") }}</v-col>
                    <v-col cols="8">{{ orderInfo.manufacture }}</v-col>
                </v-row>
                <v-row v-if="images.length > 0">
                    <v-col cols="4">{{ $t("general.image") }}</v-col>
                    <v-col cols="8">
                        <previewer :images="images" width="100%" :height="200"/>
                    </v-col>
                </v-row>
                <v-row v-if="orderInfo.warranty_image">
                    <v-col cols="4">{{ $t("general.warranty") }}</v-col>
                    <v-col cols="8">
                        <previewer
                                :src="orderInfo.warranty_image"
                                width="100%"
                                :height="200"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t("general.location") }}</v-col>
                    <v-col cols="8">
                        <v-card>
                            <v-card-text>
                                <div class="map">
                                    <GmapMap
                                            :center="mapCenter"
                                            :zoom="7"
                                            map-type-id="terrain"
                                            style="width: 100%; height: 100%"
                                    >
                                        <GmapMarker :position="location"/>
                                    </GmapMap>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="8" lg="8" xl="8">{{ $t("general.customerPaid") }}</v-col>
                    <v-col md="4" lg="4" xl="4">
                        <v-btn-toggle v-model="payState" group>
                            <v-btn value="0">
                                <v-icon class="mx-1" color="teal">{{
                                    icons.mdiCheckOutline
                                    }}
                                </v-icon>
                                {{ $t("general.yes") }}
                            </v-btn>
                            <v-btn value="1">
                                <v-icon class="mx-1" color="danger">{{
                                    icons.mdiCloseOutline
                                    }}
                                </v-icon>
                                {{ $t("general.no") }}
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
                <h3 v-text="$t('admin.spareParts')"></h3>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-center" v-text="$t('general.code')"></th>
                            <th class="text-center" v-text="$t('general.name')"></th>
                            <th class="text-center" v-text="$t('general.quantity')"></th>
                            <th class="text-center"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item , i) in spareParts" :key="i">
                            <td class="text-center" v-text="item.code"></td>
                            <td class="text-center" v-text="item.name"></td>
                            <td class="text-center" v-text="item.pivot.quantity"></td>
                            <td class="text-center">
                                <v-btn color="error" rounded x-small class="ma-2" @click="del(item)">Delete
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn v-if="step <= 3" color="primary" class="mx-2" @click="addSpare">
                    <v-icon>{{ icons.mdiPlusCircleOutline }}</v-icon>
                    {{ $t("general.addSpare") }}
                </v-btn>
                <v-btn
                        v-if="step <= 3 && $checkIfOrderStatusNotIn(step , [-1,3,4,5,6])"
                        color="primary"
                        class="mx-2"
                        @click="confirmMoveDialog = true"
                >{{ $t("general.requestToMove") }}
                </v-btn
                >
                <v-btn
                        v-if="step <= 3 && $checkIfOrderStatusNotIn(step , [-1,3,4,5,6])"
                        color="primary"
                        class="mx-2"
                        @click="finishOrder"
                >{{ $t("general.finishOrder") }}
                </v-btn
                >
                <v-btn
                        v-if="step <= 3 && $checkIfOrderStatusNotIn(step , [-1,3,4,5,6])"
                        color="primary"
                        class="mx-2"
                        @click="finishFailOrder"
                >{{ $t("general.finishFailOrder") }}
                </v-btn
                >
            </v-card-actions>
        </v-card>
        <!-- move to company dialog -->
        <v-dialog v-model="confirmMoveDialog" width="40vw">
            <v-card>
                <v-card-title>{{ $t("order.confirm") }}</v-card-title>
                <v-card-text>
                    <p>{{ $t("general.isSure") }}</p>
                </v-card-text>
                <v-card-actions v-if="$checkIfOrderStatusNotIn(step , [-1,3,4,5,6])" class="d-flex justify-center">
                    <v-btn rounded color="primary" @click="requestToMove">{{
                        $t("general.yes")
                        }}
                    </v-btn>
                    <v-btn rounded @click="confirmMoveDialog = false">{{
                        $t("general.no")
                        }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- finish dialog -->
        <v-dialog v-model="finishDialog" max-width="290">
            <v-card>
                <v-card-title class="headline">{{
                    $t("general.finishOrder")
                    }}
                </v-card-title>
                <v-card-text>{{ $t("general.isSure") }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="confirmFinishItem">{{
                        $t("general.sure")
                        }}
                    </v-btn>
                    <v-btn text @click="finishDialog = false">{{
                        $t("general.close")
                        }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="finishFailOrderDialog" max-width="290">
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
    import {
        mdiPlusCircleOutline,
        mdiCheckOutline,
        mdiCloseOutline,
    } from "@mdi/js";
    import previewer from "./../../components/imagePreview";
    import axios from "axios";

    export default {
        name: "maintenanceDetails",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Maintenance details" : "طلب صيانة",
            };
        },

        components: {
            previewer,
        },

        data() {
            return {
                icons: {
                    mdiPlusCircleOutline,
                    mdiCheckOutline,
                    mdiCloseOutline,
                },
                id: this.$route.params.id,
                step: 1,
                confirmMoveDialog: false,
                finishDialog: false,
                finishFailOrderDialog: false,
                finishInfo: null,
                payState: null,
                orderInfo: {},
                mapCenter: {lat: 24.774265, lng: 46.738586},
                location: null,
                images: [],
                spareParts: [],
                appointment: null,
                customerInfo: null,
            };
        },

        methods: {
            addSpare(id) {
                this.$router.push({name: "t3", params: {orderId: id}});
            },
            del(item){
                axios.post(`/api/deleteSparePart`, {
                    maintenance_order_id : item.pivot.maintenance_order_id,
                    spare_id : item.pivot.spare_id,
                }).then(() => {this.load()})
            },
            requestToMove() {
                axios
                        .post(`/api/employeeDetermineFixLocation`, {
                            fix_place: 2,
                            order_id: this.id,
                        })
                        .then((res) => {
                            this.confirmMoveDialog = false;
                        })
                        .catch((err) => {
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
                        .put(`/api/MaintenanceOrder/${this.id}`, {technical_status: 1})
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
                axios.put(`/api/MaintenanceOrder/${this.id}`, {technical_status: 0}).then((res) => {
                    this.load();
                })
                        .catch((err) => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.finishDialog = false;
                        });
            },
            load() {
                axios
                        .get(`/api/MaintenanceOrder/${this.id}`)
                        .then((res) => {
                            this.appointment = res.data.appointment;
                            this.customerInfo = {
                                name: res.data.data.order_info.user_info.customer.name,
                                mobile: res.data.data.order_info.user_info.customer.phone,
                            };
                            this.step = this.$getOrderStatus(
                                    res.data.data.order_info.status
                            ).value;
                            this.orderInfo = res.data.data;
                            this.location = {
                                lat: parseFloat(this.orderInfo.lat),
                                lng: parseFloat(this.orderInfo.lon),
                            };
                            this.mapCenter = this.location;
                            if (this.orderInfo.images)
                                this.orderInfo.images.forEach((element) => {
                                    this.images.push(element.image);
                                });
                            this.spareParts = this.orderInfo.spare_part;
                        })
                        .catch((err) => {
                            console.warn(err)
                        });
            },
        },

        created() {
            this.load();
        },
    };
</script>
<style scoped>
    .map {
        width: 100%;
        height: 400px;
        background-color: gray;
    }
</style>
