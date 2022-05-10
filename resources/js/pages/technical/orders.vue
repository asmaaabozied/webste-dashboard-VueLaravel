<template>
  <div>
    <h3>{{ $t("technical.orders.title") }}</h3>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{ $t("myRequests.requestStatus") }}</th>
            <th class="text-center">
              {{ $t("myRequests.requestTechnicalStatus") }}
            </th>
            <th class="text-center">{{ $t("general.type") }}</th>
            <th class="text-center">{{ $t("general.date") }}</th>
            <th class="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">
              {{ $getOrderStatus(item.status).label }}
            </td>
            <td class="text-center">
              {{ $getTechnicalStatus(item.technical_status).label }}
            </td>
            <td class="text-center">{{ $getOrdertype(item.type) }}</td>
            <td class="text-center">{{ formatDate(item.created_at) }}</td>
            <td class="text-center">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      @click="open(item.type, item.status, item[item.type].id)"
                    >
                      <v-list-item-title>{{
                        $t("general.open")
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- finish dialog -->
    <v-dialog v-model="finishDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{
          $t("general.finishOrder")
        }}</v-card-title>
        <v-card-text>{{ $t("general.isSure") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmFinishItem">{{
            $t("general.sure")
          }}</v-btn>
          <v-btn text @click="finishDialog = false">{{
            $t("general.close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";
import axios from "axios";

export default {
  data() {
    return {
      icons: {
        mdiDotsVertical,
      },
      items: [],
      finishInfo: null,
      finishDialog: false,
    };
  },
  methods: {
    open(type, status, id) {
      let route = type == "installment_order" ? "t5" : "t4";
      this.$router.push({ name: route, params: { id: id } });
    },
    finish(type, id) {
      this.finishInfo = { type: type, id: id };
      this.finishDialog = true;
    },
    confirmFinishItem() {
      let url;
      switch (this.finishInfo.type) {
        case "maintenance_order":
          url = `/api/MaintenanceOrder/${this.finishInfo.id}`;
          break;
        case "installment_order":
          url = `/api/InstallmentOrder/${this.finishInfo.id}`;
          break;
        default:
          break;
      }

      axios
        .put(url, { status: 3 })
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info",
          });
          this.load();
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          this.finishDialog = false;
        });
    },
    load() {
      axios
        .post(`/api/getAuthDetails?atype=1`)
        .then((res) => {
          console.log(res);
          this.items = res.data.data.order_info;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.load();
  },
};
</script>
<style scoped></style>
