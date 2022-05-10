<template>
  <v-card>
    <v-card-title>{{$t('products.product')}}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <div id="image-container">
            <v-avatar color="grey lighten-4" size="150">
              <img v-if="imagePreview" :src="imagePreview" />
              <v-icon v-else x-large color="secondary">{{icons.mdiAccountCircle}}</v-icon>
            </v-avatar>
            <input
              type="file"
              style="display:none;"
              id="imageInput"
              ref="image"
              v-on:change="onImageChange"
            />
            <v-btn id="image-remove" v-if="image" icon small @click="removeImage">
              <v-icon color="red">{{icons.mdiClose}}</v-icon>
            </v-btn>
            <v-btn id="image-choose" small icon @click="addImage">
              <v-icon>{{icons.mdiPaperclip }}</v-icon>
            </v-btn>
          </div>
          <div class="red--text" v-for="e in imageErrors" :key="e">{{ e }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select
            :items="categories"
            :label="$t('products.category')"
            item-text="name"
            item-value="id"
            v-model="category"
            :error-messages="categoryErrors"
            rounded
            outlined
            desnse
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="code"
            :error-messages="codeErrors"
            :label="$t('general.code')"
            outlined
            rounded
            desnse
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
            outlined
            rounded
            desnse
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
            outlined
            rounded
            desnse
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="number"
            min="0"
            v-model.number="quantity"
            :error-messages="quantityErrors"
            :label="$t('general.quantity')"
            outlined
            rounded
            desnse
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="number"
            min="0"
            v-model.number="price "
            :error-messages="priceErrors"
            :label="$t('general.price')"
            outlined
            desnse
            rounded
            :hint="$t('general.sar')"
            persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-textarea
            v-model="description"
            :error-messages="descriptionErrors"
            :label="$t('general.description')"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            rounded
            desnse
            outlined
            no-resize
          ></v-textarea>
        </v-col>
        <v-col cols="6">
          <v-textarea
            v-model="descriptionEn"
            :error-messages="descriptionEnErrors"
            :label="$t('general.description')"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            rounded
            desnse
            outlined
            no-resize
          ></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn rounded color="primary" @click="save">{{$t('general.save')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, requiredUnless } from "vuelidate/lib/validators";
import { mdiClose, mdiPaperclip } from "@mdi/js";
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      icons: {
        mdiClose,
        mdiPaperclip
      },
      name: null,
      nameEn: null,
      description: null,
      descriptionEn: null,
      imagePreview: null,
      image: null,
      category: null,
      categories: [],
      code: null,
      quantity: null,
      price: null
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
    },
    category: {
      required
    },
    code: {
      required
    },
    quantity: {
      required
    },
    price: {
      required
    },
    image: {
      required: requiredUnless(function() {
        if (this.id == 0) return false;
        else return true;
      })
    }
  },
  computed: {
    categoryErrors() {
      const errors = [];
      if (!this.$v.category.$dirty) return errors;
      !this.$v.category.required && errors.push(this.$t("validate.required"));
      return errors;
    },
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
    quantityErrors() {
      const errors = [];
      if (!this.$v.quantity.$dirty) return errors;
      !this.$v.quantity.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push(this.$t("validate.required"));
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
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.image.$dirty) return errors;
      !this.$v.image.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  },
  methods: {
    onImageChange(e) {
      const file = e.target.files[0];
      this.imagePreview = URL.createObjectURL(file);
      this.image = this.$refs.image.files[0];
    },
    removeImage() {
      this.imagePreview = null;
      this.image = null;
    },
    addImage() {
      document.getElementById("imageInput").click();
    },
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      let form = new FormData();
      form.append(`name`, this.nameEn);
      form.append(`name_ar`, this.name);
      form.append(`description`, this.descriptionEn);
      form.append(`description_ar`, this.description);
      form.append(`model_code`, this.code);
      form.append(`quantity`, this.quantity);
      form.append(`product_category_id`, this.category);
      form.append(`price`, this.price);
      if (this.image) form.append(`image`, this.image);
      if (this.id > 0) form.append(`_method`, `PUT`);

      let url = this.id == 0 ? `/api/product` : `/api/product/${this.id}`;

      axios
        .post(url, form)
        .then(res => {
          if (res.data.status != 200) {
            console.warn(err)
          }
          this.$notify({
            text: this.$t("general.success"),
            type: "success"
          });
          this.createNew();
          this.$emit("close");
        })
        .catch(err => {
console.warn(err)
        });
    },
    loadDefaults() {
      axios
        .get(`/api/productCategory`)
        .then(res => {
          this.categories = res.data.data;
        })
        .catch(err => {
console.warn(err)
        });
    },
    createNew() {
      this.name = null;
      this.nameEn = null;
      this.description = null;
      this.descriptionEn = null;
      this.imagePreview = null;
      this.image = null;
      this.category = null;
      this.code = null;
      this.quantity = null;
      this.price = null;

      this.$v.$reset();
    },
    load() {
      axios
        .get(`/api/product/${this.id}`)
        .then(res => {
          let data = res.data.data;
          this.name = data.name_ar;
          this.nameEn = data.name;
          this.description = data.description_ar;
          this.descriptionEn = data.description;
          this.imagePreview = data.image;
          this.category = data.category.id;
          this.code = data.model_code;
          this.quantity = data.quantity;
          this.price = data.price;
        })
        .catch(err => {
console.warn(err)
        });
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
  created() {
    this.loadDefaults();
  }
};
</script>

<style scoped>
#image-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

#image-choose {
  position: absolute;
  top: 70%;
  left: 5%;
}

#image-remove {
  position: absolute;
  top: 45%;
  left: 0;
}
</style>
