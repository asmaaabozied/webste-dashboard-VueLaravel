<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("general.manufacturer") }}</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="6">
            <v-text-field
              v-model="nameAr"
              :error-messages="nameArErrors"
              :label="$t('order.name')"
              outlined
              rounded
              dense
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="nameEn"
              :error-messages="nameEnErrors"
              :label="$t('order.name') + 'En'"
              outlined
              rounded
              dense
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>


        </v-row>


            <h2 class="pull-left" style="font-size:35px; margin-bottom:40px">Devices</h2>

          <v-simple-table dense fixed-header>
              <template v-slot:default>
                  <thead>
                  <tr>
                      <th>Device Name</th>
                      <th>Related To Mainfucture</th>
                      <th>Is Active</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="device in devices">
                      <td>{{ device.name_en }}</td>

                      <td>
                          <input
                                  class="form-check-input"
                                  type="checkbox"
                                  :id="device.id"
                                  v-bind:value="device.id"
                                  v-model="devicesIds"
                          >
                      </td>

                      <td>
                          <input
                                  class="form-check-input"
                                  type="checkbox"
                                  v-bind:value="device.id"
                                  v-model="devicesIdsActive"
                          >
                      </td>
                  </tr>
                  </tbody>
              </template>
          </v-simple-table>



      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="save" rounded>{{ $t("general.save") }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import {} from "@mdi/js";

export default {
  name: "manufacture",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "manufacturer" : "المصانع",
    };
  },

  data() {
      return {
          icons: {},
          id: this.$route.params.id,
          nameAr: null,
          nameEn: null,
          devicesIds: [],
          devicesIdsActive: [],
          devices: [],
    };
  },
  validations: {
    nameAr: {
      required,
    },
    nameEn: {
      required,
    },
  },
  computed: {
    nameArErrors() {
      const errors = [];
      if (!this.$v.nameAr.$dirty) return errors;
      !this.$v.nameAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors() {
      const errors = [];
      if (!this.$v.nameEn.$dirty) return errors;
      !this.$v.nameEn.required && errors.push(this.$t("validate.required"));
      return errors;
    },
  },
  methods: {

      save() {
          this.$v.$touch();
          if (this.$v.$invalid) return;


          let form = new FormData();
          form.append("name_ar", this.nameAr);
          form.append("name_en", this.nameEn);
          form.append('devicesIds', this.devicesIds);
          form.append("deviceIdsActive",this.devicesIdsActive);


          if (this.id > 0) form.append(`_method`, "put");

          if (this.id == 0)
              axios
                  .post(`/api/manufacture`, form)
                  .then((res) => {
                      this.$notify({
                          text: this.$t("general.success"),
                          type: "success",
                      });
                      this.$router.go(-1);
                  })
                  .catch((err) => {
                      console.warn(err);
                  });
          else if (this.id > 0)
              axios
                  .post(`/api/manufacture/${this.id}`, form)
                  .then((res) => {
                      if (res.data.status != 200) {
                          console.warn(err);
                          return;
                      }
                      this.$notify({
                          text: this.$t("general.success"),
                          type: "success",
                      });
                      this.$router.go(-1);
                  })
                  .catch((err) => {
                      console.warn(err);
                  });
      },
      load() {
          axios
              .get(`/api/manufacture/${this.id}`)
              .then((res) => {
                  console.log(res);
                  let data        = res.data.data;
                  this.nameAr     = data.manufacture.name_ar;
                  this.nameEn     = data.manufacture.name_en;
                  this.devicesIds = data.devicesIds;
                  this.devicesIdsActive = data.devicesIdsActive;

              })
              .catch((err) => {
                  console.warn(err);
              });
      },
      createNew() {
          this.nameAr     = null;
          this.nameEn     = null;
          this.devicesIds = [];
          this.$v.$reset();
      },
      getAllDevices() {
          axios
              .get(`/api/admin-panel/devices/getAlldevices`)
              .then((res) => {
                  this.devices = res.data.data.resource.data;
              })
              .catch((err) => {
                  console.warn(err);
              });
      }
  },
  watch: {
    id: {
      immediate: true,
      handler(val, oldVal) {

          //get all devices Details
          this.getAllDevices();

        if (val > 0) this.load();
        else if (val == 0) this.createNew();

      },
    },
  },
};
</script>

<style scoped></style>
