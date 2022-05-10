<template>
    <div>
        <h3>{{$t('products.products')}}</h3>
        <!-- item Dialog -->
        <v-dialog v-if="itemDialog" v-model="itemDialog" scrollable max-width="60vw">
            <product :id="itemId" @close="itemDialog = false; load();"/>
        </v-dialog>
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
        <!-- constrols -->
        <v-row>
            <v-spacer></v-spacer>
            <v-col md="2" lg="2" xl="2">
                <v-btn color="primary" @click="addItem" icon>
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
                        <v-btn small icon @click="editItem(item)">
                            <v-icon>{{ icons.mdiPencilOutline }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-list-item two-line>
                        <v-avatar size="80" color="grey lighten-4" class="ms-2 me-2 mb-2">
                            <v-img :src="item.image"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1"
                                               v-text="$i18n.locale == 'en' ? item.name : item.name_ar"></v-list-item-title>
                            <v-list-item-subtitle>
                                <div v-text="$i18n.locale == 'en' ? checkIfNotNull(item.category , 'name') : checkIfNotNull(item.category , 'name_ar')"></div>
                                <div v-text="item.model_code"></div>
                                <div>{{ item.price + ' ' + $t('general.sar') }}</div>
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
        mdiCheck,
        mdiChevronRight,
        mdiChevronLeft
    } from "@mdi/js";
    import product from "./Product.vue";

    export default {
        components: {
            product
        },
        data() {
            return {
                icons: {
                    mdiClose,
                    mdiPencilOutline,
                    mdiMagnify,
                    mdiPlusThick,
                    mdiCheck,
                    mdiChevronRight,
                    mdiChevronLeft
                },
                items: [],
                itemDialog: false,
                deleteDialog: false,
                isLoading: false,
                itemId: 0,
                deleteItemId: null
            };
        },
        methods: {
            checkIfNotNull(item , prop) {
                if (item != undefined || item != null){
                    return item[prop];
                }
                return "";
            },
            deleteItem(id) {
                this.deleteItemId = id;
                this.deleteDialog = true;
            },
            confirmDeleteItem() {
                axios
                        .delete(`/api/product/${this.deleteItemId}`)
                        .then(res => {
                            this.$notify({
                                text: this.$t("general.success"),
                                type: "success"
                            });
                            this.load();
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.deleteDialog = false;
                        });
            },
            editItem(item) {
                this.itemId = item.id;
                this.itemDialog = true;
            },
            addItem() {
                this.itemId = 0;
                this.itemDialog = true;
            },
            load() {
                this.isLoading = true;
                axios
                        .get(`/api/product`)
                        .then(res => {
                            this.items = res.data.data;
                        })
                        .catch(err => {
                            this.$notify({
                                text: err.response.data.message,
                                type: "error"
                            });
                        })
                        .finally(() => {
                            this.isLoading = false;
                        });
            }
        },
        mounted() {
            this.load();
        }
    };
</script>
<style scoped>
</style>
