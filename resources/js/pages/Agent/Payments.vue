<template>
  <div>
    <h3>{{$t('general.principalPayment')}}</h3>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>{{$t('general.orderId')}}</th>
            <th>{{$t('general.price')}}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in payments" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.orderId }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="open(item.id)">
                      <v-list-item-title>{{ $t('general.open') }}</v-list-item-title>
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
      <v-pagination v-model="page" @input="load" :length="pagesCount" :total-visible="5" circle></v-pagination>
    </div>
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";
import axios from "axios";

export default {
  data() {
    return {
      page: 1,
      pagesCount: 0,
      payments: [
        { id: 1, orderId: 1, price: 1 },
        { id: 2, orderId: 2, price: 2 },
        { id: 3, orderId: 3, price: 3 },
        { id: 4, orderId: 4, price: 4 },
      ],
      icons: {
        mdiDotsVertical
      }
    };
  },
  methods: {
    open(id) {
        this.$router.push({ name: "g5", params: { id: id } });
    },
 
    load() {
      axios
        .get(``)
        .then(res => {
          this.payments = res.data.data;
        })
        .catch(() => {});
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // vm.load();
    });
  }
};
</script>
<style scoped>
</style>