<template>
    <v-card>
        <v-card-title>{{ $t("admin.discountCode") }}</v-card-title>
        <v-card-text>
            <v-row>
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
            <v-row>
                <v-col cols="12">
                    <v-select
                            v-model="type"
                            :items="types"
                            item-text="label"
                            item-value="id"
                            :label="$t('general.type')"
                            rounded
                            outlined
                            dense
                            :error-messages="typeErrors"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                            v-model="value"
                            type="number"
                            min="0"
                            :error-messages="valueErrors"
                            :label="$t('general.value')"
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                            rounded
                            dense
                            outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-menu
                            v-model="dateMenu1"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    v-model="fromDate"
                                    :label="$t('general.validFrom')"
                                    :prepend-icon="icons.mdiCalendar"
                                    :error-messages="fromDateErrors"
                                    readonly
                                    rounded
                                    outlined
                                    dense
                                    v-on="on"
                                    clearable
                            ></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="fromDate"
                                @input="dateMenu1 = false"
                                :locale="$i18n.locale"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-menu
                            v-model="dateMenu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    v-model="toDate"
                                    :label="$t('general.validTo')"
                                    :prepend-icon="icons.mdiCalendar"
                                    :error-messages="toDateErrors"
                                    readonly
                                    rounded
                                    outlined
                                    dense
                                    v-on="on"
                                    clearable
                            ></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="toDate"
                                @input="dateMenu2 = false"
                                :locale="$i18n.locale"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="d-flex justify-center">
            <v-btn rounded color="primary" @click="save">{{
                $t("general.save")
                }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {required} from "vuelidate/lib/validators";
    import {mdiCalendar} from "@mdi/js";
    import moment from "moment";

    const isAfterDate = (value, vm) => {
        return new Date(value).getTime() > new Date(vm.fromDate).getTime();
    };

    export default {
        name: "discount",

        props: {
            id: {
                type: Number,
                default: 0,
            },
        },

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Discount" : "كود حسم",
            };
        },

        data() {
            return {
                icons: {mdiCalendar},
                name: null,
                type: null,
                types: [
                    {id: 0, label: this.$t("general.rate")},
                    {id: 1, label: this.$t("general.amount")},
                ],
                value: null,
                dateMenu1: false,
                fromDate: null,
                dateMenu2: false,
                toDate: null,
            };
        },
        validations: {
            name: {
                required,
            },
            type: {
                required,
            },
            value: {
                required,
            },
            fromDate: {
                minValue: (value) =>
                        moment(value).format("YYYY-MM-DD") >= moment().format("YYYY-MM-DD"),
            },
            toDate: {
                isAfterDate,
            },
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            typeErrors() {
                const errors = [];
                if (!this.$v.type.$dirty) return errors;
                !this.$v.type.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            valueErrors() {
                const errors = [];
                if (!this.$v.value.$dirty) return errors;
                !this.$v.value.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            fromDateErrors() {
                const errors = [];
                if (!this.$v.fromDate.$dirty) return errors;
                !this.$v.fromDate.minValue &&
                errors.push(this.$t("validate.isStartDateOk"));
                return errors;
            },
            toDateErrors() {
                const errors = [];
                if (!this.$v.toDate.$dirty) return errors;
                !this.$v.toDate.isAfterDate &&
                errors.push(this.$t("validate.greaterDate"));
                return errors;
            },
        },
        methods: {
            save() {
                this.$v.$touch();
                if (this.$v.$invalid) return;
                if (this.id == 0)
                    axios
                            .post(`/api/discountCode`, {
                                name: this.name,
                                type: this.type,
                                amount: this.value,
                                valid_from: this.fromDate,
                                valid_to: this.toDate,
                            })
                            .then((res) => {
                                this.$emit('close');
                            })
                            .catch((err) => {
                                console.warn(err)
                            });
                else if (this.id > 0)
                    axios
                            .put(`/api/discountCode/${this.id}`, {
                                name: this.name,
                                type: this.type,
                                amount: this.value,
                                valid_from: this.fromDate,
                                valid_to: this.toDate,
                            })
                            .then((res) => {
                                this.$emit('close');
                            })
                            .catch((err) => {
                                console.warn(err)
                            });
            },
            load() {
                axios
                        .get(`/api/discountCode/${this.id}`)
                        .then((res) => {
                            let data = res.data.data;
                            this.name = res.data.data.name;
                            this.type = data.type == "rate" ? 0 : 1;
                            this.value = data.amount;
                            this.fromDate = data.valid_from;
                            this.toDate = data.valid_to;
                        })
                        .catch((err) => {
                            console.warn(err)
                        });
            },
            createNew() {
                this.name = null;
                this.type = null;
                this.value = null;
                this.fromDate = null;
                this.toDate = null;
            },
        },
        watch: {
            id: {
                immediate: true,
                handler(val, oldVal) {
                    if (val) this.load();
                    else this.createNew();
                },
            },
        },
    };
</script>

<style scoped></style>
