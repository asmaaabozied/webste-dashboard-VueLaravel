<template>
  <div>
    <div class="b-section m-5">
      <h5
        class="pt-3 m-0"
        style="padding: 0 40px;"
        :class="{ 'text-right': $vuetify.rtl }"
      >
        {{ $t("transactions.transactions") }}
      </h5>
      <v-simple-table class="table-striped">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t("general.amount") }}</th>
              <th class="text-center">{{ $t("general.type") }}</th>
              <th class="text-center">{{ $t("general.date") }}</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="transaction in transactions"
              :key="transaction.id"
              v-if="transactions.length > 0"
            >
              <td
                class="text-center"
                :class="transaction.amount < 0 ? 'red--text' : 'green--text'"
              >
                {{ Math.abs(transaction.amount) }}
              </td>
              <td class="text-center">{{ getTransactionType(transaction) }}</td>
              <td class="text-center">
                {{ formatDate(transaction.created_at) }}
              </td>
              <td class="text-center">
                <v-btn
                  color="primary"
                  rounded
                  small
                  @click="showDialog(transaction)"
                >
                  {{ $t("transactions.viewDetails") }}
                </v-btn>
                <v-btn
                  v-if="!transaction['is_payed_transaction']"
                  color="primary"
                  rounded
                  small
                  @click="showPayDialogMethod(transaction)"
                  >{{ $t("transactions.payForTransaction") }}
                </v-btn>
              </td>
            </tr>
            <tr v-if="transactions.length == 0">
              <td class="text-center">{{ $t("general.noData") }}</td>
              <td class="text-center">{{ $t("general.noData") }}</td>
              <td class="text-center">{{ $t("general.noData") }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <transactions-info-dialog
      v-if="viewTransactionDialog"
      @close="viewTransactionDialog = false"
      :viewTransactionDialog="viewTransactionDialog"
      :transactionInfo="transactionsShown"
    ></transactions-info-dialog>
    <pay-dialog
      v-if="showPayDialog"
      @close="showPayDialog = false"
      :transactionsForPay="transactionsForPay"
      :showPayDialog="showPayDialog"
    ></pay-dialog>
  </div>
</template>

<script>
import TransactionsInfoDialog from "./TransactionsInfoDialog";
import PayDialog from "./PayDialog";

export default {
  name: "transactions",
  components: { PayDialog, TransactionsInfoDialog },
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "My transactions" : "مناقلاتي",
    };
  },
  data() {
    return {
      transactions: [],
      transactionsShown: null,

      transactionsForPay: {},

      viewTransactionDialog: false,
      showPayDialog: false,
    };
  },

  methods: {
    getTransactionType(item) {
      if (item["maintenance_order_info"] != null || item["Installment_order_id"] != null) {
        if (item.maintenance_order_info.order_info.type == 'installment_order')
            return this.$i18n.locale == "en" ? "installment order" : "طلب تركيب";
        else
            return this.$i18n.locale == "en" ? "maintenance order" : "طلب صيانة";
      }
      return this.$i18n.locale == "en" ? "product" : "منتج";
    },
    showDialog(transaction) {
      this.transactionsShown = transaction;
      this.viewTransactionDialog = true;
    },
    showPayDialogMethod(transaction) {
      this.transactionsForPay = transaction;
      this.showPayDialog = true;
    },
    loadAllTransactions() {
      axios
        .get("/api/transaction")
        .then(({ data }) => {
          if (this.$route.params.type) {
            this.transactions = data.data.filter(
              (item) => item["maintenance_order_info"] != null
            );
          } else {
            this.transactions = data.data;
          }
        })
        .catch((error) => this.showErrorMessage(error.response.data.message));
    },
  },
  created() {
    this.loadAllTransactions();
  },
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}

tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
