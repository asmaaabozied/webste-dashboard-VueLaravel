<template>
  <div class="ma-4">
    <div
      class="d-flex align-center justify-center"
      v-if="isLoading"
      width="100%"
      style="height: 50vh; "
    >
      <v-progress-circular
        :width="7"
        :size="70"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      isLoading: false,
      content: null,
    };
  },

  methods: {
    load() {
      this.isLoading = true;
      axios
        .get(`/api/contentManagement/${this.id}`)
        .then((res) => {
          this.$i18n.locale == "ar"
            ? (this.content = res.data.data.content_ar)
            : (this.content = res.data.data.content_en);
        })
        .catch((err) => {
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },

  created() {
    if (this.id > 0) this.load();
  },

  watch: {
    id: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal) this.load();
      },
    },
  },
};
</script>

<style></style>
