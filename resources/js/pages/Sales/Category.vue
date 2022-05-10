<template>
    <v-card>
        <v-card-title>{{$t('products.category')}}</v-card-title>
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
                            :label="$t('general.name')"
                            outlined
                            rounded
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                            v-model="nameAr"
                            :error-messages="nameArErrors"
                            :label="$t('general.name') + 'Ar'"
                            outlined
                            rounded
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-textarea
                            v-model="description"
                            :error-messages="descriptionErrors"
                            :label="$t('general.description')"
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                            rounded
                            outlined
                            no-resize
                    ></v-textarea>
                </v-col>
                <v-col cols="6">
                    <v-textarea
                            v-model="descriptionEn"
                            :error-messages="descriptionEnErrors"
                            :label="$t('general.description') + ' En'"
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                            rounded
                            outlined
                            no-resize
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="d-flex justify-center">
            <v-btn rounded color="primary" @click="save">{{$t('general.save')}}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {required, requiredUnless} from "vuelidate/lib/validators";
    import {mdiClose, mdiPaperclip} from "@mdi/js";

    export default {
        props: {
            id: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                icons: {
                    mdiClose,
                    mdiPaperclip
                },
                name: null,
                nameAr: null,
                description: null,
                descriptionEn: null,
                imagePreview: null,
                image: null
            };
        },
        validations: {
            name: {
                required
            },
            nameAr: {
                required
            },
            description: {
                required
            },
            descriptionEn: {
                required
            },
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
            descriptionErrors() {
                const errors = [];
                if (!this.$v.description.$dirty) return errors;
                !this.$v.description.required &&
                errors.push(this.$t("validate.required"));
                return errors;
            },
            nameArErrors() {
                const errors = [];
                if (!this.$v.nameAr.$dirty) return errors;
                !this.$v.nameAr.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            descriptionEnErrors() {
                const errors = [];
                if (!this.$v.descriptionEn.$dirty) return errors;
                !this.$v.descriptionEn.required &&
                errors.push(this.$t("validate.required"));
                return errors;
            },
            imageErrors() {
                const errors = [];
                if (!this.$v.image.$dirty) return errors;
                !this.$v.image.required && errors.push(this.$t("validate.required"));
                return errors;
            }
        },
        methods: {
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
                form.append(`name`, this.name);
                form.append(`name_ar`, this.nameAr);
                form.append(`description`, this.descriptionEn);
                form.append(`description_ar`, this.description);
                if (this.image) form.append(`image`, this.image);
                if (this.id > 0) form.append(`_method`, `PUT`);
                let url =
                        this.id == 0
                                ? `/api/productCategory`
                                : `/api/productCategory/${this.id}`;

                axios
                        .post(url, form)
                        .then(res => {
                            this.createNew();
                            this.$emit("close");
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            load() {
                axios
                        .get(`/api/productCategory/${this.id}`)
                        .then(res => {
                            let data = res.data.data;
                            this.nameAr = data.name_ar;
                            this.name = data.name;
                            this.description = data.description_ar;
                            this.descriptionEn = data.description;
                            this.imagePreview = data.image;
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
                this.imagePreview = null;
                this.image = null;
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
        }
    };
</script>

<style scoped>
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
