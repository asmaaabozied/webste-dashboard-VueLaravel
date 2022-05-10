<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("general.department") }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <div id="image-container">
              <v-avatar color="grey lighten-4" size="150">
                <img v-if="imagePreview" :src="imagePreview" />
                <v-icon v-else x-large color="secondary">{{
                  icons.mdiAccountCircle
                }}</v-icon>
              </v-avatar>
              <input
                type="file"
                style="display:none;"
                id="imageInput"
                ref="image"
                v-on:change="onImageChange"
              />
              <v-btn
                id="image-remove"
                v-if="image"
                icon
                small
                @click="removeImage"
              >
                <v-icon color="red">{{ icons.mdiClose }}</v-icon>
              </v-btn>
              <v-btn id="image-choose" small icon @click="addImage">
                <v-icon>{{ icons.mdiPaperclip }}</v-icon>
              </v-btn>
            </div>
            <div class="red--text" v-for="e in imageErrors" :key="e">
              {{ e }}
            </div>
          </v-col>
        </v-row>
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
              v-model="description"
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
        <v-btn @click="save" rounded>{{ $t("general.save") }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import { mdiAccountCircle, mdiClose, mdiPaperclip } from "@mdi/js";

export default {
  name: "department",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Department" : "قسم",
    };
  },

  data() {
    return {
      icons: {
        mdiAccountCircle,
        mdiClose,
        mdiPaperclip,
      },
      id: this.$route.params.id,
      name: null,
      nameEn: null,
      description: null,
      descriptionEn: null,
      imagePreview: null,
      image: null,
    };
  },
  validations: {
    name: {
      required,
    },
    nameEn: {
      required,
    },
    description: {
      required,
    },
    descriptionEn: {
      required,
    },
    image: {
      required,
    },
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
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.image.$dirty) return errors;
      !this.$v.image.required && errors.push(this.$t("validate.required"));
      return errors;
    },
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
      form.append(`name_ar`, this.name);
      form.append(`name`, this.nameEn);
      form.append(`description_ar`, this.description);
      form.append(`description`, this.descriptionEn);
      form.append(`image`, this.image);

      if (this.id > 0) form.append(`_method`, "put");

      let url = this.id == 0 ? `/api/department` : `/api/department/${this.id}`;
      axios
        .post(url, form)
        .then((res) => {
          if (res.data.status != 200) {
           console.warn(err)

            return;
          }
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
            this.$router.go(-1)
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    load() {
      axios
        .get(`/api/department/${this.id}`)
        .then((res) => {
          let data = res.data.data;
          (this.name = data.name_ar),
            (this.nameEn = data.name),
            (this.description = data.description_ar),
            (this.descriptionEn = data.description),
            (this.imagePreview = data.image);
        })
        .catch((err) => {
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
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
  background-color: gray;
}

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
