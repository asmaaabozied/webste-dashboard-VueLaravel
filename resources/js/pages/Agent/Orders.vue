<template>
  <div>
    <h3>{{$t('technical.orders.title')}}</h3>
    <div class="text-center" v-if="isLoading" width="100%" style="height: 50vh; ">
      <v-progress-circular :width="7" :size="70" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-simple-table v-else dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{$t('myRequests.requestStatus')}}</th>
            <th class="text-center">{{$t('myRequests.requestType')}}</th>
            <th class="text-center">{{$t('myRequests.requestDate')}}</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ $getOrderStatus(item.status).label }}</td>
            <td class="text-center">{{ $getOrdertype(item.type) }}</td>
            <td class="text-center">{{ formatDate(item.created_at) }}</td>
            <td>
              <div>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="open(item[item.type].id)">
                      <v-list-item-title>{{ $t('general.open') }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteOrder(item.id)">
                      <v-list-item-title>{{ $t('general.finish') }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";
 

export default {
  data() {
    return {
      icons: {
        mdiDotsVertical
      },
      items: [],
      deleteDialog: false,
      deleteInfo: {
        id: null
      },
      isLoading: false,
    };
  },
  methods: {
    open(id) {
      this.$router.push({ name: "g6", params: { id: id } });
    },
    deleteOrder(id) {
      this.deleteInfo.id = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem() {
      axios
        .delete(`/api/InstallmentOrder/${this.deleteInfo.id}`)
        .then(res => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info"
          });
          this.deleteInfo.id = null;
          this.deleteInfo.type = null;
        })
        .catch(err => {
console.warn(err)
        })
        .finally(() => {
          this.deleteDialog = false;
          this.load();
        });
    },
    load() {
      axios
        .post(`/api/getAuthDetails?atype=1`)
        .then(res => {
          this.items = res.data.data.order_info;
        })
        .catch(() => {
console.warn(err)
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