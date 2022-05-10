<template>
    <div>
        <h3>{{$t('consultation.orders')}}</h3>
        <v-simple-table height="70vh" dense fixed-header>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">{{$t('general.description')}}</th>
                    <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
                    <th class="text-center">{{$t('general.createdAt')}}</th>

                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, i) in items" :key="i">
                    <td class="text-center">{{ i + 1 }}</td>
                    <td class="text-center">{{ item.description.substr(0, 25) + ' ..'}}</td>
                    <td
                            class="text-center"
                    >{{ $getOrderStatus(item.order_info.status).label }}
                    </td>
                    <td class="text-center">{{formatDate(item.created_at)}}</td>
                    <td>
                        <div class="text-center">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="black" icon dark v-on="on">
                                        <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="open(item.id, item.order_info.id)">
                                        <v-list-item-title>{{ $t('general.open') }}</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                            v-if="$checkIfOrderStatusNotIn($getOrderStatus(item.order_info.status).value , [3,4,5 ,6])"
                                            @click="finish(item.id)"
                                    >
                                        <v-list-item-title>{{ $t('general.finish') }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div class="text-center">
            <v-pagination
                    v-model="page"
                    :length="Math.ceil(total / limit)"
                    :total-visible="5"
                    @input="load"
                    circle
            ></v-pagination>
        </div>
        <!-- finish dialog -->
        <v-dialog v-model="finishDialog" max-width="290">
            <v-card>
                <v-card-title class="headline">{{$t('general.finishOrder')}}</v-card-title>
                <v-card-text>{{$t('general.isSure')}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="confirmFinish">{{ $t('general.sure') }}</v-btn>
                    <v-btn text @click="finishDialog = false">{{ $t('general.close') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    import {mdiDotsVertical} from "@mdi/js";
    import axios from "axios";

    export default {
        data() {
            return {
                icons: {
                    mdiDotsVertical,
                },
                items: [],
                page: 1,
                limit: 5,
                total: 0,
                finishId: null,
                finishDialog: false,
            };
        },
        methods: {
            open(id, internalId) {
                this.$router.push({
                    name: "cm3",
                    params: {id: id, internalId: internalId},
                });
            },
            finish(id) {
                this.finishId = id;
                this.finishDialog = true;
            },
            confirmFinish() {
                axios
                        .put(`/api/ConsultantOrder/${this.finishId}`, {status: 3})
                        .then((res) => {
                            this.$notify({
                                text: this.$t("general.success"),
                                type: "success",
                            });
                        })
                        .catch((err) => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.finishDialog = false;
                        });
            },
            load() {
                axios
                        .get(`/api/ConsultantOrder?page=${this.page}`)
                        .then((res) => {
                            this.items = res.data.data.resource.data;
                            this.limit = res.data.data.resource.per_page;
                            this.total = res.data.data.resource.total;
                        })
                        .catch(() => {
                            console.warn(err)
                        });
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
</style>
