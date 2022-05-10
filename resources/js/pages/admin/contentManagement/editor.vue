<template>
    <div>
        <v-row justify="end">
            <v-col cols="2" md="1" class="d-flex justify-end">
                <v-btn v-text="$t('general.return')" @click="$router.go(-1)"></v-btn>
            </v-col>
        </v-row>
        <v-row v-for="(item, i) in messages" :key="i" no-gutters>
            <v-col cols="12" md="4">
                <v-alert icon="mdi-information" color="red" type="error">
                    {{ item }}
                </v-alert>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="3">
                <v-text-field
                        v-model="pageOrder"
                        :label="$t('admin.pageOrder')"
                        type="number"
                        min="1"
                        :error-messages="orderErrors"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        rounded
                        outlined
                        dense
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field
                        v-model="name.ar"
                        :label="$t('general.nameAr')"
                        :error-messages="nameErrors"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        rounded
                        outlined
                        dense
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field
                        v-model="name.en"
                        :label="$t('general.nameEn')"
                        :error-messages="nameEnErrors"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        rounded
                        outlined
                        dense
                ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="3">
                <v-btn class="mx-4" @click="save" rounded>{{
                    $t("general.save")
                    }}
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-card width="100%">
                <v-tabs v-model="tab" background-color="blue" dark>
                    <v-tab href="#tab-1">{{ $t("admin.arabic") }}</v-tab>
                    <v-tab href="#tab-2">{{ $t("admin.english") }}</v-tab>

                    <v-tab-item value="tab-1">
                        <div class="ma-4">
                            <div class="ma-2" style="height: 70vh;">
                                <ckeditor
                                        v-model="content.ar"
                                        :config="editorConfig"
                                ></ckeditor>
                                <small
                                        style="color: red;"
                                        v-for="item in contentErrors"
                                        :key="item"
                                >{{ item }}</small
                                >
                            </div>
                        </div>
                    </v-tab-item>
                    <v-tab-item value="tab-2">
                        <div class="ma-4">
                            <div class="ma-2" style="height: 70vh;">
                                <ckeditor
                                        v-model="content.en"
                                        :config="editorConfig"
                                ></ckeditor>
                                <small
                                        style="color: red;"
                                        v-for="item in contentErrors"
                                        :key="item"
                                >{{ item }}</small
                                >
                            </div>
                        </div>
                    </v-tab-item>
                </v-tabs>
            </v-card>
        </v-row>
    </div>
</template>

<script>
    import CKEditor from "ckeditor4-vue";

    Vue.use(CKEditor);
    import {required, minValue} from "vuelidate/lib/validators";

    export default {
        name: "editor",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Editor" : "محرر المحتوى",
            };
        },

        components: {
            ckeditor: CKEditor.component,
        },

        data() {
            return {
                id: 0,
                tabs: 2,
                tab: "tab-1",
                editorConfig: {},
                name: {
                    ar: null,
                    en: null,
                },
                pageOrder: 0,
                content: {
                    ar: "",
                    en: "",
                },
                messages: []
            };
        },

        validations: {
            name: {ar: {required}, en: {required}},
            content: {ar: {required}, en: {required}},
            pageOrder: {required, minValue: minValue(1)},
        },

        methods: {
            load() {
                axios
                        .get(`/api/contentManagement/${this.id}`)
                        .then((res) => {
                            let data = res.data.data;
                            this.name.ar = data.name_ar;
                            this.name.en = data.name_en;
                            this.pageOrder = data.pageOrder;
                            this.content.ar = data.content_ar;
                            this.content.en = data.content_en;
                        })
                        .catch((err) => {
                            this.$notify({
                                text: "Error, " + err,
                                type: "error",
                            });
                        });
            },

            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.$notify({
                        text: this.$t("general.checkInputs"),
                        type: "error",
                    });
                    return;
                }

                let data = {
                    name_ar: this.name.ar,
                    name_en: this.name.en,
                    content_ar: this.content.ar,
                    content_en: this.content.en,
                    pageOrder: this.pageOrder,
                };

                if (this.id == 0) {

                    axios
                            .post(`/api/contentManagement`, data)
                            .then((res) => {
                                this.$notify({
                                    text: this.$t("general.success"),
                                    type: "success",
                                });
                                this.$router.push({name: "sa12"});
                            })
                            .catch((err) => {
                                this.$notify({
                                    text: "Error while saveing, " + err,
                                    type: "error",
                                });
                                this.setMessages(err.response.data)
                            });
                } else if (this.id > 0) {
                    axios
                            .put(`/api/contentManagement/${this.id}`, data)
                            .then((res) => {
                                this.$notify({
                                    text: this.$t("general.success"),
                                    type: "success",
                                });
                            })
                            .catch((err) => {
                                this.$notify({
                                    text: "Error while saveing, " + err,
                                    type: "error",
                                });
                                this.setMessages(err.response.data)
                            });
                }
            },
            createNew() {
                this.name.ar = null;
                this.name.en = null;
                this.content = {
                    ar: "<p>اكتب المحتوى هنا ..</p>",
                    en: "<p>Type your content here ..</p>",
                };
                this.$v.$reset();
            },
            getBack() {
                this.$router.push({name: "sa12"});
            },
            setMessages(data) {
                for (const key in data)
                    this.messages.push(data[key]);
            }
        },

        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.ar.$dirty) return errors;
                !this.$v.name.ar.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            nameEnErrors() {
                const errors = [];
                if (!this.$v.name.en.$dirty) return errors;
                !this.$v.name.en.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            contentErrors() {
                const errors = [];
                if (!this.$v.content.ar.$dirty) return errors;
                !this.$v.content.ar.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            orderErrors() {
                const errors = [];
                if (!this.$v.pageOrder.$dirty) return errors;
                !this.$v.pageOrder.required && errors.push(this.$t("validate.required"));
                !this.$v.pageOrder.minValue &&
                errors.push(this.$t("validate.biggerThanZero"));
                return errors;
            },
        },

        created() {
            this.id = parseInt(this.$route.params.id);
            if (this.id == 0) this.createNew();
            else if (this.id > 0) this.load();
        },
    };
</script>

<style></style>
