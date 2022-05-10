<template>
    <div>
        <v-card>
            <v-row no-gutters>
                <v-col md="8" lg="8" xl="8">
                    <div class="pa-5">
                        <h2>{{ $t("general.contactUs") }}</h2>
                        <br/>
                        <div>
                            <v-icon class="mx-1">{{ icons.mdiPhone }}</v-icon>
                            {{ $t("general.phone") }}
                        </div>
                        <br/>
                        <div>
                            <v-icon class="mx-1">{{ icons.mdiBank }}</v-icon>
                            {{ $t("general.bankInfo") }}
                        </div>
                        <div class="mt-8">{{ $t("general.sendUs") }}</div>
                        <div class="mt-2">
                          <v-textarea
                                  v-model="suggestion"
                                  :placeholder="$t('general.suggestion')"
                                  :error-messages="suggestErrors"
                                  rounded
                                  outlined
                                  no-resize
                          >
                          </v-textarea>
                        </div>
                        <div>
                            <v-select
                                    :error-messages="departmentErrors"
                                    :label="$t('general.department')"
                                    :items="departments"
                                    v-model="department"
                                    item-value="id"
                                    :item-text="$i18n.locale == 'ar' ? 'name_ar' : 'name'"
                                    rounded
                                    outlined
                                    dense
                            ></v-select>
                        </div>
                        <div class="d-flex justify-end">
                            <v-btn v-if="$isLoggedin" rounded color="primary" class="mx-2" @click="send">
                                {{$t("contactUs.send")}}
                            </v-btn>
                            <v-btn v-if="!$isLoggedin" rounded color="primary" class="mx-2" @click="redirectIfNotLoggedIn()">
                                {{$t("contactUs.send")}}
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col md="4" lg="4" xl="4">
                    <v-img height="85vh" :src="image"></v-img>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    import {required} from "vuelidate/lib/validators";
    import axios from "axios";
    import {mdiPhone, mdiBank} from "@mdi/js";

    export default {
        name: "contactUs",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Contact us" : "اتصل بنا",
            };
        },

        data() {
            return {
                icons: {
                    mdiPhone,
                    mdiBank,
                },
                suggestion: null,
                department: null,
                departments: [],
                image: require("./../../../assets/images/contactUs.svg"),
            };
        },
        validations: {
            suggestion: {
                required,
            },
            department: {
                required,
            },
        },
        methods: {
            send() {
                this.$v.$touch();
                if (this.$v.$invalid) return;
                axios.post(`/api/suggestion`, {
                    department_id: this.department,
                    text: this.suggestion,
                })
                .then(() => {
                    this.$router.push({name: "home"});
                })
                .catch(() => {
                    console.warn(err)
                });
            },
            load() {
                axios
                        .get(`/api/department`)
                        .then((res) => {
                            this.departments = res.data.data.filter(item => item.id != this.$store.state.user.department_id);
                        })
                        .catch((err) => {
                            console.warn(err)
                        });
            },
        },
        computed: {
            suggestErrors() {
                const errors = [];
                if (!this.$v.suggestion.$dirty) return errors;
                !this.$v.suggestion.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            departmentErrors() {
                const errors = [];
                if (!this.$v.department.$dirty) return errors;
                !this.$v.department.required && errors.push(this.$t("validate.required"));
                return errors;
            },
        },
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                vm.load();
            });
        },
    };
</script>

<style scoped>
    #image {
        width: 100%;
        height: 100%;
        background-color: gray;
    }
</style>
