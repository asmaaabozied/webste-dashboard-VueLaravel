<template>
  <div class="d-flex justify-center">
    <v-card width="90%">
      <v-card-title>{{ $t("general.orderDetails") }}</v-card-title>
      <v-card-text>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step >= 0" step="1"
              >{{ $t("general.received") }}
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step v-if="step !== 5" :complete="step >= 1" step="2"
              >{{ $t("general.processing") }}
            </v-stepper-step>
            <v-divider v-if="step !== 5"></v-divider>
            <v-stepper-step v-if="step !== 5" :complete="step >= 2" step="3"
              >{{ $t("general.inMaintenece") }}
            </v-stepper-step>
            <v-divider v-if="step !== 5"></v-divider>
            <v-stepper-step v-if="step !== 5" :complete="step >= 3" step="3"
              >{{ $t("general.ready") }}
            </v-stepper-step>
            <v-divider v-if="step > 4"></v-divider>
            <v-stepper-step v-if="step > 4" :complete="step >= 4" step="4"
              >{{ $t("myRequests.declined") }}
            </v-stepper-step>
            <v-divider v-if="step > 5"></v-divider>
            <v-stepper-step v-if="step >= 5" :complete="step >= 5" step="5"
              >{{ $t("myRequests.declinedByCustomer") }}
            </v-stepper-step>
            <v-divider v-if="step > 5"></v-divider>
            <v-stepper-step v-if="step > 5" :complete="step >= 6" step="5"
              >{{ $t("myRequests.unfixedDevice") }}
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <!-- appointment -->
        <v-row v-if="appointment" style="margin: 10px 0">
          <v-col cols="4"> {{ $t("order.appointment") }}</v-col>
          <v-col cols="8" md="4">
            <v-card v-if="appointment">
              <v-card-title class="d-flex flex-column justify-center">
                <div>
                  <v-icon class="mx-1">mdi-calendar-blank-outline</v-icon>
                </div>
                <div class="text-body-2" v-text="appointment.date_start"></div>
              </v-card-title>
              <v-card-text>
                <div class="text-body-2">
                  <v-icon class="mx-1">mdi-clock-in</v-icon>
                  {{ appointment.start_time }}
                </div>
                <div class="text-body-2">
                  <v-icon class="mx-1">mdi-clock-in</v-icon>
                  {{ appointment.end_time }}
                </div>
                <div class="text-body-2">
                  <v-icon class="mx-1"> mdi-office-building-marker</v-icon>
                  {{
                    $i18n.locale == "en"
                      ? appointment.branch.name
                      : appointment.branch.name_ar
                  }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!--  -->
        <v-row class="my-1">
          <v-col md="8" lg="8" xl="8">
            <h3></h3>
          </v-col>
          <v-col md="4" lg="4" xl="4">
            <!-- <v-btn
              v-if="
                warranty_type == 'with warranty' &&
                  $checkIfOrderStatusNotIn($getOrderStatus(status).value, [
                    -1,
                    3,
                    4,
                    5,
                    6,
                  ])
              "
              @click="changeWarrntyDialog = true"
              >{{ $t("myRequests.changeOrder") }}
            </v-btn>  -->
          </v-col>
        </v-row>
        <v-row v-if="step == 4">
          <v-col cols="8">
            <h3>{{ $t("request.leaveRate") }}</h3>
          </v-col>
          <v-col cols="4">
            <div class="text-center">
              <div>{{ $t("request.ServiceQualityRating") }}</div>
              <v-rating
                :full-icon="icons.mdiStar"
                :empty-icon="icons.mdiStarOutline"
                v-model="ServiceQualityRating"
                color="yellow darken-3"
                background-color="grey darken-1"
                large
              ></v-rating>
              <div>{{ $t("request.EmployeeRating") }}</div>
              <v-rating
                :full-icon="icons.mdiStar"
                :empty-icon="icons.mdiStarOutline"
                v-model="EmployeeRating"
                color="yellow darken-3"
                background-color="grey darken-1"
                large
              ></v-rating>
              <div>{{ $t("request.ServicePriceRating") }}</div>
              <v-rating
                :full-icon="icons.mdiStar"
                :empty-icon="icons.mdiStarOutline"
                v-model="ServicePriceRating"
                color="yellow darken-3"
                background-color="grey darken-1"
                large
              ></v-rating>
              <div>{{ $t("request.ServiceSpeedRating") }}</div>
              <v-rating
                :full-icon="icons.mdiStar"
                :empty-icon="icons.mdiStarOutline"
                v-model="ServiceSpeedRating"
                color="yellow darken-3"
                background-color="grey darken-1"
                large
              ></v-rating>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="step == 4">
          <v-col cols="8">
            <h3>{{ $t("request.comment") }}</h3>
          </v-col>
          <v-col cols="4" class="d-flex flex-column align-center">
            <v-textarea v-model="comment" outlined rounded></v-textarea>
            <v-btn color="yellow darken-3" rounded @click="postRating"
              >{{ $t("general.confirm") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          :to="{ name: 'c19', params: { type: 'order' } }"
          rounded
          color="primary"
          >{{ $t("request.orderPayments") }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- change to without warranty confirm -->
    <v-dialog v-model="changeWarrntyDialog" max-width="290">
      <v-card>
        <v-card-title>{{ $t("myRequests.changeOrder") }}</v-card-title>
        <v-card-text>{{ $t("general.isSure") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmChangeWithoutWarranty"
            >{{ $t("general.sure") }}
          </v-btn>
          <v-btn text @click="changeWarrntyDialog = false"
            >{{ $t("general.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiStar, mdiStarOutline } from "@mdi/js";

export default {
  name: "orderDetails",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Order details" : "تفاصيل طلب",
    };
  },

  props: {
    isMaintenance: Boolean,
    isFromNotification: Boolean,
  },

  data() {
    return {
      icons: {
        mdiStar,
        mdiStarOutline,
      },
      id: this.$route.params.id,
      step: null,
      changeToWithoutWarranty: null,
      notifications: [],
      comment: null,
      status: "",
      ServiceQualityRating: null,
      EmployeeRating: null,
      ServicePriceRating: null,
      ServiceSpeedRating: null,
      changeWarrntyDialog: false,
      warranty_type: null,
      appointment: null,
    };
  },
  methods: {
    postRating() {
      axios
        .post(`/api/rating`, {
          order_id: this.id,
          service_quality_rating: this.ServiceQualityRating,
          employee_rating: this.EmployeeRating,
          service_price_rating: this.ServicePriceRating,
          service_speed_rating: this.ServiceSpeedRating,
          comment: this.comment,
        })
        .then((res) => {})
        .catch((err) => {
          console.warn(err);
        });
    },
    async load() {
      if (this.isFromNotification) {
        await axios
          .get(`/api/order/${this.id}`)
          .then((res) => {
            console.log(res);
            this.id = res.data.data.id;
          })
          .catch((err) => {
            console.warn(err);
          });
      }
      let url = this.isMaintenance
        ? `/api/MaintenanceOrder/${this.id}`
        : `/api/InstallmentOrder/${this.id}`;
      axios
        .get(url)
        .then((res) => {
          this.status = res.data.data.order_info.status;
          this.step = this.$getOrderStatus(this.status).value;
          if (this.isMaintenance) {
            this.warranty_type = res.data.data.warranty_type;
            this.appointment = res.data.data.appointment;
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    confirmChangeWithoutWarranty() {
      axios
        .post(`/api/changeOrderToWithoutWarranty/${this.id}`)
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info",
          });
          this.changeWarrntyDialog = false;
          this.load();
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.load();
    });
  },
};
</script>

<style></style>
