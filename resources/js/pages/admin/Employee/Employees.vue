<template>
    <div>
        <h3>{{$t('admin.employeesTitle')}}</h3>
        <!-- delete dialog -->
        <v-dialog v-model="deleteDialog" max-width="290">
            <v-card>
                <v-card-title class="headline">{{$t('general.delete')}}</v-card-title>
                <v-card-text>{{$t('general.deleteMsg')}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="confirmDeleteItem">{{ $t('general.sure') }}</v-btn>
                    <v-btn text @click="deleteDialog = false">{{ $t('general.close') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- controls -->
        <v-row>
            <v-spacer></v-spacer>
            <v-col md="2" lg="2" xl="2">
                <v-btn color="primary" dark @click="addItem" icon>
                    <v-icon>{{icons.mdiPlusThick }}</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <!-- items -->
        <div class="text-center" v-if="isLoading" width="100%" style="height: 50vh; ">
            <v-progress-circular :width="7" :size="70" color="primary" indeterminate></v-progress-circular>
        </div>

        <v-slide-y-transition mode="in-out" v-else>
            <div class="d-flex flex-wrap" style="width: 100%">
                <v-card
                        v-for="(item, i) in items"
                        :key="i"
                        class="ma-4"
                        outlined
                        width="25vw"
                        elevation="1"
                >
                    <v-card-actions class="d-flex justify-end">
                        <v-btn small icon @click="deleteItem(item.id)">
                            <v-icon>{{ icons.mdiClose }}</v-icon>
                        </v-btn>
                        <v-btn small icon @click="editItem(item.id)">
                            <v-icon>{{ icons.mdiPencilOutline }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-list-item two-line>
                        <v-avatar size="80" color="grey lighten-4" class="ms-2 me-2 mb-2">
                            <v-img :src="item.image"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>
                                <div>{{ item.user_name }}</div>
                                <div>{{ item.role }}</div>
                                <div>{{ item.phone }}</div>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>
        </v-slide-y-transition>
    </div>
</template>
<script>
    import {
        mdiClose,
        mdiPencilOutline,
        mdiMagnify,
        mdiPlusThick,
        mdiCheck
    } from "@mdi/js";
    import axios from "axios";

    export default {
        name: "employees",

        metaInfo() {
            const locale = this.$i18n.locale;
            return {
                title: locale == "en" ? "Employees" : "الموظفون",
            };
        },

        data() {
            return {
                icons: {
                    mdiClose,
                    mdiPencilOutline,
                    mdiMagnify,
                    mdiPlusThick,
                    mdiCheck
                },
                items: [],
                deleteDialog: false,
                isLoading: false,
                deleteItemId: null
            };
        },
        methods: {
            deleteItem(id) {
                this.deleteItemId = id;
                this.deleteDialog = true;
            },
            confirmDeleteItem() {
                axios
                        .delete(`/api/employee/${this.deleteItemId}`)
                        .then(res => {
                            this.$notify({
                                text: this.$t("general.success"),
                                type: "success"
                            });
                            this.load()
                            this.deleteDialog = false;
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            editItem(id) {
                this.$router.push({name: "sa2-2", params: {id: id}});
            },
            addItem() {
                this.$router.push({name: "sa2-2", params: {id: 0}});
            },
            load() {
                this.isLoading = true;
                axios
                        .get(`/api/employee`)
                        .then(res => {
                            this.items = res.data.data;
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.isLoading = false;
                        });
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.load();
            });
        }
    };
</script>
<style scoped>
</style>
