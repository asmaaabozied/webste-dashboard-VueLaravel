<template>
  <v-card>
    <v-card-title>{{$t('admin.sparePart')}}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="code"
            :error-messages="codeErrors"
            :label="$t('general.code')"
            required
            outlined
            rounded
            dense
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :label="$t('general.name')"
            required
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
            :label="$t('general.name') + ' En'"
            required
            outlined
            rounded
            dense
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="productionCompany"
            :error-messages="productionCompanyErrors"
            :label="$t('general.productionCompany')"
            required
            outlined
            dense
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="price"
            type="number"
            min="0"
            :error-messages="priceErrors"
            :label="$t('general.price')"
            required
            outlined
            rounded
            dense
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            :hint="$t('general.sar')"
            persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn rounded class="mx-1" color="primary"  @click="save">{{$t('general.save')}}</v-btn>
      <v-btn rounded class="mx-1" @click="$emit('close')">{{$t('general.cancel')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import {} from "@mdi/js";

export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      code: null,
      name: null,
      nameEn: null,
      productionCompany: null,
      price: null,
      icons: {}
    };
  },
  validations: {
    code: {
      required
    },
    name: {
      required
    },
    nameEn: {
      required
    },
    productionCompany: {
      required
    },
    price: {
      required
    }
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }
      if (this.id == 0)
        axios
          .post(`/api/sparePart`, {
            name: this.nameEn,
            name_ar: this.name,
            manufacturer: this.productionCompany,
            code: this.code,
            price: this.price
          })
          .then(res => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success"
            });
            this.$emit("close");
          })
          .catch(err => {
            console.warn(err)
          });
      else if (this.id > 0)
        axios
          .put(`/api/sparePart/${this.id}`, {
            name: this.nameEn,
            name_ar: this.name,
            manufacturer: this.productionCompany,
            code: this.code,
            price: this.price
          })
          .then(res => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success"
            });
            this.$emit("close");
          })
          .catch(err => {
            console.warn(err)
          });
    },
    load() {
      axios
        .get(`/api/sparePart/${this.id}`)
        .then(res => {
          this.code = res.data.data.code;
          this.name = res.data.data.name_ar;
          this.nameEn = res.data.data.name;
          this.productionCompany = res.data.data.manufacturer;
          this.price = res.data.data.price;
        })
        .catch(err => {
           console.warn(err)
        });
    },
    createNew() {
      this.code = null;
      this.name = null;
      this.nameEn = null;
      this.productionCompany = null;
      this.price = null;
      this.$v.$reset();
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(val, oldVal) {
        if (val > 0) this.load();
        else if (val == 0) this.createNew();
      }
    }
  },
  computed: {
    codeErrors() {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors() {
      const errors = [];
      if (!this.$v.nameEn.$dirty) return errors;
      !this.$v.nameEn.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    productionCompanyErrors() {
      const errors = [];
      if (!this.$v.productionCompany.$dirty) return errors;
      !this.$v.productionCompany.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  }
};
</script>
<style scoped>
</style>