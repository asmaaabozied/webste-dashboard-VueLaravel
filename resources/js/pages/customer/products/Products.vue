<template>
    <div>
        <!-- internal ads -->
        <v-row justify="center" class="my-1">
            <div class="ad-container" style="width: 1000px">
                <v-carousel height="100%" cycle hide-delimiters :show-arrows="false">
                    <v-carousel-item
                            v-for="(item, i) in internalAds"
                            :key="i"
                            :src="item.image"
                            transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </div>
        </v-row>
        <!-- controls -->
        <v-row justify="center" class="mx-12 px-12 my-4">
            <div style="width: 20vw;">
                <!--                <v-text-field-->
                <!--                        :placeholder="$t('products.search')"-->
                <!--                        outlined-->
                <!--                        rounded-->
                <!--                        dense-->
                <!--                        v-model="searchText"-->
                <!--                />-->
            </div>
            <v-spacer></v-spacer>
            <v-btn v-if="$isLoggedin && $roleEquals('customer')"
                   icon :loading="isLoadingCart" @click="cartDialog = true">
                <v-badge :content="cart.length" :value="cart.length" color="grey lighten-1">
                    <v-icon v-if="cart.length > 0" color="blue">{{ icons.mdiCart }}</v-icon>
                    <v-icon v-if="cart.length == 0">{{ icons.mdiCartOutline }}</v-icon>
                </v-badge>
            </v-btn>
        </v-row>
        <!-- products -->
        <div class="text-center" v-if="isLoading" width="100%" style="height: 50vh; ">
            <v-progress-circular :width="7" :size="70" color="primary" indeterminate></v-progress-circular>
        </div>
        <v-row v-else class="d-flex justify-start flex-wrap mx-8">
            <v-col md="6" sm="6" lg="3" cols="12" v-for="(item, i) in items" :key="i">
                <v-card width="100%" style="border-radius: 20px;min-height: 400px">
                    <v-img height="200" :src="item.image"></v-img>
                    <div class="d-flex justify-lg-space-between">
                        <v-card-title style="font-size: 16px">{{ $i18n.locale == 'en' ? item.name : item.name_ar}}
                        </v-card-title>
                        <v-card-title style="font-size: 16px">{{ item.price + ' ' + $t('general.sar')}}
                        </v-card-title>
                    </div>
                    <v-card-text>
                        {{ $i18n.locale == 'en' ? item.description : item.description_ar}}
                    </v-card-text>
                    <v-card-text>
                        <label style="font-size: 18px">{{$t('general.quantity') }}</label>
                        <v-text-field
                                type="number"
                                min="0"
                                autocorrect="off"
                                autocapitalize="off"
                                spellcheck="false"
                                autocomplete="off"
                                :rules="[v => !!v || $requiredRules]"
                                v-model="item.cartQuantity"
                                :readonly="item.isAdded"
                                outlined
                                dense
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-center">
                        <v-btn
                                rounded
                                v-if="$isLoggedin && !item.isAdded"
                                color="primary"
                                @click="addToCart(item)"
                                :loading="item.isLoading"
                        >{{$t('general.add')}}
                        </v-btn>
                        <v-btn v-if="!$isLoggedin" rounded color="primary" @click="redirectIfNotLoggedIn()"
                               :loading="item.isLoading"
                        >{{$t('general.add')}}
                        </v-btn>
                        <v-btn
                                text
                                v-if="$isLoggedin && item.isAdded"
                                :loading="item.isLoading"
                                @click="removeFromCart(item)"
                        >{{$t('general.remove' )}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <!-- cart -->
        <v-dialog width="50vw" v-model="cartDialog" scrollable
                  v-if="$isLoggedin && $roleEquals('customer')">
            <v-card min-height="30vh">
                <v-card-title>{{$t('general.cartContent')}}</v-card-title>
                <v-card-text>
                    <div class="d-flex flex-column" v-if="$isLoggedin">
                        <div v-for="(item, i) in cart" :key="i" class="ma-2">
                            <v-card outlined width="100%">
                                <v-card-actions class="d-flex justify-end">
                                    <v-btn @click="removeFromCart({ id: item.product.id})" icon>
                                        <v-icon color="red">{{ icons.mdiClose }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-row no-gutters>
                                    <v-col cols="4">
                                        <v-img :src="item.product.image"></v-img>
                                    </v-col>
                                    <v-col cols="8">
                                        <v-card-title>{{item.product.model_code}}</v-card-title>
                                        <v-card-text>
                                            <div class="mt-1">{{ $i18n.locale == 'en' ? item.product.name :
                                                item.product.name_ar }}
                                            </div>

                                            <div>{{ $t('general.quantity') + ' : ' + item.quantity }}</div>
                                            <div>{{ $t('general.price') + ' : ' + item.product.price + ' ' +
                                                $t('general.sar')}}
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <span>{{ $t('transactions.total') + ' : ' + total + ' ' + $t('general.sar') }}</span>
                    <v-spacer></v-spacer>
                    <v-btn outlined text @click="cartDialog = false">{{$t('general.close')}}</v-btn>
                    <v-btn v-if="cart.length > 0"
                           color="green" class="white--text" @click="makeTransaction()">
                        {{$t('transactions.makeTransaction')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- google adSense -->
        <v-row justify="center" class="my-1">
            <div class="ad-container"></div>
        </v-row>
    </div>
</template>

<script>
    import {mdiCart, mdiCartOutline, mdiClose} from "@mdi/js";

    export default {
        name: "Products",

        data() {
            return {
                icons: {mdiCart, mdiCartOutline, mdiClose},
                searchText: null,
                internalAds: [],
                cartDialog: false,
                cart: [],
                items: [],
                isLoading: false,
                isLoadingCart: false,
                total: 0
            };
        },

        created() {
            this.loadProducts();
            this.loadAds();
        },

        mounted() {
            if (this.$isLoggedin) {
                this.loadCart();
            }
        },

        methods: {
            loadProducts() {
                this.isLoading = true;
                axios
                        .get("/api/product")
                        .then(res => {
                            this.items = res.data.data;
                        })
                        .catch(err => {
                            console.warn(err)

                        })
                        .finally(() => {
                            this.isLoading = false;
                        });
            },
            loadAds() {
                axios
                        .get(`/api/advertArea`)
                        .then(res => {
                            this.internalAds = res.data.data.resource.data;
                        })
                        .catch(err => {
                            console.warn(err)

                        });
            },
            loadCart() {
                if (this.$isLoggedin && this.$roleEquals('customer')) {
                    this.isLoadingCart = true;
                    axios
                            .get(`/api/getCart`)
                            .then(res => {
                                this.cart = res.data.data.cart;
                                this.items.forEach(element => {
                                    for (let i = 0; i < this.cart.length; i++) {
                                        if (this.cart[i].product_id == element.id)
                                            element["isAdded"] = true;
                                    }
                                });
                                this.total = res.data.data.total;
                            })
                            .catch(err => {
                                console.warn(err)

                            })
                            .finally(() => {
                                this.isLoadingCart = false;
                            });
                }
            },
            addToCart(item) {
                if (!this.$roleEquals('customer')) {
                    this.$notify({
                        text: this.$t('general.customerOnly'),
                        type: "warning"
                    });
                    return;
                }
                if (item.cartQuantity > 0) {
                    item.isLoading = true;
                    axios.post(`/api/addProductToCart`, {
                                product_id: item.id,
                                quantity: item.cartQuantity
                            })
                            .then(res => {
                                this.loadCart();
                            })
                            .catch(err => {
                            })
                            .finally(() => {
                                item.isLoading = false;
                            });
                }
            },
            removeFromCart(item) {
                item.isLoading = true;
                console.log(item)
                axios
                        .delete(`/api/removeProductFromCart`, {
                            headers: {
                                Authorization: "Bearer " + this.$store.state.token
                            },
                            data: {
                                product_id: item.id
                            }
                        })
                        .then(res => {
                            item.isAdded = false;
                            this.loadProducts();
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                        .finally(() => {
                            item.isLoading = false;
                            this.loadCart();
                        });
            },
            makeTransaction() {
                axios
                        .post(`/api/makeTransaction/product`, {
                            delivery_method: 1,
                        })
                        .then(res => {
                            this.showSuccessMessage(this.$t('transactions.success'));
                            this.$router.push({name: "c19"})
                        })
                        .catch(err => {
                            console.warn(err)
                        })
            }
        }
    };
</script>

<style scoped>
    /deep/ .v-card__text {
        padding: 5px 16px !important;
    }
    /deep/ .v-card__title{
        word-break: break-word
    }
</style>
