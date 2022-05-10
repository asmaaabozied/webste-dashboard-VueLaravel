<template>
  <v-card>
    <v-card-title>{{$t('hr.jobApplicationOrders.order')}}</v-card-title>
    <div class="text-center" v-if="isLoading" width="100%" style="height: 50vh; ">
      <v-progress-circular :width="7" :size="70" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-card-text class="pa-10" v-else>
      <v-row>
        <span>
          <b>Job Type:</b>
          {{jobApplication.job_type}}
        </span>
      </v-row>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        v-if="!isLoading"
        @click="downloadFile(jobApplication.cv)"
        rounded
        color="success"
      >Download CV</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "JobApplication",
  props: ["id"],
  data() {
    return {
      isLoading: true,
      jobApplication: {},
    };
  },
  mounted() {
    this.getJobApplication();
  },
  methods: {
    getJobApplication() {
      this.isLoading = true;
      axios
        .get(`/api/jobApplicationOrder/${this.$props.id}`)
        .then(({ data }) => {
          this.isLoading = false;
          this.jobApplication = data.data;
        })
        .catch((e) => console.log(e));
    },
    downloadFile(filename) {
      const url = filename;
      const method = "GET";

      axios
        .request({
          url,
          method,
          responseType: "blob",
        })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "file.pdf");
          document.body.appendChild(fileLink);

          fileLink.click();
          fileLink.remove();
        })
        .catch((err) => {
            
          console.warn(err)
        });
    },
  },
  watch: {
    id(newValue) {
      this.getJobApplication(newValue);
    },
  },
};
</script>

<style scoped>
.b-section {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}

tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>