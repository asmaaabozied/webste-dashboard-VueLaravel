<template>
  <div>
    <h3>{{ $t("technical.orders.title") }}</h3>
    <v-row>
      <v-col cols="2">
        <v-select
          :label="$t('general.filterByState')"
          v-model="statusFilter"
          :items="statusItems"
          item-text="text"
          item-value="value"
          clearable
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          :label="$t('general.filterByType')"
          v-model="typeFilter"
          :items="filterByTypeItems"
          item-text="text"
          item-value="value"
          clearable
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-text-field
          label="ID"
          v-model="id"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn @click="search()">search</v-btn>
      </v-col>
    </v-row>
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
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in itemsFiltered" :key="i">
            <td class="text-center">{{ item.id }}</td>
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
                      <v-list-item-title
                        >{{ $t("general.open") }}
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      v-if="
                        $checkIfOrderStatusNotIn(
                          $getOrderStatus(item.status).value,
                          [3, 4, 5, 6]
                        )
                      "
                      @click="finish(item)"
                    >
                      <v-list-item-title
                        >{{ $t("general.finish") }}
                      </v-list-item-title>
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
    <v-dialog v-model="finishDialog" max-width="500">
      <v-card>
        <v-card-title class="headline"
          >{{ $t("general.finishOrder") }}
        </v-card-title>
        <v-card-text>{{ $t("general.isSure") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmFinishItem()">
            {{ getFinishMessage() }}
          </v-btn>
          <v-btn text @click="finishDialog = false"
            >{{ $t("general.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";

export default {
  name: "orders",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Orders" : "الطلبات",
    };
  },

  data() {
    return {
      icons: {
        mdiDotsVertical,
      },
      items: [],
      statusItems: [
        { value: "received", text: this.$t("myRequests.received") },
        {
          value: "order is being processed",
          text: this.$t("myRequests.processing"),
        },
        {
          value: "order under maintenance",
          text: this.$t("myRequests.maintaining"),
        },
        { value: "order finish", text: this.$t("myRequests.finished") },
        { value: "order declined", text: this.$t("myRequests.declined") },
        {
          value: "order declined by client",
          text: this.$t("myRequests.declinedByCustomer"),
        },
        {
          value: "order finish with unfixed device",
          text: this.$t("myRequests.unfixedDevice"),
        },
      ],
      filterByTypeItems: [
        {
          value: "prevention_maintenance_order",
          text: this.$t("preventiveMaintenance.order"),
        },
        {
          value: "maintenance_order",
          text: this.$t("myRequests.maintenanceRequest"),
        },
        {
          value: "review_order",
          text: this.$t("services.srv05.title"),
        },
      ],
      statusFilter: null,
      typeFilter: null,
      finishInfo: {
        type: "",
        id: "",
        technical_status: "",
      },
      finishDialog: false,
      page: 0,
      id: null,
    };
  },

  methods: {
    getFinishMessage() {
      return this.$getTechnicalStatus(this.finishInfo.technical_status).value
        ? this.$t("general.sure")
        : this.$t("myRequests.unfixedDevice");
    },
    open(type, status, id) {
      if (status == "received")
        this.$router.push({ name: "mm8", params: { id: id, type: type } });
      else {
        if (type == "maintenance_order")
          this.$router.push({ name: "mm9", params: { id: id } });
        else
          this.$router.push({ name: "mm10", params: { id: id, type: type } });
      }
    },
    finish(item) {
      this.finishInfo = {
        type: item.type,
        id: item[item.type].id,
        technical_status: item.technical_status,
      };
      this.finishDialog = true;
    },
    confirmFinishItem() {
      let status = 3;
      let techStatus = this.$getTechnicalStatus(
        this.finishInfo.technical_status
      ).value;
      if (techStatus != -1) {
        status = techStatus == 1 ? 3 : 6;
      }
      let url;
      switch (this.finishInfo.type) {
        case "maintenance_order":
          url = `/api/MaintenanceOrder/${this.finishInfo.id}`;
          break;
        case "prevention_maintenance_order":
          url = `/api/PreventionMaintenanceOrder/${this.finishInfo.id}`;
          break;
        case "review_order":
          url = `/api/OrderReviewOrder/${this.finishInfo.id}`;
          break;
        default:
          break;
      }

      axios
        .put(url, { status: status })
        .then((res) => {
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
        .post(`/api/getAuthDetails?atype=1&page=${this.page}`)
        .then((res) => {
          // this.items = res.data.data.order_info;
          this.items = [...this.items, ...res.data.data.order_info];
          this.page += 1;
          if (res.data.data.order_info != null) this.load();
          // let reviewOrders = res.data.data.order_review_order;
          // reviewOrders.forEach((element) => {
          //     this.items.push({
          //         id: element.id,
          //         status: element.status,
          //         type: "review_order",
          //         created_at: element.created_at,
          //         review_order: {
          //             id: element.id,
          //         },
          //     });
          // });
        })
        .catch((err) => {
          console.warn(err);
        });
    },

    search() {
      axios
        .post(`/api/getAuthDetails?atype=1&page=${this.page}`, {
          id: this.id,
        })
        .then((res) => {
          this.items = [...res.data.data.order_info];
          //this.page = 9999999;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },

  computed: {
    itemsFiltered() {
      let filter = {};
      if (this.statusFilter) filter["status"] = this.statusFilter;
      if (this.typeFilter) filter["type"] = this.typeFilter;

      function filterBy(item) {
        for (let key in filter) {
          if (item[key] === undefined || item[key] !== filter[key]) {
            return false;
          }
        }
        return true;
      }

      let items = this.items.slice(0);
      return items.filter(filterBy);
    },
  },

  created() {
    this.load();
  },
};
</script>
<style scoped></style>
