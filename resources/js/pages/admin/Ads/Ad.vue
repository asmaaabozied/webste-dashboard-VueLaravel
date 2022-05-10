<template>
  <v-card>
    <v-card-title>{{ $t("admin.ad") }}</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="itemDialog = false">
        <v-icon>{{ icons.mdiClose }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="mainTitle"
            :error-messages="mainTitleErrors"
            :label="$t('general.mainTitle') + ' En'"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="mainTitleAr"
            :error-messages="mainTitleErrorsAr"
            :label="$t('general.mainTitle')"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="subTitle"
            :error-messages="subTitleErrors"
            :label="$t('general.subTitle') + ' En'"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="subTitleAr"
            :error-messages="subTitleErrorsAr"
            :label="$t('general.subTitle')"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="description"
            :error-messages="descriptionErrors"
            :label="$t('general.description') + ' En'"
            outlined
            rounded
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="descriptionAr"
            :error-messages="descriptionErrorsAr"
            :label="$t('general.description')"
            outlined
            rounded
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="price"
            :label="$t('general.price')"
            type="number"
            min="0"
            :error-messages="priceErrors"
            outlined
            rounded
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
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
                :error-messages="sDateErrors"
                :prepend-icon="icons.mdiCalendar"
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
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
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
                :error-messages="eDateErrors"
                :prepend-icon="icons.mdiCalendar"
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
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-alert type="info">{{ $t("admin.adSize") }}</v-alert>
        <v-col cols="12">
          <v-file-input
            :error-messages="imageErrors"
            v-model="image"
            accept="image/*"
            :label="$t('general.image')"
            outlined
            dense
            rounded
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-switch
            class="mx-2"
            color="blue"
            :label="$t('general.active')"
            v-model="isEnabled"
          ></v-switch>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn rounded color="primary" dark @click="save">{{
        $t("general.save")
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  required,
  sameAs,
  requiredUnless,
  minValue,
  helpers,
} from "vuelidate/lib/validators";
import { mdiCalendar } from "@mdi/js";
import moment from "moment";
const isAfterDate = (value, vm) => {
  return new Date(value).getTime() > new Date(vm.sDate).getTime();
};

export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },

  // metaInfo() {
  //   const locale = this.$i18n.locale;
  //   return {
  //     title: locale == "en" ? "Ad" : "اعلان",
  //   };
  // },

  data() {
    return {
      icons: {
        mdiCalendar,
      },
      mainTitle: null,
      subTitle: null,
      description: null,
      mainTitleAr: null,
      subTitleAr: null,
      descriptionAr: null,
      price: null,
      sDateMenu: false,
      sDate: null,
      eDateMenu: false,
      eDate: null,
      image: null,
      isEnabled: true,
    };
  },
  validations: {
    mainTitle: {
      required,
    },
    subTitle: {
      required,
    },
    description: {
      required,
    },
    mainTitleAr: {
      required,
    },
    subTitleAr: {
      required,
    },
    descriptionAr: {
      required,
    },
    price: {
      required,
    },
    image: {
      required: requiredUnless(function() {
        return this.id != 0;
      }),
    },
    sDate: {
      required,
      minValue: (value) =>
        moment(value).format("YYYY-MM-DD") >= moment().format("YYYY-MM-DD"),
    },
    eDate: {
      required,
      isAfterDate,
    },
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let form = new FormData();
      form.append("start_date", this.sDate);
      form.append("end_date", this.eDate);
      form.append("main_title", this.mainTitle);
      form.append("description", this.description);
      form.append("sub_title", this.subTitle);
      form.append("price", this.price);
      form.append("description_ar", this.descriptionAr);
      form.append("sub_title_ar", this.descriptionAr);
      form.append("main_title_ar", this.mainTitleAr);
      form.append("isEnabled", this.isEnabled ? 1 : 0);
      if (this.image) form.append("image", this.image);
      if (this.id > 0) form.append("_method", "PUT");

      let url = this.id == 0 ? `/api/advertArea` : `/api/advertArea/${this.id}`;

      axios
        .post(url, form)
        .then((res) => {
          if (res.data.status != 200) {
           console.warn(err);
            return;
          }
          this.$emit("close");
        })
        .catch((res) => {
          console.warn(err)
        });
    },
    load() {
      axios
        .get(`/api/advertArea/${this.id}`)
        .then((res) => {
          let data = res.data.data;
          this.mainTitle = data.main_title;
          this.subTitle = data.sub_title;
          this.description = data.description;
          this.mainTitleAr = data.main_title_ar;
          this.subTitleAr = data.sub_title_ar;
          this.descriptionAr = data.description_ar;
          this.price = data.price;
          this.sDate = data.start_date;
          this.eDate = data.end_date;
          this.isEnabled = data.isEnabled;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    createNew() {
      this.mainTitle = null;
      this.subTitle = null;
      this.description = null;
      this.price = null;
      this.mainTitleAr = null;
      this.subTitleAr = null;
      this.descriptionAr = null;
      this.price = null;
      this.sDate = null;
      this.eDate = null;
      this.image = null;

      this.$v.$reset();
    },
  },
  computed: {
    mainTitleErrors() {
      const errors = [];
      if (!this.$v.mainTitle.$dirty) return errors;
      !this.$v.mainTitle.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    subTitleErrors() {
      const errors = [];
      if (!this.$v.subTitle.$dirty) return errors;
      !this.$v.subTitle.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    mainTitleErrorsAr() {
      const errors = [];
      if (!this.$v.mainTitleAr.$dirty) return errors;
      !this.$v.mainTitleAr.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    subTitleErrorsAr() {
      const errors = [];
      if (!this.$v.subTitleAr.$dirty) return errors;
      !this.$v.subTitleAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionErrorsAr() {
      const errors = [];
      if (!this.$v.descriptionAr.$dirty) return errors;
      !this.$v.descriptionAr.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.image.$dirty) return errors;
      !this.$v.image.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    sDateErrors() {
      const errors = [];
      if (!this.$v.sDate.$dirty) return errors;
      !this.$v.sDate.required && errors.push(this.$t("validate.required"));
      !this.$v.sDate.minValue && errors.push(this.$t("validate.isStartDateOk"));
      return errors;
    },
    eDateErrors() {
      const errors = [];
      if (!this.$v.eDate.$dirty) return errors;
      !this.$v.eDate.required && errors.push(this.$t("validate.required"));
      !this.$v.eDate.isAfterDate &&
        errors.push(this.$t("validate.greaterDate"));
      return errors;
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(val, oldVal) {
        if (val) this.load();
        else this.createNew();
      },
    },
  },
};
</script>
<style scoped></style>
