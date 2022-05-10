<template>
  <v-card>
    <v-card-title>{{$t('transactions.transaction')}}</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn rounded class="mx-4" @click="viewInvoice">{{$t('transactions.viewInvoice')}}</v-btn>
    </v-card-actions>
    <v-card-text>
      <v-row>
        <v-col cols="4">{{$t('general.date')}}</v-col>
        <v-col cols="8">{{date }}</v-col>
      </v-row>
      <v-row v-if="discount">
        <v-col cols="4">{{$t('transactions.discount')}}</v-col>
        <v-col cols="8">{{discount}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">{{$t('transactions.netTotal')}}</v-col>
        <v-col cols="8">{{netTotal}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">{{$t('transactions.paymentMethod')}}</v-col>
        <v-col cols="8">{{paymentMethod}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">{{$t('transactions.deliveryMethod')}}</v-col>
        <v-col cols="8">{{deliveryMethod}}</v-col>
      </v-row>
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    id: Number
  },
  data() {
    return {
      date: null,
      discount: null,
      netTotal: null,
      paymentMethod: null,
      deliveryMethod: null,
      items: [
        { id: 1, name: "item 01", price: 10, quantity: 1 },
        { id: 2, name: "item 02", price: 20, quantity: 1 }
      ]
    };
  },
  methods: {
    load() {
      axios
        .get(``)
        .then(res => {})
        .catch(err => {});

      this.date = "01-01-2020";
      this.discount = 50;
      this.netTotal = 3000;
      this.paymentMethod = "cash";
      this.deliveryMethod = "fastship";
    },
    viewInvoice() {
      this.$router.push({ name: "sm7", params: { id: this.id } });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.load();
    });
  }
};
</script>

<style>
</style>