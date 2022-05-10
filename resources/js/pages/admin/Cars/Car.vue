<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("admin.car") }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="type"
              :error-messages="typeErrors"
              :label="$t('general.type')"
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
              v-model="no"
              :error-messages="noErrors"
              :label="$t('admin.boardNo')"
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
  name: "car",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Car" : "سيارة",
    };
  },

  data() {
    return {
      id: this.$route.params.id,
      type: null,
      no: null,
      icons: {},
    };
  },
  validations: {
    type: {
      required,
    },
    no: {
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
      if (this.id == 0)
        axios
          .post(`/api/cars`, {
            car_kind: this.type,
            palette_number: this.no,
          })
          .then((res) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
            this.$router.push({ name: "sa9-1" });
          })
          .catch((err) => {
           console.warn(err)
          });
      else if (this.id > 0)
        axios
          .put(`/api/cars/${this.id}`, {
            car_kind: this.type,
            palette_number: this.no,
          })
          .then((res) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
            this.$router.push({ name: "sa9-1" });
          })
          .catch((err) => {
           console.warn(err)
          });
    },
    load() {
      axios
        .get(`/api/cars/${this.id}`)
        .then((res) => {
          this.type = res.data.data.car_kind;
          this.no = res.data.data.palette_number;
        })
        .catch((err) => {
           console.warn(err)
        });
    },
    createNew() {
      this.type = null;
      this.no = null;
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
    typeErrors() {
      const errors = [];
      if (!this.$v.type.$dirty) return errors;
      !this.$v.type.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    noErrors() {
      const errors = [];
      if (!this.$v.no.$dirty) return errors;
      !this.$v.no.required && errors.push(this.$t("validate.required"));
      return errors;
    },
  },
};
</script>
<style scoped></style>
