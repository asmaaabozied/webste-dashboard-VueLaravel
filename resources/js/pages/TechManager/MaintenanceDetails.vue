//tm4
<template>
  <div>
    <v-card>
      <v-card-title>{{ $t("technical.serviceDetails") }}</v-card-title>
      <v-card-text>
        <div>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step :complete="step >= 0" step="0">{{
                $t("general.received")
              }}</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="step >= 1 && step != 4" step="1">{{
                $t("general.processing")
              }}</v-stepper-step>
              <v-divider v-if="step !== 5"></v-divider>
              <v-stepper-step v-if="step !== 5" :complete="step >= 2 && step != 4" step="2">{{
                $t("general.inMaintenece")
              }}</v-stepper-step>
                <v-divider v-if="step !== 5"></v-divider>
              <v-stepper-step v-if="step !== 5" :complete="step >= 3 && step != 4" step="3">{{
                $t("general.ready")
              }}</v-stepper-step>
              <v-divider v-if="step !== 5"></v-divider>
              <v-stepper-step v-if="step !== 5" :complete="step >= 4" step="4">{{
                $t("general.declined")
              }}</v-stepper-step>
              <v-divider v-if="step > 5"></v-divider>
              <v-stepper-step v-if="step >= 5" :complete="step >= 5" step="5">{{
                $t("myRequests.declinedByCustomer")
              }}</v-stepper-step>
                <v-divider v-if="step > 5"></v-divider>
                <v-stepper-step v-if="step >= 6" :complete="step >= 6" step="6">{{
                    $t("myRequests.unfixedDevice")
                    }}</v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
        <br />
        <!-- userInfo -->
        <div v-if="customerInfo">
          <v-row>
            <v-col cols="4">{{ $t("order.customername") }}</v-col>
            <v-col cols="8">{{ customerInfo.name }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ $t("auth.mobile") }}</v-col>
            <v-col cols="8">{{ customerInfo.mobile }}</v-col>
          </v-row>
        </div>
        <!-- appointment  -->
        <v-row>
          <v-col cols="4"> {{ $t("order.appointment") }} </v-col>
          <v-col cols="8">
            <v-card v-if="appointment">
              <v-card-title class="d-flex flex-column justify-center">
                <div>
                  <v-icon class="mx-1">mdi-calendar-blank-outline</v-icon>
                </div>
                <div class="text-body-2" v-text="appointment.date_start"></div>
              </v-card-title>
              <v-card-text>
                <div class="text-body-2">
                  <v-icon class="mx-1">mdi-clock-in </v-icon>
                  {{ appointment.start_time }}
                </div>
                <div class="text-body-2">
                  <v-icon class="mx-1">mdi-clock-out </v-icon>
                  {{ appointment.end_time }}
                </div>
                <div class="text-body-2">
                  <v-icon class="mx-1">mdi-office-building-marker</v-icon>
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
        <!-- order info -->
        <v-row>
          <v-col cols="4">{{ $t("general.type") }}</v-col>
          <v-col cols="8">{{
            order.warranty_type == "with warranty"
              ? $t("request.maintenancewWarranty")
              : $t("request.maintenancenWarranty")
          }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("order.deviceType") }}</v-col>
          <v-col cols="8">{{
            order.device_type == "conditioner"
              ? $t("general.conditioner")
              : $t("general.electric")
          }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("general.description") }}</v-col>
          <v-col cols="8">{{ order.description }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("order.manufactureName") }}</v-col>
          <v-col cols="8">{{ order.manufacture }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("general.image") }}</v-col>
          <v-col cols="8">
            <previewer :images="images" width="100%" :height="200" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("general.warranty") }}</v-col>
          <v-col cols="8">
            <previewer :src="order.warranty_image" width="100%" :height="200" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">{{ $t("general.location") }}</v-col>
          <v-col cols="8">
            <v-card>
              <v-card-text>
                <div class="map">
                  <GmapMap
                    :center="mapCenter"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%"
                  >
                    <GmapMarker :position="location" />
                  </GmapMap>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- fees -->
        <div v-if="order.warranty_type == 'without warranty'">
          <h4>{{ $t("general.fees") }}</h4>
          <v-row>
            <v-col cols="2" class="d-flex align-center">{{
              $t("general.newFee")
            }}</v-col>
            <v-col cols="2">
              <v-select
                :label="$t('general.feeType')"
                item-text="name"
                item-value="id"
                v-model="feeType"
                :items="feesItems"
              ></v-select>
            </v-col>
            <v-col cols="2">
              <v-text-field
                :label="$t('general.value')"
                type="Number"
                min="0"
                v-model="feeValue"
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center">
              <v-btn rounded @click="addFee">
                <v-icon>{{ icons.mdiPlusCircleOutline }}</v-icon>
                {{ $t("general.add") }}
              </v-btn>
            </v-col>
          </v-row>
          <v-card outlined>
            <v-simple-table dense fixed-header>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">{{ $t("general.feeType") }}</th>
                    <th class="text-center">{{ $t("general.description") }}</th>
                    <th class="text-center">{{ $t("general.fee") }}</th>
                    <th class="text-center">{{ $t("general.date") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in fees" :key="i">
                    <td class="text-center">{{ item.id }}</td>
                    <td class="text-center">
                      {{
                        $i18n.locale == "en"
                          ? item.fees[0].name
                          : item.fees[0].name_ar
                      }}
                    </td>
                    <td class="text-center">
                      {{
                        $i18n.locale == "en"
                          ? item.fees[0].description
                          : item.fees[0].description_ar
                      }}
                    </td>
                    <td class="text-center">{{ item.amount }}</td>
                    <td class="text-center">
                      {{ formatDate(item.created_at) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </div>
        <br />
      </v-card-text>
      <!-- actions -->
      <v-card-actions class="d-flex justify-center">
        <!-- <v-btn
          color="primary"
          class="mx-2"
          @click="addSpare(id)"
          v-if="order.order_info.status !== 'order finish'"
        >{{ $t('general.addSpare') }}</v-btn> -->
        <v-btn
          color="primary"
          class="mx-2"
          @click="assignTech"
          v-if="$checkIfOrderStatusNotIn($getOrderStatus(order.order_info.status).value , [3,4,5 ,6])"
          >{{ $t("technical.assignTech") }}</v-btn
        >
<!--        <v-btn-->
<!--          color="primary"-->
<!--          class="mx-2"-->
<!--          @click="finishDialog = true"-->
<!--          v-if="$checkIfOrderStatusNotIn($getOrderStatus(order.order_info.status).value , [-1,3,4,5 ,6])"-->
<!--          >{{ $t("general.finishOrder") }}</v-btn-->
<!--        >-->
      </v-card-actions>
    </v-card>
    <!-- finish dialog -->
<!--    <v-dialog v-model="finishDialog" max-width="290">-->
<!--      <v-card>-->
<!--        <v-card-title class="headline">{{-->
<!--          $t("general.finishOrder")-->
<!--        }}</v-card-title>-->
<!--        <v-card-text>{{ $t("general.isSure") }}</v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-btn text @click="confirmFinishItem">{{-->
<!--            $t("general.sure")-->
<!--          }}</v-btn>-->
<!--          <v-btn text @click="finishDialog = false">{{-->
<!--            $t("general.close")-->
<!--          }}</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-dialog>-->
  </div>
</template>
<script>
import previewer from "./../../components/imagePreview";

export default {
  name: "maintenanceDetils",

  components: {
    previewer,
  },

  data() {
    return {
      icons: {},
      id: this.$route.params.id,
      type: this.$route.params.type,
      step: 1,
      items: [],
      feesItems: [],
      feeType: null,
      feeValue: null,
      fees: [],
      order: {
        order_info: {},
      },
      finishDialog: false,
      mapCenter: { lat: 24.774265, lng: 46.738586 },
      location: null,
      images: [],
      appointment: null,
      customerInfo: null,
    };
  },

  created() {
    this.load();
  },

  methods: {
    addFee() {
      let form = new FormData();
      form.append(`maintenance_order_id`, this.id);
      form.append(`fee_id`, this.feeType);
      form.append(`fee_amount`, this.feeValue);
      axios
        .post(`/api/managerCheckUpFee`, form)
        .then((res) => {
          this.getOrder();
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    addSpare(id) {
      this.$router.push({ name: "tm7", params: { id: id } });
    },
    assignTech() {
      this.$router.push({
        name: "tm5",
        params: {
          orderId: this.order.id,
          id: this.order.order_id,
          type: this.type,
        },
      });
    },
    confirmFinishItem() {
      axios
        .put(`/api/MaintenanceOrder/${this.id}`, { status: 3 })
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info",
          });
          this.load();
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          this.finishDialog = false;
        });
    },
    load() {
      this.getOrder();
      axios.get("/api/fee").then(({ data }) => {
        this.feesItems = data.data;
      });
    },
    getOrder() {
      let type = this.type;
      axios
        .get(`/api/${this.$getOrderTypeAPI(type)}/${this.id}`)
        .then(({ data }) => {
          this.appointment = data.data.appointment;
          this.order = data.data;
          this.location = {
            lat: parseFloat(this.order.lat),
            lng: parseFloat(this.order.lon),
          };
          this.mapCenter = this.location;
          this.fees = data.data.fee_info;
          this.step = this.$getOrderStatus(data.data.order_info.status).value;
          if (this.order.images)
            this.order.images.forEach((element) => {
              this.images.push(element.image);
            });
          this.customerInfo = {
            name: data.data.order_info.user_info.customer.name,
            mobile: data.data.order_info.user_info.customer.phone,
          };
        })
        .catch((err) => {
          console.log(err);
          console.warn(err)
        });
    },
  },
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 400px;
  background-color: gray;
}
</style>
