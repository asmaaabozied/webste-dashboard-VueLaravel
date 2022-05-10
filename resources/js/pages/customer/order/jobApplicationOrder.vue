<template>
  <div class="ma-5 b-section">
    <div class="pa-2 px-5 b-back">
      <h3>{{$t('jobApplication.order')}}</h3>
    </div>
    <div class="pt-4">
      <div class="b-form-row d-flex align-start">
        <v-file-input
          v-model="form.cv"
          rounded
          dense
          outlined
          :prepend-icon="icons.mdiAttachment"
          :label="$t('jobApplication.cv') + '  (PDF)'"
          accept=".pdf"
          :error-messages="cvErrors"
        />
      </div>
      <div class="b-form-row d-flex align-start">
        <v-text-field
          :label="$t('jobApplication.jobType')"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          :error-messages="jobTypeErrors"
          v-model="form.job_type"
          dense
          outlined
          rounded
        ></v-text-field>
      </div>

      <div class="pa-6 d-flex justify-end">
        <v-btn rounded color="primary" class="mx-2" @click="add()">{{$t('jobApplication.send')}}</v-btn>
        <v-btn
          rounded
          color="secondary"
          class="mx-2"
          :to="{ name: 'home' }"
        >{{$t('general.cancel')}}</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { required, } from "vuelidate/lib/validators";
import { mdiAttachment } from "@mdi/js";

export default {
  name: "jobApplicationOrder",

  
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Job application" : "طلب توظيف",
    };
  },
  
  data() {
    return {
      icons: {
        mdiAttachment
      },
      form: {
        cv: null,
        job_type: ""
      }
    };
  },
  validations: {
    form: {
      cv: {
        required
      },
      job_type: {
        required
      }
    }
  },
  methods: {
    add() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      let form = new FormData();

      form.append("cv", this.form.cv);
      form.append("job_type", this.form.job_type);

      axios
        .post("/api/jobApplicationOrder", form)
        .then(({ data }) => {
          if (data.error) {
            this.$notify({ text: data.error, type: "error" });
            return;
          }

          this.$notify({
            text: "Job application order has been send",
            type: "success"
          });
          this.$router.push({ name: 'c2'})
        })
        .catch(e => console.log(e));
    },
    resetForm() {
      this.form = {
        cv: null
      };
      this.$v.$reset()
    }
  },
  computed: {
    cvErrors() {
      const errors = [];
      if (!this.$v.form.cv.$dirty) return errors;
      !this.$v.form.cv.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    jobTypeErrors() {
      const errors = [];
      if (!this.$v.form.job_type.$dirty) return errors;
      !this.$v.form.job_type.required && errors.push(this.$t("validate.required"));
      return errors;
    },
  }
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  overflow: hidden;
}

.b-form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 100px 30px 100px;
}
</style>