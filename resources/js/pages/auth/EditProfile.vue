<template>
    <div class="pt-10">
        <div class="d-flex flex-row justify-center mt-10">
            <v-card width="60vw" shaped elevation="3" class="pa-12 mb-12">
                <v-card-title>{{$t('auth.profileEdit')}}</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                    v-model="name"
                                    :error-messages="nameErrors"
                                    :label="$t('order.name')"
                                    outlined
                                    rounded
                                    dense
                                    autocomplete="off"
                                    autocorrect="off"
                                    spellcheck="false"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
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
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                    v-model="phone"
                                    :error-messages="phoneErrors"
                                    :label="$t('auth.phone')"
                                    outlined
                                    rounded
                                    dense
                                    autocorrect="off"
                                    autocapitalize="off"
                                    spellcheck="false"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-card>
                                <v-card-title>{{$t('general.location')}}</v-card-title>
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
                                        <div class="red--text" v-for="e in locationErrors" :key="e">{{e}}</div>
                                    </div>
                                </v-card-text>
                                <v-card-actions class="d-flex justify-center">
                                    <v-btn rounded @click="addMarker">
                                        <v-icon>{{ icons.mdiMapMarkerPlus }}</v-icon>
                                        {{$t('general.addMarker')}}
                                    </v-btn>
                                    <v-btn rounded @click="deleteMarker">
                                        <v-icon>{{ icons.mdiMapMarkerOff}}</v-icon>
                                        {{$t('general.deleteMarker')}}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                    <v-btn rounded class="mx-2" color="primary" @click="save">{{$t('general.save')}}</v-btn>
                    <v-btn
                            rounded
                            class="mx-2"
                            color="secondary"
                            :to="{ name: 'home' }"
                    >{{$t('general.cancel')}}
                    </v-btn>
                    <v-btn rounded class="mx-2" @click="passwordDialog = true">
                        <v-icon>{{ icons.mdiFormTextboxPassword }}</v-icon>
                        {{ $t('general.modifyPass') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <v-dialog v-model="passwordDialog" width="50vw" scrollable>
            <password @close="passwordDialog = false"/>
        </v-dialog>
        <div style="height: 100px; width: 200px;"></div>
    </div>
</template>
<script>
    import axios from "axios";
    import {required, email, minLength} from "vuelidate/lib/validators";
    import {
        mdiFormTextboxPassword,
        mdiMapMarkerPlus,
        mdiMapMarkerOff
    } from "@mdi/js";
    import password from "./Password";

    export default {
        components: {
            password
        },
        props: {},
        data() {
            return {
                name: null,
                email: null,
                username: null,
                phone: null,
                passwordDialog: false,
                location: {lat: null, lng: null},
                mapCenter: {lat: 24.774265, lng: 46.738586},

                icons: {
                    mdiMapMarkerPlus,
                    mdiMapMarkerOff,
                    mdiFormTextboxPassword
                }
            };
        },
        validations: {
            name: {
                required
            },
            username: {
                required
            },
            phone: {
                required,
                minLength: minLength(10)
            },
            location: {
                required
            }
        },
        methods: {
            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.$notify({
                        text: "يرجى التأكد من صحة الادخالات",
                        type: "error"
                    });
                    return;
                }
                let url = this.$roleEquals("customer")
                        ? `/api/customer/${this.id}`
                        : `/api/gallery/${id}`;
                axios
                        .put(url, {
                            name: this.name,
                            phone: this.phone,
                            lat: this.location.lat,
                            lon: this.location.lng
                        })
                        .then(res => {
                            this.$router.push({name : "showProfile"})
                        })
                        .catch(err => {
                            console.warn(err)
                        });
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
            load() {
                if (this.$roleEquals("customer"))
                    axios
                            .get(`/api/customer/${this.id}`)
                            .then(res => {
                                let data = res.data.data;

                                this.name = data.name;
                                this.username = data.user_info.user_name;
                                this.phone = data.phone;
                                this.location = {lat: parseFloat(data.lat), lng: parseFloat(data.lon)};
                                this.mapCenter = this.location;
                            })
                            .catch(err => {
                                console.warn(err)
                            });
                else if (this.$roleEquals("gallery"))
                    axios
                            .get(`/api/gallery/${this.id}`)
                            .then(res => {
                                let data = res.data.data;

                                this.name = data.name;
                                this.username = data.user_info.user_name;
                                this.phone = data.phone;
                                this.location.lat = parseFloat(data.lat);
                                this.location.lng = parseFloat(data.lon);
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
            phoneErrors() {
                const errors = [];
                if (!this.$v.phone.$dirty) return errors;
                !this.$v.phone.length <= 10 && errors.push(this.$t("validate.minLengthNumric", {num: 10}));
                !this.$v.phone.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            locationErrors() {
                const errors = [];
                if (!this.$v.location.$dirty) return errors;
                !this.$v.location.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            id() {
                return this.$store.state.user.id;
            }
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
