<template>
    <div>
        <v-card>
            <v-card-title>{{ $t("technical.RequestProcess.title") }}</v-card-title>
            <v-card-text>
                <!-- status  -->
                <v-stepper v-model="step">
                    <v-stepper-header>
                        <v-stepper-step :complete="step > 0" step="0">{{
                            $t("general.received")
                            }}
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="step >= 1 && step != 4" step="2">{{
                            $t("general.processing")
                            }}
                        </v-stepper-step>
                        <v-divider v-if="step !== 5"></v-divider>
                        <v-stepper-step v-if="step >= 2" :complete="step >= 2 && step != 4" step="2">{{
                            $t("myRequests.maintaining")
                            }}
                        </v-stepper-step>
                        <v-divider v-if="step !== 5"></v-divider>
                        <v-stepper-step v-if="step >= 3" :complete="step >= 3 && step != 4" step="3">{{
                            $t("myRequests.ready")
                            }}
                        </v-stepper-step>

                        <v-divider v-if="step !== 5"></v-divider>
                        <v-stepper-step v-if="step !== 5" :complete="step >= 4" step="4">{{
                            $t("myRequests.declined")
                            }}
                        </v-stepper-step>
                        <v-divider v-if="step >= 5"></v-divider>
                        <v-stepper-step v-if="step >= 5 " :complete="step >= 5" step="5">{{
                            $t("myRequests.declinedByCustomer")
                            }}
                        </v-stepper-step>
                        <v-stepper-step v-if="step >= 6 && step !== 5" :complete="step >= 6" step="6">{{
                            $t("myRequests.unfixedDevice")
                            }}
                        </v-stepper-step>
                    </v-stepper-header>
                </v-stepper>
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
                <v-row>
                    <v-col cols="4">{{ $t("order.manufactureName") }}</v-col>
                    <v-col cols="8">{{ manufacture }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t("general.description") }}</v-col>
                    <v-col cols="8">{{ description }}</v-col>
                </v-row>
                <!-- appointment -->
                <v-row v-if="appointment">
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
                                    <v-icon class="mx-1">mdi-clock-in</v-icon>
                                    {{ appointment.end_time }}
                                </div>
                                <div class="text-body-2">
                                    <v-icon class="mx-1"> mdi-clock-out</v-icon>
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
                <!-- spare parts -->
                <h4 v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">{{ $t("admin.spareParts") }}</h4>
                <v-simple-table v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>{{ $t("general.code") }}</th>
                            <th>{{ $t("general.name") }}</th>
                            <th>{{ $t("general.quantity") }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, i) in spareParts" :key="i">
                            <td>{{ i + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <!--add fee -->
                <h4 v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">{{ $t("general.fees") }}</h4>
                <v-row v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">
                    <v-col cols="2" class="d-flex align-center">{{
                        $t("general.newFee")
                        }}
                    </v-col>
                    <v-col cols="2" v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">
                        <v-select
                                :label="$t('general.feeType')"
                                item-text="label"
                                item-value="id"
                                v-model="feeType"
                                :items="feesItems"
                        ></v-select>
                    <v-col cols="12" v-if="$checkIfOrderStatusNotIn($getOrderStatus(order_info.status).value , [-1,3,4,5,6])">
                        <v-text-field
                                :label="$t('general.value')"
                                type="Number"
                                min="0"
                                v-model="feeValue"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                        <v-btn rounded @click="addFee">
                            <v-icon>{{ icons.mdiPlusCircleOutline }}</v-icon>
                            {{ $t("general.add") }}
                        </v-btn>
                    </v-col>
                    </v-col>
                </v-row>
                <!-- fee list -->
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>{{ $t("general.type") }}</th>
                            <th>{{ $t("general.value") }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, i) in fees" :key="i">
                            <td>{{ i + 1 }}</td>
                            <td>{{ item.fees && item.fees[0] && item.fees[0].name ? item.fees[0].name : ''}}</td>
                            <td>{{ item.amount }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    import {mdiPlusCircleOutline} from "@mdi/js";

    export default {
        name: "maintenanceOrder",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Maintenance order details" : "تفاصيل طلب صيانة",
            };
        },

        data() {
            return {
                icons: {
                    mdiPlusCircleOutline,
                },
                id: null,
                step: null,
                order: null,
                Notifications: [],
                order_info: [],
                spareParts: [],
                fees: [],
                feeType: null,
                feeValue: null,
                feesItems: [],
                appointment: null,
                customerInfo: null,
                manufacture: null,
                description: null,
            };
        },

        methods: {
            setPayState(state) {
                if (state == "yes") {
                    axios
                            .post(`/api/`)
                            .then((res) => {
                            })
                            .catch((err) => {
                            });
                } else if (state == "no") {
                    axios.post(`/api/`).then((res) => {
                    }).catch((err) => {
                    });
                }
            },
            load() {
                axios
                        .get(`/api/MaintenanceOrder/${this.id}`)
                        .then(({data}) => {
                            this.order = data.data;
                            this.fees = data.data.fee_info;
                            this.order_info = data.data.order_info;
                            this.appointment = data.data.appointment;
                            this.step = this.$getOrderStatus(data.data.order_info.status).value;
                            this.customerInfo = {
                                name: data.data.order_info.user_info.customer.name,
                                mobile: data.data.order_info.user_info.customer.phone,
                            };
                            this.manufacture = data.data.manufacture;
                            this.description = data.data.description;
                        })
                        .catch((err) => {
                            console.warn(err)
                        });
                axios.get(`/api/fee`).then(({data}) => {
                    if (data.data) {
                        data.data.forEach(item => {
                            this.feesItems.push({id: item.id, label: item.name});
                        })
                    }
                }).catch((err) => {
                            console.warn(err)
                        });
            },
            addFee() {
                let form = new FormData();
                form.append(`maintenance_order_id`, this.id);
                form.append(`fee_id`, this.feeType);
                form.append(`fee_amount`, this.feeValue);
                axios
                        .post(`/api/managerCheckUpFee`, form)
                        .then((res) => {
                            this.showSuccessMessage(this.$t('general.addFeesSuccess'));
                            this.load();
                        })
                        .catch((err) => {
                            console.warn(err)
                        });
            },
        },

        created() {
            this.id = parseInt(this.$route.params.id);
            this.load();
        },
    };
</script>
<style scoped></style>
