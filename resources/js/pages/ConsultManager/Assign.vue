<template>
    <v-form lazy-validation ref="form" :value="valid" class="d-flex justify-center">
        <v-card width="60vw">
            <v-card-title>{{$t('general.assign')}}</v-card-title>
            <v-card-text>
                <v-autocomplete
                        v-model="employee"
                        :items="employees"
                        outlined
                        :rules="[v => !!v || $requiredRules]"
                        dense
                        chips
                        item-text="name"
                        item-value="id"
                        :label="$t('topNav.employees')"
                ></v-autocomplete>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn rounded color="success" @click="confirm">{{$t('general.confirm')}}</v-btn>
                <v-btn rounded @click="close">{{$t('general.cancel')}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                valid: true,
                employees: [],
                employee: null,
                id: this.$route.params.id,
            };
        },
        methods: {
            load() {
                axios.get(`/api/getAuthDetails`)
                        .then(({data}) => {
                            this.employees = data.data.employee_by_manager;
                        })
                        .catch((err) => {
                            console.warn(err)
                        });
            },
            confirm() {
                if (!this.$refs.form.validate()) {
                    this.$notify({
                        text: this.$t("general.checkInputs"),
                        type: "warning",
                    });
                    return;
                }
                if (this.id > 0 && this.employee > 0) {
                    let form = new FormData();
                    form.append(`employee_id[]`, this.employee);
                    form.append(`order_id`, this.id);
                    axios
                            .post(`/api/addEmployeesToOrder`, form)
                            .then((res) => {
                                this.$notify({
                                    text: this.$t("general.success"),
                                    type: "success",
                                });

                                this.close();
                            })
                            .catch((err) => {
                                console.warn(err)
                            });
                }
            },
            close() {
                this.$router.go(-1);
            },
        },
        mounted() {
            this.load();
        },
    };
</script>

<style>
</style>
