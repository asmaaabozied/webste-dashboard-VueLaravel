<template>
  <div>
    <h3>{{ $t("technical.spares.title") }}</h3>
    <br />
    <div class="d-flex justify-end">
      <v-btn class="mx-2" icon @click="cartDialog = true">
        <v-badge
          :content="cart.length"
          :value="cart.length"
          color="grey lighten-1"
        >
          <v-icon v-if="cart.length > 0" color="blue">{{
            icons.mdiCart
          }}</v-icon>
          <v-icon v-if="cart.length == 0">{{ icons.mdiCartOutline }}</v-icon>
        </v-badge>
      </v-btn>
      <v-btn class="mx-2" @click="getBack">{{ $t("general.return") }}</v-btn>
    </div>
    <div class="d-flex justify-start flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="ma-2">
        <v-card width="20vw">
          <v-card-title class="text-center">{{ item.name }}</v-card-title>
          <v-card-subtitle class="text-center">{{
            item.name_ar
          }}</v-card-subtitle>
          <v-card-text>
            <div class="text-center mt-1">{{ item.manufacturer }}</div>
            <div class="text-center mt-1">
              {{ item.price + " " + $t("general.sar") }}
            </div>
            <div class="d-flex justify-center">
              <div style="width: 50%;">
                <v-text-field
                  type="number"
                  min="0"
                  v-model.number="item.quantity"
                ></v-text-field>
              </div>
            </div>
            <div class="text-center mt-1">
              <v-btn
                rounded
                v-if="!item.isAdded"
                color="primary"
                @click="
                  cart.push(item);
                  item.isAdded = true;
                "
                >{{ $t("general.add") }}
              </v-btn>
              <v-btn
                rounded
                v-if="item.isAdded"
                @click="
                  cart.splice(
                    cart.find((e) => e.id == item.id),
                    1
                  );
                  item.isAdded = false;
                "
                >{{ $t("general.remove") }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <v-dialog width="60vw" v-model="cartDialog" scrollable>
      <v-card min-height="30vh">
        <v-card-title>{{ $t("general.cartContent") }}</v-card-title>
        <v-card-text>
          <div class="d-flex flex-column">
            <div v-for="(item, i) in cart" :key="i" class="ma-2">
              <v-card width="100%">
                <v-row no-gutters>
                  <v-col cols="8">
                    <v-card-title>{{ item.code }}</v-card-title>
                    <v-card-subtitle>{{ item.manufacturer }}</v-card-subtitle>
                    <v-card-text>
                      <div class="mt-1">{{ item.name }}</div>
                      <div class="mt-1">{{ item.name_ar }}</div>
                      <div class="mt-1">
                        {{ item.price + " " + $t("general.sar") }}
                      </div>
                      <div>
                        {{ $t("general.quantity") + " : " + item.quantity }}
                      </div>
                      <div class="mt-1">
                        <v-btn
                          @click="
                            items.find((e) => e.id == item.id).isAdded = false;
                            cart.splice(i, 1);
                          "
                          rounded
                          >{{ $t("general.remove") }}
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="confirmCart" v-if="cart.length > 0">
            {{ $t("general.confirm") }}
            <v-icon>{{ icons.mdiCheckCircleOutline }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mdiCart, mdiCartOutline, mdiCheckCircleOutline } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        mdiCart,
        mdiCartOutline,
        mdiCheckCircleOutline,
      },
      orderId: this.$route.params.id,
      cartDialog: false,
      cart: [],
      items: [],
      user_id: null,
    };
  },
  methods: {
    confirmCart() {
      let result = "ok";
      // axios
      //   .post(`/api/employeeDetermineFixLocation`, {
      //     fix_place: 1,
      //     order_id: this.id
      //   })
      //   .catch(err => {
      //     result = "error";
      //   });

      this.cart.forEach((element) => {
        if (result !== "error") {
          let form = new FormData();
          form.append(`maintenance_order_id`, parseInt(this.orderId));
          form.append(`spare_id`, element.id);
          form.append(`quantity`, element.quantity);
          form.append(`user_id`, user_id);
          axios
            .post(`/api/determineSparePart`, form)
            .then((res) => {
              console.log(res);
              this.cartDialog = false;
              this.loadParts();
              this.cart = [];
            })
            .catch((err) => {
              console.warn(err);
            });
        }
      });
    },
    getBack() {
      this.$router.go(-1);
    },
    loadParts() {
      axios
        .get(`/api/sparePart`)
        .then((res) => {
          this.items = res.data.data;
          this.items.forEach((element) => {
            element.quantity = 0;
            element.isAdded = false;
          });
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },
  mounted() {
    this.loadParts();
  },
};
</script>
<style scoped></style>
