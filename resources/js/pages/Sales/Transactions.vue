<template>
  <div>
    <h3>{{$t('transactions.transactions')}}</h3>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>{{$t('general.name')}}</th>
            <th>{{$t('general.actions')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in transactions" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <div>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="open(item)">
                      <v-list-item-title>{{ $t('products.view') }}</v-list-item-title>
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
    <!-- edit/create  -->
    <v-dialog v-model="itemDialog" max-width="50vw" scrollable>
      <product :id="itemId" />
    </v-dialog>
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";
import product from "./Product";

export default {
  components: {
    product
  },
  data() {
    return {
      icons: {
        mdiDotsVertical
      },
      page: 1,
      pagesCount: 0,
      transactions: [
        { id: 0, name: "transactions 01" },
        { id: 1, name: "transactions 02" },
        { id: 2, name: "transactions 03" },
        { id: 3, name: "transactions 04" }
      ],
      itemId: 0
    };
  },
  methods: {
    open(item) {
      this.$router.push({ name: "sm6", params: { id: item.id } });
    },
    load() {
      axios
        .get(` `)
        .then(res => {})
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