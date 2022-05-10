<template>
  <div>
    <h3>{{$t('transactions.invoice')}}</h3>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>{{$t('general.name')}}</th>
            <th>{{$t('general.quantity')}}</th>
            <th>{{$t('general.price')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import {} from "@mdi/js";

export default {
 
  data() {
    return {
      icons: {},
      page: 1,
      pagesCount: 0,
      items: [
        { id: 1, name: "item 01", price: 10, quantity: 1 },
        { id: 2, name: "item 02", price: 20, quantity: 1 }
      ]
    };
  },
  methods: {
  
   
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