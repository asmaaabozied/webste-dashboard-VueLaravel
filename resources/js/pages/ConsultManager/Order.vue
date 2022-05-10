<template>
    <div>
        <v-card>
            <v-card-title>{{ $t('consultation.order') }}</v-card-title>
            <v-stepper v-model="step">
                <v-stepper-header>
                    <v-stepper-step :complete="step > 0" step="0">{{$t('general.received')}}</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 1" step="1">{{$t('general.processing')}}</v-stepper-step>
                    <v-divider v-if="step !== 4"></v-divider>
                    <v-stepper-step
                            v-if="step !== 4"
                            :complete="step > 2"
                            step="2"
                    >{{$t('general.inMaintenece')}}
                    </v-stepper-step>
                    <v-divider v-if="step !== 4"></v-divider>
                    <v-stepper-step v-if="step !== 4" :complete="step > 4" step="3">{{$t('general.ready')}}
                    </v-stepper-step>
                    <v-divider v-if="step == 4"></v-divider>
                    <v-stepper-step
                            v-if="step == 4"
                            :complete="step == 4"
                            step="4"
                    >{{$t('myRequests.declined')}}
                    </v-stepper-step>
                </v-stepper-header>
            </v-stepper>
            <v-row class="ma-4">
                <v-col cols="4">{{$t('consultation.problemDescription')}}</v-col>
                <v-col cols="8">{{ description }}</v-col>
                <v-col cols="4">{{ $t('general.name') }}</v-col>
                <v-col cols="8">{{ user.user_name}}</v-col>
                <v-col cols="4">{{ $t('admin.phone') }}</v-col>
                <v-col cols="8">{{ user.customer.phone }}</v-col>
            </v-row>
            <v-card-actions class="d-flex justify-center">
                <v-btn color="primary" class="mx-2" @click="assignEmp"
                       v-if="$checkIfOrderStatusNotIn($getOrderStatus(status).value , [3,4,5 ,6])"
                >{{ $t('general.assign') }}
                </v-btn>
                <v-btn
                        v-if="$checkIfOrderStatusNotIn($getOrderStatus(status).value , [3,4,5 ,6])"
                        color="primary"
                        class="mx-2"
                        @click="finishDialog = true"
                >{{ $t('general.finishOrder') }}
                </v-btn>
            </v-card-actions>
        </v-card>
        <!-- finish dialog -->
        <v-dialog v-model="finishDialog" max-width="290">
            <v-card>
                <v-card-title class="headline">{{$t('general.finishOrder')}}</v-card-title>
                <v-card-text>{{$t('general.isSure')}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="step < 3" text @click="confirmFinishItem">{{ $t('general.sure') }}</v-btn>
                    <v-btn v-if="step < 3" text @click="finishDialog = false">{{ $t('general.close') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    import {} from "@mdi/js";

    export default {
        data() {
            return {
                icons: {},
                id: this.$route.params.id,
                step: null,
                user: {
                    user_name : '',
                    customer :{}
                },
                status: null,
                description: null,
                finishDialog: false
            };
        },
        methods: {
            assignEmp() {
                this.$router.push({name: "cm4", params: {id: this.$route.params.internalId}});
            },
            load() {
                axios
                        .get(`/api/ConsultantOrder/${this.id}`)
                        .then(res => {
                            this.user = res.data.data.order_info['consultant_order'].order_info['user_info'];
                            this.description = res.data.data.description;
                            this.status = res.data.data.order_info.status;
                            this.step = this.$getOrderStatus(
                                    res.data.data.order_info.status
                            ).value;
                        })

                        .catch(err => {
                            console.warn(err)
                        });
            },
            confirmFinishItem() {
                axios
                        .put(`/api/ConsultantOrder/${this.id}`, {status: 3})
                        .then(res => {
                            this.$notify({
                                text: this.$t("general.success"),
                                type: "info"
                            });
                            this.$router.go(-1);
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.finishDialog = false;
                        });
            }
        },
        created() {
            this.load();
        }
    };
</script>
<style scoped>
</style>
