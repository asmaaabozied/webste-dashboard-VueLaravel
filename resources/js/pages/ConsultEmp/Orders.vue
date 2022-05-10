<template>
  <div>
    <h3>{{$t('general.orders')}}</h3>

    <v-simple-table height="80vh" v-if="items.length > 0" dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{$t('general.description')}}</th>
            <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
            <th class="text-center">{{$t('general.createdAt')}}</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ item.consultant_order.description.substr(0, 25) + ' ..' }}</td>
            <td class="text-center">{{ $getOrderStatus(item.consultant_order.order_info.status).label }}</td>
            <td class="text-center">{{ formatDate(item.consultant_order.created_at)}}</td>
            <td>
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="open(item.consultant_order.id)">
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
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";

export default {
  data() {
    return {
      items: [],
      icons: {
        mdiDotsVertical,
      },
    };
  },
  methods: {
    open(id) {
      this.$router.push({ name: "ce3", params: { id: id } });
    },
    load() {
      axios
        .post(`/api/getAuthDetails?atype=1`)
        .then((res) => {
          this.items = res.data.data.order_info;
        })
        .catch((err) => {
          console.warn(err)
        });
      this.items = [];
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
