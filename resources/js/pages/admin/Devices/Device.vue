<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("admin.devices") }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="name_ar"
              :label="$t('service.name_ar')"
              required
              outlined
              rounded
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="name_en"

              :label="$t('service.name_en')"
              required
              outlined
              rounded
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center">
              <v-btn rounded class="mx-1" color="primary" @click="save">{{
                $t("general.save")
              }}</v-btn>
              <v-btn rounded class="mx-1" @click="$router.go(-1)">{{
                $t("general.cancel")
              }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "devices",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "device" : "device",
    };
  },

  data() {
    return {
      id: this.$route.params.id,
      name_ar: null,
      name_en: null,
      icons: {},
    };
  },
  validations: {
    name_ar: {
      required,
    },
    name_en: {
      required,
    },
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }

        let url  = `/api/admin-panel/devices/createUpdate`;
        let data = {
            name_ar: this.name_ar,
            name_en: this.name_en,
        };

        if (this.id != 0) {
            data["id"] = this.id;
        }

        axios
            .post(url, data)
            .then((res) => {
                this.$notify({
                    text: this.$t("general.success"),
                    type: "success",
                });
                this.$router.push({name: "devices"});
            })
            .catch((err) => {
                console.warn(err)
        });


    },
    load() {
      axios
        .get(`/api/admin-panel/devices/getData/${this.id}`)
        .then((res) => {
          this.name_ar = res.data.data.resource.name_ar;
          this.name_en = res.data.data.resource.name_en;
        })
        .catch((err) => {
           console.warn(err)
        });
    },
    createNew() {
      this.name_ar = null;
      this.name_en = null;
      this.$v.$reset();
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(val, oldVal) {
        if (val > 0) this.load();
        else if (val == 0) this.createNew();
      },
    },
  },
  computed: {
    name_ar_errors() {
      const errors = [];
      if (!this.$v.type.$dirty) return errors;
      !this.$v.type.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    name_en_errors() {
      const errors = [];
      if (!this.$v.no.$dirty) return errors;
      !this.$v.no.required && errors.push(this.$t("validate.required"));
      return errors;
    },
  },
};
</script>
<style scoped></style>
