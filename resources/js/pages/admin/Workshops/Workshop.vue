<template>
    <div class="d-flex flex-row justify-center mt-10">
        <v-card width="60vw" elevation="3" class="pa-12 mb-12">
            <v-card-title>{{$t('admin.workshop')}}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <div id="image-container">
                            <v-avatar color="grey lighten-4" size="150">
                                <img v-if="imagePreview" :src="imagePreview"/>
                                <v-icon v-else x-large color="secondary">{{icons.mdiAccountCircle}}</v-icon>
                            </v-avatar>
                            <input
                                    type="file"
                                    style="display:none;"
                                    id="imageInput"
                                    ref="image"
                                    v-on:change="onImageChange"
                            />
                            <v-btn id="image-remove" v-if="image" icon small @click="removeImage">
                                <v-icon color="red">{{icons.mdiClose}}</v-icon>
                            </v-btn>
                            <v-btn id="image-choose" small icon @click="addImage">
                                <v-icon>{{icons.mdiPaperclip }}</v-icon>
                            </v-btn>
                        </div>
                        <div class="red--text" v-for="e in imageErrors" :key="e">{{ e }}</div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
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
                    <v-col cols="6">
                        <v-text-field
                                v-model="nameAr"
                                :error-messages="nameArErrors"
                                :label="$t('order.name') + 'Ar'"
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
                    <v-col cols="6">
                        <v-text-field
                                v-model="description "
                                :error-messages="descriptionErrors"
                                :label="$t('general.description')"
                                outlined
                                rounded
                                dense
                                autocomplete="off"
                                autocorrect="off"
                                spellcheck="false"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                                v-model="descriptionEn"
                                :error-messages="descriptionEnErrors"
                                :label="$t('general.description') + 'En'"
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
                        <v-card>
                            <v-card-title>{{$t('general.location')}}</v-card-title>
                            <v-card-text>
                                <div id="map">
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
                <v-row>
                    <v-col cols="12">
                        <v-select
                                :label="$t('general.type')"
                                :error-messages="typeErrors"
                                v-model="type"
                                :items="types"
                                outlined
                                dense
                                rounded
                                item-text="label"
                                item-value="id"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-select
                                :items="departments"
                                v-model="department"
                                :error-messages="departmentErrors"
                                :label="$t('general.department')"
                                :item-text="$i18n.locale == 'en' ? 'name' : 'name_ar' "
                                item-value="id"
                                outlined
                                rounded
                                dense
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-select
                                :items="branches"
                                v-model="branch"
                                :error-messages="branchErrors"
                                :label="$t('general.branch')"
                                :item-text="$i18n.locale == 'en' ? 'name' : 'name_ar' "
                                item-value="id"
                                outlined
                                rounded
                                dense
                        ></v-select>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn @click="save" rounded>{{$t('general.save')}}</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import axios from "axios";
    import {required, requiredUnless} from "vuelidate/lib/validators";
    import {mdiAccountCircle, mdiClose, mdiMapMarkerOff, mdiMapMarkerPlus, mdiPaperclip} from "@mdi/js";

    export default {
        name: "workshop",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Workshop" : "ورشة",
            };
        },

        data() {
            return {
                icons: {
                    mdiMapMarkerPlus,
                    mdiMapMarkerOff,
                    mdiAccountCircle,
                    mdiClose,
                    mdiPaperclip
                },
                id: this.$route.params.id,
                name: null,
                nameAr: null,
                description: null,
                descriptionEn: null,
                location: null,
                mapCenter: {lat: 24.774265, lng: 46.738586},
                type: null,
                types: [
                    {id: 1, label: this.$t("home.maintenance")},
                    {id: 2, label: this.$t("technical.install")}
                ],
                imagePreview: null,
                image: null,
                department: null,
                departments: [],
                preType: this.$route.params.preType,
                preDepartment: this.$route.params.preDepartment,
                branch: null,
                branches: []
            };
        },
        validations: {
            name: {required},
            nameAr: {required},
            description: {required},
            descriptionEn: {required},
            location: {required},
            type: {required},
            department: {required},
            branch: {required},
            image: {
                required: requiredUnless(function () {
                    if (this.id == 0) return false;
                    else return true;
                })
            }
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            nameArErrors() {
                const errors = [];
                if (!this.$v.nameAr.$dirty) return errors;
                !this.$v.nameAr.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            descriptionErrors() {
                const errors = [];
                if (!this.$v.description.$dirty) return errors;
                !this.$v.description.required &&
                errors.push(this.$t("validate.required"));
                return errors;
            },
            descriptionEnErrors() {
                const errors = [];
                if (!this.$v.descriptionEn.$dirty) return errors;
                !this.$v.descriptionEn.required &&
                errors.push(this.$t("validate.required"));
                return errors;
            },
            locationErrors() {
                const errors = [];
                if (!this.$v.location.$dirty) return errors;
                !this.$v.location.required &&
                errors.push(this.$t("validate.setLocation"));
                return errors;
            },
            typeErrors() {
                const errors = [];
                if (!this.$v.type.$dirty) return errors;
                !this.$v.type.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            departmentErrors() {
                const errors = [];
                if (!this.$v.department.$dirty) return errors;
                !this.$v.department.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            imageErrors() {
                const errors = [];
                if (!this.$v.image.$dirty) return errors;
                !this.$v.image.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            branchErrors() {
                const errors = [];
                if (!this.$v.branch.$dirty) return errors;
                !this.$v.branch.required && errors.push(this.$t("validate.required"));
                return errors;
            }
        },
        methods: {
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
            onImageChange(e) {
                const file = e.target.files[0];
                this.imagePreview = URL.createObjectURL(file);
                this.image = this.$refs.image.files[0];
            },
            removeImage() {
                this.imagePreview = null;
                this.image = null;
            },
            addImage() {
                document.getElementById("imageInput").click();
            },
            save() {
                this.$v.$touch();
                if (this.$v.$invalid) return;

                let form = new FormData();
                form.append(`name_ar`, this.nameAr);
                form.append(`name`, this.name);
                form.append(`description`, this.descriptionEn);
                form.append(`description_ar`, this.description);
                form.append(`department_id`, this.department);
                form.append(`lat`, this.location.lat);
                form.append(`lon`, this.location.lng);
                form.append(`type`, this.type);
                form.append(`branch_id`, this.branch);
                if (this.image) form.append(`image`, this.image);
                if (this.id > 0) form.append(`_method`, "PUT");

                let url = this.id == 0 ? `/api/workshop` : `/api/workshop/${this.id}`;
                axios
                        .post(url, form)
                        .then(res => {
                            if (res.data.status != 200) {
                                console.warn(err)
                                return;
                            }
                            this.load()
                            this.$router.go(-1)
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            load() {
                axios.get(`/api/workshop/${this.id}`).then(res => {
                    let data = res.data.data;

                    this.name = data.name;
                    this.nameAr = data.name_ar;
                    this.description = data.description_ar;
                    this.descriptionEn = data.description;
                    this.location = {
                        lat: parseFloat(data.lat),
                        lng: parseFloat(data.lon)
                    };
                    this.mapCenter = this.location;
                    this.type = data.type == "Maintenance" ? 1 : 2;

                    this.imagePreview = data.image;
                    this.department = data.department_info.id;
                    this.branches = data.branch_info;
                    this.branche = data.branch_info.id;
                });
            },
            loadDefaults() {
                axios.get(`/api/department`)
                        .then(res => {
                            if (!this.$roleEquals('admin') || this.$roleEquals('system_manager')){
                                this.departments = res.data.data.filter(item => item.id == this.department);
                                this.types = this.types.filter(item => item.id == this.department);
                            }else{
                                this.departments = res.data.data;
                            }

                        })
                        .catch(err => {
                            console.warn(err)
                        });

                axios.get(`/api/branch`)
                        .then(res => {
                            this.branches = res.data.data;
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            createNew() {
                this.name = null;
                this.nameAr = null;
                this.description = null;
                this.descriptionEn = null;
                this.location = null;
                this.type = null;
                this.imagePreview = null;
                this.image = null;
                this.department = null;
                this.branch = null;
                this.$v.$reset();
            }
        },
        watch: {
            id: {
                immediate: true,
                handler(val, oldVal) {
                    if (val > 0) this.load();
                    else if (val == 0) this.createNew();
                }
            }
        },
        created() {
            this.loadDefaults();
            if (this.preType) this.type = this.preType;
            if (this.preDepartment) this.department = this.preDepartment;
        }
    };
</script>

<style scoped>
    #map {
        width: 100%;
        height: 400px;
        background-color: gray;
    }

    #image-container {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #image-choose {
        position: absolute;
        top: 70%;
        left: 5%;
    }

    #image-remove {
        position: absolute;
        top: 45%;
        left: 0;
    }
</style>
