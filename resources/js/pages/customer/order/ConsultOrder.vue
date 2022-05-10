<template>
  <div class="ma-5 b-section">
    <div class="pa-2 px-5 b-back">
      <h3>{{ $t("consultation.order") }}</h3>
    </div>
    <div class="pt-4">
      <div class="b-form-row d-flex align-start">
        <v-textarea
          v-model="form.description"
          :label="$t('consultation.problemDescription')"
          required
          outlined
          rounded
          :rules="[(v) => !!v || $requiredRules]"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          :readonly="id > 0"
        ></v-textarea>
      </div>
      <div class="pa-6 d-flex justify-end">
        <v-btn
          rounded
          color="primary"
          v-if="id == 0"
          class="mx-2"
          @click="add"
          >{{ $t("consultation.send") }}</v-btn
        >
        <v-btn
          rounded
          color="secondary"
          class="mx-2"
          :to="{ name: 'home' }"
          v-if="id == 0"
          >{{ $t("general.cancel") }}</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultOrder",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Create Consult order" : "إنشاء طلب استشارة",
    };
  },

  props: {
    isFromNotification: Boolean,
  },

  data() {
    return {
      form: {
        description: null,
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    add() {
      axios
        .post("/api/ConsultantOrder", { description: this.form.description })
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
          this.$router.push({ name: "c2" });
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    resetForm() {
      this.form = {
        description: null,
      };
    },
    async load() {
      if (this.isFromNotification) {
        await axios
          .get(`/api/order/${this.id}`)
          .then((res) => {
            console.log(res);
            this.id = res.data.data.id;
          })
          .catch((err) => {
            console.warn(err);
          });
      }
      axios
        .get(`/api/ConsultantOrder/${this.id}`)
        .then((res) => {
          this.form.description = res.data.data.description;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.id > 0) vm.load();
    });
  },
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
.b-form-row label {
  padding: 5px;
  width: 200px;
}
</style>
