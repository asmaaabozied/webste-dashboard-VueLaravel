<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" xl="4">
        <v-card>
          <v-card-title
            primary-title
            v-text="$t('technical.GenerateNewAppointments')"
          >
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <v-select
                  :items="branches"
                  v-model="branch"
                  :label="$t('general.branch')"
                  outlined
                  dense
                  rounded
                  :item-text="$i18n.locale ? 'name' : 'name_en'"
                  item-value="id"
                  :error-messages="branchErrors"
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <div
                  class="text-body-1 black--text mb-2"
                  v-text="$t('technical.serviceDuration')"
                ></div>
                <v-text-field
                  type="number"
                  min="0"
                  v-model="duration"
                  :error-messages="durationErrors"
                  dense
                  rounded
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <v-menu
                  v-model="sDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="sDate"
                      :label="$t('general.sDate')"
                      prepend-icon="mdi-calendar"
                      :error-messages="sDateErrors"
                      readonly
                      rounded
                      outlined
                      dense
                      v-on="on"
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="sDate"
                    @input="sDateMenu = false"
                    :locale="$i18n.locale"
                    color="blue"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  v-model="eDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="eDate"
                      :label="$t('general.eDate')"
                      prepend-icon="mdi-calendar"
                      :error-messages="eDateErrors"
                      readonly
                      rounded
                      outlined
                      dense
                      v-on="on"
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="eDate"
                    @input="eDateMenu = false"
                    :locale="$i18n.locale"
                    color="blue"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <v-menu
                  ref="sTimeMenu"
                  v-model="sTimeMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="sTime"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="sTime"
                      :label="$t('general.sTime')"
                      prepend-icon="mdi-timelapse"
                      :error-messages="sTimeErrors"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      clearable
                      dense
                      rounded
                      outlined
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="sTimeMenu"
                    color="blue"
                    v-model="sTime"
                    full-width
                    @click:minute="$refs.sTimeMenu.save(sTime)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  ref="eTimeMenu"
                  v-model="eTimeMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="eTime"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="eTime"
                      :label="$t('general.eTime')"
                      prepend-icon="mdi-timelapse"
                      :error-messages="eTimeErrors"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      clearable
                      dense
                      rounded
                      outlined
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="eTimeMenu"
                    color="blue"
                    v-model="eTime"
                    full-width
                    @click:minute="$refs.eTimeMenu.save(eTime)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              rounded
              color="success"
              @click="generate"
              v-text="$t('technical.generate')"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
import { required } from "vuelidate/lib/validators";
const isTimeAfter = (value, vm) => {
  let format = "hh:mm";

  let sTime = moment(vm.sTime, format);
  let eTime = moment(vm.eTime, format);
  return eTime.isAfter(sTime);
};
const isAfterDate = (value, vm) => {
  return new Date(value).getTime() > new Date(vm.sDate).getTime();
};
const biggerThanZero = (value, vm) => {
  return value > 0;
};

export default {
  name: "generate-appointments",
  
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Appointments generate" : "توليد المواعيد",
    };
  },

  data() {
    return {
      branches: [],
      branch: null,
      sDateMenu: false,
      sDate: null,
      eDateMenu: false,
      eDate: null,
      sTime: null,
      eTime: null,
      sTimeMenu: false,
      eTimeMenu: false,
      duration: 0,
    };
  },

  validations: {
    branch: { required },
    duration: { required, biggerThanZero },
    sDate: { required },
    eDate: { required, isAfterDate },
    sTime: { required },
    eTime: { required, isTimeAfter },
  },

  methods: {
    generate() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "error",
        });
        return;
      }

      let form = new FormData();
      form.append("start_time", this.sTime);
      form.append("end_time", this.eTime);
      form.append("duration", this.duration);
      form.append("date_start", this.sDate);
      form.append("date_end", this.eDate);
      form.append("branch_id", this.branch);

      axios
        .post("/api/appointment", form)
        .then(() => this.$router.push({ name: "sa13" }))
        .catch((err) => {
          this.$notify({
            text: err.data.message,
            type: "error",
          });
        });
    },
    load() {
      axios
        .get(`/api/branch`)
        .then((res) => {
          this.branches = res.data.data;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
  },

  computed: {
    branchErrors() {
      const errors = [];
      if (!this.$v.branch.$dirty) return errors;
      !this.$v.branch.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    durationErrors() {
      const errors = [];
      if (!this.$v.duration.$dirty) return errors;
      !this.$v.duration.required && errors.push(this.$t("validate.required"));
      !this.$v.duration.biggerThanZero &&
        errors.push(this.$t("validate.biggerThanZero"));
      return errors;
    },
    sDateErrors() {
      const errors = [];
      if (!this.$v.sDate.$dirty) return errors;
      !this.$v.sDate.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    eDateErrors() {
      const errors = [];
      if (!this.$v.eDate.$dirty) return errors;
      !this.$v.eDate.required && errors.push(this.$t("validate.required"));
      !this.$v.eDate.isAfterDate && errors.push(this.$t("validate.dateAfter"));
      return errors;
    },
    sTimeErrors() {
      const errors = [];
      if (!this.$v.sTime.$dirty) return errors;
      !this.$v.sTime.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    eTimeErrors() {
      const errors = [];
      if (!this.$v.eTime.$dirty) return errors;
      !this.$v.eTime.required && errors.push(this.$t("validate.required"));
      !this.$v.eTime.isTimeAfter && errors.push(this.$t("validate.timeAfter"));

      return errors;
    },
  },

  created() {
    this.load();
  },
};
</script>

<style></style>
