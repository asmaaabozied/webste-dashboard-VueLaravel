<template>
    <v-card elevation="3">
        <v-card-title>{{ $t("auth.registerTitle") }}</v-card-title>
        <v-card-text class="mt-16">
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :label="$t('general.name')"
                            outlined
                            rounded
                            dense
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            v-model="username"
                            :error-messages="usernameErrors"
                            :label="$t('auth.username')"
                            required
                            outlined
                            rounded
                            dense
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            :type="showPassword ? 'text' : 'password'"
                            v-model="password"
                            :error-messages="passwordErrors"
                            :label="$t('auth.password')"
                            outlined
                            rounded
                            dense
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
                            v-model="confirm"
                            :error-messages="confirmErrors"
                            @change="$v.confirm.$touch()"
                            @blur="$v.confirm.$touch()"
                            :label="$t('auth.confirm')"
                            required
                            outlined
                            rounded
                            dense
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            v-model="phone"
                            :error-messages="phoneErrors"
                            :label="$t('auth.mobile')"
                            outlined
                            rounded
                            dense
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <div class="text-center">
                <p>{{ $t("auth.mobileForm") }}</p>
            </div>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-select
                            v-model="accountType"
                            :label="$t('auth.accountType')"
                            :items="accountTypes"
                            item-value="id"
                            item-text="label"
                            outlined
                            rounded
                            dense
                    ></v-select>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>{{ $t("general.location") }}</v-card-title>
                        <v-card-text>
                            <div class="map">
                                <GmapMap
                                        :center="mapCenter"
                                        :zoom="7"
                                        map-type-id="terrain"
                                        style="width: 100%; height: 100%"
                                        @center_changed="updateCenter"
                                >
                                    <GmapMarker
                                            :position="location"
                                            :draggable="true"
                                            @dragend="setLocation($event.latLng)"
                                    />
                                </GmapMap>
                                <div class="red--text" v-for="e in locationErrors" :key="e">
                                    {{ e }}
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn rounded @click="addMarker">
                                <v-icon>{{ icons.mdiMapMarkerPlus }}</v-icon>
                                {{ $t("general.addMarker") }}
                            </v-btn>
                            <v-btn rounded @click="deleteMarker">
                                <v-icon>{{ icons.mdiMapMarkerOff }}</v-icon>
                                {{ $t("general.deleteMarker") }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-checkbox v-model="acceptTerms" :error-messages="termsErrors">
                        <template v-slot:label>
                            {{ $t("general.iAccept") }} &nbsp;
                            <router-link class="blue--text" :to="{ name: 'terms' }">{{
                                $t("general.acceptTerms")
                                }}
                            </router-link>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>
            <!--      <v-row justify="center">-->
            <!--        <v-col cols="12" md="8">-->
            <!--          <v-alert-->
            <!--            dense-->
            <!--            outlined-->
            <!--            type="error"-->
            <!--            class="my-1"-->
            <!--            v-for="(item, i) in errorMessages"-->
            <!--            :key="i"-->
            <!--            >{{ item }}</v-alert-->
            <!--          >-->
            <!--        </v-col>-->
            <!--      </v-row>-->
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <div class="d-flex justify-center">
                        <v-btn rounded class="mx-2" color="primary" @click="register">{{
                            $t("auth.register")
                            }}
                        </v-btn>
                        <v-btn
                                rounded
                                class="mx-2"
                                color="secondary"
                                @click="$emit('close')"
                        >{{ $t("general.cancel") }}
                        </v-btn
                        >
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    import {required, sameAs, numeric, minLength} from "vuelidate/lib/validators";
    import {mdiEye, mdiEyeOff, mdiMapMarkerPlus, mdiMapMarkerOff} from "@mdi/js";

    export default {
        name: "register",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title:
                        locale == "en" ? "Inma register new account" : "تسجيل حساب جديد إنماء",
            };
        },

        props: {
            type: String,
        },
        data() {
            return {
                name: "",
                username: null,
                password: null,
                confirm: null,
                phone: null,
                location: null,
                mapCenter: {lat: 24.774265, lng: 46.738586},
                showPassword: false,
                icons: {
                    mdiEye,
                    mdiEyeOff,
                    mdiMapMarkerPlus,
                    mdiMapMarkerOff,
                },
                accountTypes: [
                    {id: 1, label: this.$t("auth.customerAccount")},
                    {id: 2, label: this.$t("auth.agentAccount")},
                ],
                accountType: 1,
                acceptTerms: null,
                errorMessages: [],
            };
        },
        validations: {
            name: {
                required,
            },
            username: {
                required,
            },
            password: {
                required,
            },
            confirm: {
                sameAsPassword: sameAs("password"),
                required,
            },
            phone: {
                required,
                numeric,
                minLength: minLength(10),
            },
            location: {
                required,
            },
            acceptTerms: {
                sameAs: sameAs(() => true),
            },
        },
        methods: {
            register() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.$notify({
                        text: this.$t("general.checkInputs"),
                        type: "warning",
                    });
                    return;
                }
                let url =
                        this.accountType == 1
                                ? `/api/customer/register`
                                : `/api/gallery/register`;

                let form = new FormData();
                form.append("user_name", this.username);
                form.append("password", this.password);
                form.append("name", this.name);
                form.append("phone", this.phone);
                form.append("lat", this.location.lat);
                form.append("lon", this.location.lng);

                axios
                        .post(url, form)
                        .then((res) => {
                            if (res.data.status != 200) {
           console.warn(err)
                                return;
                            }
                            this.$notify({
                                text: this.$t("auth.successRegister"),
                                type: "success",
                            });
                            if (this.type == "registerVisitor") {
                                this.$emit("confirmcode", this.username);
                            }
                            this.close();
                        })
                        .catch((err) => {
                            for (const key in err.response.data) {
                                if (err.response.data.hasOwnProperty(key)) {
                                    this.errorMessages.push(err.response.data[key]);
                                }
                            }
                            console.warn(err)
                        });
            },
            close() {
                this.$emit('close');
            },
            setLocation(evnt) {
                this.location = {lat: evnt.lat(), lng: evnt.lng()};
            },
            updateCenter(evnt) {
                this.mapCenter = {lat: evnt.lat(), lng: evnt.lng()};
            },
            addMarker() {
                this.location = JSON.parse(JSON.stringify(this.mapCenter));
            },
            deleteMarker() {
                this.location = null;
            },
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.required && errors.push(this.$t("validate.required"));
                return errors;
            },
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
            confirmErrors() {
                const errors = [];
                if (!this.$v.confirm.$dirty) return errors;
                !this.$v.confirm.required && errors.push(this.$t("validate.required"));
                !this.$v.confirm.sameAsPassword &&
                errors.push(this.$t("validate.confirmNoMatch"));
                return errors;
            },
            phoneErrors() {
                const errors = [];
                if (!this.$v.phone.$dirty) return errors;
                !this.$v.phone.required && errors.push(this.$t("validate.required"));
                !this.$v.phone.numeric && errors.push(this.$t("validate.numeric"));
                !this.$v.phone.minLength &&
                errors.push(this.$t("validate.minLengthNumric", {x: 10}));
                return errors;
            },
            locationErrors() {
                const errors = [];
                if (!this.$v.location.$dirty) return errors;
                !this.$v.location.required &&
                errors.push(this.$t("validate.setLocation"));
                return errors;
            },
            termsErrors() {
                const errors = [];
                if (!this.$v.acceptTerms.$dirty) return errors;
                !this.$v.acceptTerms.sameAs &&
                errors.push(this.$t("validate.acceptTerms"));
                return errors;
            },
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
