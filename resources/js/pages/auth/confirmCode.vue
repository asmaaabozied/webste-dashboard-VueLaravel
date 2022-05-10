<template>
    <v-container>
        <div style="height: 90vh; margin: 50px 0;" class="d-flex flex-column justify-center">
            <v-row justify="center">
                <v-col cols="12" md="4" lg="4">
                    <v-card width="100%">
                        <v-card-title primary-title>{{$t('auth.confirmAccoutn')}}</v-card-title>
                        <v-card-text>
                            <div class="mb-8 text-body-1" v-text="$t('auth.confirmInt')"></div>
                            <div class="mb-8 text-body-1 red--text" v-text="$t('auth.codeValidity')"></div>
                            <div>
                                <v-text-field
                                        v-model="code"
                                        :placeholder="$t('general.code')"
                                        outlined
                                        rounded
                                        dense
                                        autocomplete="off"
                                        autocorrect="off"
                                ></v-text-field>
                                <div class="mb-12">
                                    <small v-text="$t('auth.codeValidPeriod')"></small>
                                </div>
                                <div class="mb-12 d-inline" v-text="$t('auth.noCodeYet')"></div>
                                <v-btn
                                        class="d-inline mx-2"
                                        text
                                        small
                                        @click="resendCode"
                                >{{ $t('auth.resendCode')}}
                                </v-btn>
                            </div>
                        </v-card-text>
                        <v-card-actions class="mt-8 d-flex justify-center">
                            <v-btn :loading="isLoading" class="mx-2" @click="tryConfirm">{{$t('general.confirm')}}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                username: this.$route.params.username,
                code: null,
                isLoading: false,
            };
        },
        methods: {
            tryConfirm() {
                if (this.username != null && this.code != null) {
                    this.isLoading = true;

                    let form = new FormData();
                    form.append("confirmation_key", this.code);
                    form.append("user_name", this.username);

                    axios
                            .post(`/api/confirmCustomerCode`, form)
                            .then((res) => {
                                this.$router.push({name: "login"});
                            })
                            .catch((err) => {
                                console.warn(err)
                            })
                            .finally(() => (this.isLoading = false));
                } else {
                    this.$notify({
                        text: this.$t("general.checkInputs"),
                        type: "warning",
                    });
                }
            },
            resendCode() {
                if (this.username != null && this.code != null) {
                    let form = new FormData();
                    form.append("user_name", this.username);

                    axios
                            .post(`/api/reSendCustomerConfirmCode`, form)
                            .then((res) => {
                                this.$notify({
                                    text: this.$t("general.success"),
                                    type: "info",
                                });

                                console.log("success resend");
                            })
                            .catch((err) => {
                                console.warn(err)
                            })
                            .finally(() => (this.isLoading = false));
                } else {
                    this.$notify({
                        text: this.$t("general.checkInputs"),
                        type: "warning",
                    });
                }
            },
        },
    };
</script>

<style>
</style>
