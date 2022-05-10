<template>
    <div>
        <div
                class="d-flex justify-center align-center"
                style="min-height: 60vh;"
        >
            <v-row justify="center">
                <v-col cols="12" md="4" xl="3">
                    <v-card shaped elevation="3" class="pa-8 mb-12">
                        <v-card-text class="d-flex flex-column justify-center align-center">
                            <div class="text-center mb-4">
                                <h2 class="primary--text">{{ $t("auth.title") }}</h2>
                                <h3>{{ $t("auth.login") }}</h3>
                            </div>
                            <div style="width: 100%;">
                                <v-text-field
                                        v-model="username"
                                        :error-messages="usernameErrors"
                                        :placeholder="$t('auth.username')"
                                        outlined
                                        rounded
                                        dense
                                        autocomplete="off"
                                        autocorrect="off"
                                        v-on:keyup.enter="login"
                                ></v-text-field>
                            </div>
                            <div style="width: 100%;">
                                <v-text-field
                                        :type="showPassword ? 'text' : 'password'"
                                        v-model="password"
                                        :error-messages="passwordErrors"
                                        :placeholder="$t('auth.password')"
                                        outlined
                                        rounded
                                        dense
                                        @click:append="showPassword = !showPassword"
                                        :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
                                        autocorrect="off"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        v-on:keyup.enter="login"
                                ></v-text-field>
                            </div>
                            <div class="d-flex justify-center mb-10">
                                <v-btn
                                        rounded
                                        color="primary"
                                        :loading="isLoading"
                                        class="mx-2"
                                        @click="login"
                                >{{ $t("auth.login") }}
                                </v-btn
                                >
                                <v-btn
                                        rounded
                                        color="secondary"
                                        class="mx-2"
                                        :to="{ name: 'home' }"
                                >{{ $t("general.cancel") }}
                                </v-btn
                                >
                            </div>
                            <div class="text-center">
                                <span>{{ $t("auth.ifNotHave") }}</span>
                                <br>
                                <v-btn rounded outlined color="green" class="mt-3">
                                    <router-link class="text-sm-center" :to="{name : 'register'}"
                                                 style="text-decoration: none">{{$t('auth.register')}}
                                    </router-link>
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </div>
        <div style="height: 100px; width: 200px;"></div>
    </div>
</template>
<script>
    import {mdiEye, mdiEyeOff, mdiAlertOctagonOutline} from "@mdi/js";
    import {required} from "vuelidate/lib/validators";

    export default {
        name: "login",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Inma login" : "تسجيل دخول إنماء",
            };
        },

        data() {
            return {
                username: null,
                password: null,
                showPassword: false,
                isLoading: false,
                icons: {
                    mdiEye,
                    mdiEyeOff,
                    mdiAlertOctagonOutline,
                },
            };
        },
        validations: {
            username: {
                required,
            },
            password: {
                required,
            },
        },
        methods: {
            login() {
                if (this.isLoading) return;
                this.$v.$touch();
                if (this.$v.$invalid) return;
                this.isLoading = true;
                this.$store
                        .dispatch("login", {
                            username: this.username,
                            password: this.password,
                        })
                        .then((res) => {
                            setTimeout(() => {
                                this.redirect();
                            }, 1000);
                        }).catch(err => {
                    if (err.response.status == 403) {
                        this.$router.push({name : "confirmCode" , params :{username : this.username}})
                    }
                })
                        .finally(() => (this.isLoading = false));
            },
            redirect() {
                if (this.$roleEquals("gallery")) this.$router.push({name: "g1"});
                else if (this.$roleEquals("customer")) this.$router.push({name: "c4"});
                else if (this.$roleEquals("admin") || this.$roleEquals("system_manager")) this.$router.push({name: "sa12"});
                else if (this.$roleEquals("consulting_employee")) this.$router.push({name: "ce2"});
                else if (this.$roleEquals("consulting_manager")) this.$router.push({name: "cm2"});
                else if (this.$roleEquals("hr_manager")) this.$router.push({name: "HR2"});
                else if (this.$roleEquals("installation_manager")) this.$router.push({name: "im1"});
                else if (this.$roleEquals("maintenance_manager")) this.$router.push({name: "mm1"});
                else if (this.$roleEquals("sales_manager")) this.$router.push({name: "sm3-1"});
                else if (this.$roleEquals("technical_manager")) this.$router.push({name: "tm1"});
                else if (this.$roleEquals("technical")) this.$router.push({name: "t1"});

            },
        },
        computed: {
            usernameErrors() {
                const errors = [];
                if (!this.$v.username.$dirty) return errors;
                !this.$v.username.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            passwordErrors() {
                const errors = [];
                if (!this.$v.password.$dirty) return errors;
                !this.$v.password.required && errors.push(this.$t("validate.required"));
                return errors;
            },
        },
    };
</script>
<style scoped></style>
