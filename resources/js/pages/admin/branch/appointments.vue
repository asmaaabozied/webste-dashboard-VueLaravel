<template>
  <div>
    <div class="text-h5 mb-8" v-text="$t('technical.appointmentsView')"></div>
    <v-row>
      <v-col cols="2" v-for="(item, i) in appointments" :key="i">
        <v-card>
          <v-card-title class="d-flex flex-column justify-center">
            <div>
              <v-icon class="mx-1">mdi-calendar-blank-outline</v-icon>
            </div>
            <div class="text-body-2" v-text="item.date_start"></div>
          </v-card-title>
          <v-card-text>
            <div v-text="item.date" class="text-body-2"></div>
            <div class="text-body-2">
              <v-icon class="mx-1">mdi-clock-in </v-icon>
              {{ item.start_time }}
            </div>
            <div class="text-body-2">
              <v-icon class="mx-1">mdi-clock-out </v-icon>
              {{ item.end_time }}
            </div>
            <div class="text-body-2">
              <v-icon class="mx-1">mdi-account</v-icon>
              {{ item.customer }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "appointments",

  data() {
    return {
      appointments: [],
    };
  },
  
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Appointments view" : "عرض المواعيد",
    };
  },

  methods: {
    load() {
      axios
        .get("/api/appointment")
        .then((res) => {
          // console.log("appointments", res.data.data);
          this.appointments = res.data.data.map((a) => {
            return {
              ...a,
              customer: a.user
                ? a.user.customer
                  ? a.user.customer.name
                  : null
                : null,
            };
          });
        })
        .catch((err) => {
          console.log(err);
          this.$notify({
            text: err.data.message,
            type: "error",
          });
        });
    },
  },

  created() {
    this.load();
  },
};
</script>

<style></style>
