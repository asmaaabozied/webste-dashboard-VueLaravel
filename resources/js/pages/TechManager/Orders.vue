<template>
  <div>
    <h3>{{$t('technical.orders.title')}}</h3>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
            <th class="text-center">{{$t('general.type')}}</th>
            <th class="text-center">{{$t('general.date')}}</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in orders" :key="i">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ $getOrderStatus(row.status).label }}</td>
            <td class="text-center">{{ $getOrdertype(row.type) }}</td>
            <td class="text-center">{{ formatDate(row.created_at) }}</td>
            <td class="text-center">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="open(row)">
                      <v-list-item-title>{{ $t('general.open') }}</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item @click="finish(row)">
                      <v-list-item-title>{{ $t('general.finish') }}</v-list-item-title>
                    </v-list-item> -->
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";

export default {
  data() {
    return {
      orders: [],
      icons: {
        mdiDotsVertical
      },
      page: 0,
    };
  },
  mounted() {
      this.load()
  },
  methods: {
    open(order) {
      let route = order.type == 'installment_order' ? 'tm6' : 'tm4';
      this.$router.push({ name: route, params: { id: order[order.type].id, type: order.type } });
    },
    finish() {},
    load() {
      axios.post(`/api/getAuthDetails?atype=1&page=${this.page}`)
        .then(({data}) => {
            // this.orders = data.data.order_info;
             this.orders = [...this.orders, ...data.data.order_info];
          this.page += 1;
          if (res.data.data.order_info != null) this.load();
        })
    }
  },
};
</script>
<style scoped>
</style>
