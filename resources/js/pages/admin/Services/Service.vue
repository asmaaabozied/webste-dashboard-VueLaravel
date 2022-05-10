<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("topNav.services") }}</v-card-title>
      <v-card-text>

        <v-row>
          <v-col cols="4">
            <div id="image-container">
              <v-avatar color="grey lighten-4" size="150">
                <img v-if="imagePreview" :src="imagePreview" />
                <v-icon v-else x-large color="secondary">{{icons.mdiAccountCircle}}</v-icon>
              </v-avatar>
              <input type="file" style="display:none;" id="imageInput" ref="image" v-on:change="onImageChange"/>
              <v-btn id="image-remove" v-if="image" icon small @click="removeImage">
                <v-icon color="red">{{ icons.mdiClose }}</v-icon>
              </v-btn>
              <v-btn id="image-choose" small icon @click="addImage"><v-icon>{{ icons.mdiPaperclip }}</v-icon></v-btn>
            </div>
            <div class="red--text" v-for="e in imageErrors" :key="e">{{ e }}</div>
          </v-col>
        </v-row>

        <v-row>

          <v-col cols="6">
            <v-text-field
              v-model="name_ar"
              :error-messages="nameErrors"
              :label="$t('service.name_ar')"
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
              v-model="name_en"
              :error-messages="nameEnErrors"
              :label="$t('service.name_en')"
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
              v-model="description_ar"
              :error-messages="descriptionErrors"
              :label="$t('service.description_ar')"
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
              v-model="description_en"
              :error-messages="descriptionEnErrors"
              :label="$t('service.description_en')"
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
            <v-col cols="12">
                <v-select
                        :items="[0,1,2,3,4,5]"
                        item-text="rating"
                        v-model="rating"
                        :label="$t('service.rating')"
                        rounded
                        outlined>
                </v-select>
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
  name: "service",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "service" : "الخدمات",
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
      name_ar: null,
      name_en: null,
      description_ar: null,
      description_en: null,
      imagePreview: null,
      image: null,
      rating:0
    };
  },
  validations: {
    name_ar: {
      required,
    },
    name_en: {
      required,
    },
    description_ar: {
      required,
    },
    description_en: {
      required,
    },
    image: {
      required,
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name_ar.$dirty){
          return errors;
      }
      !this.$v.name_ar.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors() {
      const errors = [];
      if (!this.$v.name_en.$dirty) return errors;
      !this.$v.name_en.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description_ar.$dirty) return errors;
      !this.$v.description_ar.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionEnErrors() {
      const errors = [];
      if (!this.$v.description_en.$dirty) return errors;
      !this.$v.description_en.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    imageErrors() {
      let errors = [];
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

      // this.$v.$touch ();
      // if (this.$v.$invalid) return;

      let form = new FormData();
      form.append(`name_ar`, this.name_ar);
      form.append(`name_en`, this.name_en);
      form.append(`description_ar`, this.description_ar);
      form.append(`description_en`, this.description_en);
      form.append(`image`, this.image);
      form.append("rating",this.rating);


      let url="";
      if (this.id > 0)
      {
          form.append('id', this.id);
          url =  `/api/admin-panel/services/update-service`;
      }
      else
      {
           url =  `/api/admin-panel/services/create-service`;
      }

      axios.post(url, form).then((res) => {
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
        .get(`/api/admin-panel/services/getService/${this.id}`)
        .then((res) => {

            let data = res.data.data;
            (this.name_ar = data.name_ar),
            (this.name_en = data.name_en),
            (this.description_ar = data.description_ar),
            (this.description_en = data.description_en),
            (this.imagePreview = data.img);
            (this.rating=data.rating)

        })
        .catch((err) => {
          console.warn(err)
        });
    },
    createNew() {
      this.name_ar = null;
      this.name_en = null;
      this.description_ar = null;
      this.description_en = null;
      this.imagePreview = null;
      this.image = null;
      this.rating=0;
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
