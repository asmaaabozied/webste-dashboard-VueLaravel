<template>
    <div>
        <v-row justify="end" class="mb-5">
            <v-col cols="2">
                <v-btn v-text="$t('general.return')" @click="$router.go(-1)"></v-btn>
            </v-col>
        </v-row>
        <v-card class="mt-5">
            <v-card-title>{{$t('technical.assignTech')}}</v-card-title>

            <v-card-text>
                <v-row>
                    <v-col cols="2" class="d-flex align-center">{{$t('technical.selectTech')}}</v-col>
                    <v-col>
                        <v-select v-model="selectedEmps" :items="employees" item-text="name" item-value="id"
                                  multiple></v-select>
                    </v-col>
                    <v-col>
                        <v-btn @click="add">{{$t('general.add')}}</v-btn>
                    </v-col>
                </v-row>
                <h4>{{$t('technical.assignedTech')}}</h4>
                <v-simple-table dense fixed-header>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">{{$t('general.name')}}</th>
                            <th class="text-center"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(employee, i) in assigned" :key="i">
                            <td class="text-center">{{ i + 1 }}</td>
                            <td class="text-center">{{ employee.name }}</td>
                            <td class="text-center">
                                <v-btn color="error" rounded x-small class="ma-2" @click="del(employee.id)">Delete
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                assigned: [],
                employees: [],
                selectedEmps: [],
            };
        },
        mounted() {
            this.load()
        },
        methods: {
            load() {
                axios.post(`/api/getAuthDetails?atype=1`)
                        .then(({data}) => {
                            this.employees = data.data.employee_by_manager
                        });

                this.getOrder()
            },
            getOrder() {
                axios.get(`/api/${this.$getOrderTypeAPI(this.$route.params.type)}/${this.$route.params.orderId}`)
                        .then(({data}) => {
                            this.assigned = data.data.order_info.employee_info
                        })
            },
            add() {
                axios.post(`/api/addEmployeesToOrder`, {
                    order_id: this.$route.params.id,
                    employee_id: this.selectedEmps
                })
                        .then(({data}) => {
                            this.getOrder()
                        })
            },
            del(id) {
                axios.delete(`/api/deleteEmployeesFromOrder`, {
                    params: {
                        order_id: this.$route.params.id,
                        employee_id: [id]
                    }
                })
                        .then(({data}) => {
                            this.getOrder()
                        })
            }
        },
    };
</script>

<style>
</style>
