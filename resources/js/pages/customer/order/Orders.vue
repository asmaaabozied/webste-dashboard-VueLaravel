<template>
  <div class="b-section m-5">
    <h5 class="pt-3 m-0" style="padding: 0 40px;" :class="{ 'text-right': $vuetify.rtl }">
      {{ $t("myRequests.myRequests") }}
    </h5>
    <div class="text-center" v-if="isLoading" style="height: 50vh; ">
      <v-progress-circular :width="7" :size="70" color="primary" indeterminate></v-progress-circular>
    </div>

    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{ $t("myRequests.requestStatus") }}</th>
            <th class="text-center">{{ $t("myRequests.requestType") }}</th>
            <th class="text-center">{{ $t("myRequests.requestDate") }}</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">
              {{ $getOrderStatus(item.status).label }}
            </td>
            <td class="text-center">{{ $getOrdertype(item.type) }}</td>
            <td class="text-center">{{ formatDate(item.created_at) }}</td>
            <td class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="black" icon dark v-on="on">
                    <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    @click="
                      open(
                        item.type,
                        item[item.type] && item[item.type].id
                          ? item[item.type].id
                          : null
                      )
                    "
                  >
                    <v-list-item-title
                      >{{ $t("general.open") }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="
                      $checkIfOrderStatusNotIn(
                        $getOrderStatus(item.status).value,
                        [-1, 2, 3, 4, 5, 6]
                      )
                    "
                    @click="cancelOrder(item.type, item[item.type].id)"
                  >
                    <v-list-item-title
                      >{{ $t("general.cancel") }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- cancel order dialog -->
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card v-if="deleteDialog">
        <v-card-title class="headline">{{ $t("general.delete") }}</v-card-title>
        <v-card-text>
          <div class="mb-2" v-text="$t('order.cancelMsg')"></div>

          <div>
            <v-textarea
              no-resize
              v-model="deleteInfo.reason"
              rows="2"
              rounded
              outlined
              :rules="[(v) => !!v || $requiredRules]"
            ></v-textarea>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="confirmCanelOrder"
            :disabled="!deleteInfo.reason"
          >
            {{ $t("general.sure") }}
          </v-btn>
          <v-btn text @click="deleteDialog = false">
            {{ $t("general.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiDotsVertical } from "@mdi/js";
import { required } from "vuelidate/lib/validators";

export default {
  name: "customerOrders",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "My orders" : "طلباتي",
    };
  },

  data() {
    return {
      icons: {
        mdiDotsVertical,
      },
      items: [],
      deleteDialog: false,
      deleteInfo: {
        type: null,
        id: null,
        reason: "",
      },
      isLoading: false,
    };
  },

  validations: {
    deleteInfo: {
      reason: { required },
    },
  },

  methods: {
    load() {
      this.isLoading = true;
      this.page = 1;
      axios
        .post(`/api/getAuthDetails?atype=1&page=${this.page}`)
        .then((res) => {
            console.log(res);
          this.items = [...this.items, ...res.data.data.order_info];
          this.page += 1;

        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    open(type, id) {
      if (id != null) {
        switch (type) {
          case "consultant_order":
            this.$router.push({ name: "c11", params: { id: id } });
            break;
          case "prevention_maintenance_order":
            this.$router.push({ name: "c12", params: { id: id } });
            break;
          case "maintenance_order":
            this.$router.push({ name: "c5", params: { id: id } });
            break;
          case "installment_order":
            this.$router.push({ name: "c10", params: { id: id } });
            break;

          default:
            break;
        }
      } else {
        this.showErrorMessage(this.$t("general.error"));
      }
    },
    cancelOrder(type, id) {
      this.deleteInfo.id = id;
      this.deleteInfo.type = type;
      this.deleteInfo.reason = "";
      this.deleteDialog = true;
    },
    checkIfUserCancelOrder(item) {
      return item.status !== "order declined by client";
    },
    confirmCanelOrder() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }

      let url;
      switch (this.deleteInfo.type) {
        case "consultant_order":
          url = `/api/ConsultantOrder/${this.deleteInfo.id}`;
          break;
        case "prevention_maintenance_order":
          url = `/api/PreventionMaintenanceOrder/${this.deleteInfo.id}`;
          break;
        case "maintenance_order":
          url = `/api/MaintenanceOrder/${this.deleteInfo.id}`;
          break;
        case "review_order":
          url = `/api/OrderReviewOrder/${this.deleteInfo.id}`;
          break;
        case "installment_order":
          url = `/api/InstallmentOrder/${this.deleteInfo.id}`;
          break;
        default:
          break;
      }

      axios
        .put(url, {
          status: 5,
          reason: this.deleteInfo.reason,
        })
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info",
          });
          this.deleteInfo.id = null;
          this.deleteInfo.type = null;
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          this.deleteDialog = false;
          this.load();
        });
    },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.deleteInfo.reason.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
  },

  created() {
    this.load();
  },
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
</style>
