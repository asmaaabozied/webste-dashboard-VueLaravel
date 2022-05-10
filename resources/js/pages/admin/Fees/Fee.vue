<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{$t('general.fee')}}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
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
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="description "
              :error-messages="descriptionErrors"
              :label="$t('general.description')"
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
              v-model="descriptionEn"
              :error-messages="descriptionEnErrors"
              :label="$t('general.description') + 'En'"
              outlined
              rounded
              dense
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="save" rounded>{{$t('general.save')}}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import {} from "@mdi/js";

export default {
  name: "fee",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Fee" : "رسم",
    };
  },

  data() {
    return {
      icons: {},
      id: this.$route.params.id,
      name: null,
      nameEn: null,
      description: null,
      descriptionEn: null
    };
  },
  validations: {
    name: {
      required
    },
    nameEn: {
      required
    },
    description: {
      required
    },
    descriptionEn: {
      required
    }
  },
  computed: {
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
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionEnErrors() {
      const errors = [];
      if (!this.$v.descriptionEn.$dirty) return errors;
      !this.$v.descriptionEn.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    }
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      let form = new FormData();
      form.append("name_ar", this.name);
      form.append("name", this.nameEn);
      form.append("description_ar", this.description);
      form.append("description", this.descriptionEn);
      
      if (this.id > 0) form.append(`_method`, "put");

      if (this.id == 0)
        axios
          .post(`/api/fee`, form)
          .then(res => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success"
            });
            this.$router.go(-1)
          })
          .catch(err => {
            console.warn(err)
          });
      else if (this.id > 0)
        axios
          .post(`/api/fee/${this.id}`, form)
          .then(res => {
            if (res.data.status != 200) {
           console.warn(err)
              return;
            }
            this.$notify({
              text: this.$t("general.success"),
              type: "success"
            });
              this.$router.go(-1)
          })
          .catch(err => {
            console.warn(err)
          });
    },
    load() {
      axios
        .get(`/api/fee/${this.id}`)
        .then(res => {
          let data = res.data.data;
          this.name = data.name_ar;
          this.nameEn = data.name;
          this.description = data.description_ar;
          this.descriptionEn = data.description;
      })
        .catch(err =>{
           console.warn(err)
        });
    },
    createNew() {
      this.name = null;
      this.nameEn = null;
      this.description = null;
      this.descriptionEn = null;

      this.name_ar = null;
      this.description_ar = null;

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
  }
};
</script>

<style scoped>
</style>
