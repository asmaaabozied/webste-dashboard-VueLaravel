<template>
    <div class="d-flex justify-center">
        <v-card width="60vw">
            <v-card-title>{{ $t('consultation.order') }}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="4">{{ $t('general.name') }}</v-col>
                    <v-col cols="8">{{ user.user_name }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t('consultation.problemDescription') }}</v-col>
                    <v-col cols="8">{{ description }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">{{ $t('admin.phone') }}</v-col>
                    <v-col cols="8">{{ user.customer.phone }}</v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn
                        v-if="$checkIfOrderStatusNotIn($getOrderStatus(status).value , [3,4,5 ,6])"
                        color="primary"
                        @click="finish"
                >{{$t('general.finish')}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                description: null,
                status: null,
                user: {
                    user_name : '',
                    customer :{}
                },
            };
        },
        methods: {
            load() {
                axios
                        .get(`/api/ConsultantOrder/${this.id}`)
                        .then(res => {
                            this.user = res.data.data.order_info['consultant_order'].order_info['user_info'];
                            this.description = res.data.data.description;
                            this.status = res.data.data.order_info.status;
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            finish() {
                if (this.status == "order finish") return;
                axios
                        .put(`/api/ConsultantOrder/${this.id}`, {status: 3})
                        .then(res => {
                            this.$notify({
                                text: this.$t("general.success"),
                                type: "success"
                            });
                            this.$router.go(-1);
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (vm.id) vm.load();
            });
        }
    };
</script>

<style>
</style>
