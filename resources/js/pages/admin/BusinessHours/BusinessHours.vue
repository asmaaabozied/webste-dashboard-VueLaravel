<template>
  <v-card>
    <v-card-title>{{$t('admin.setBusinessHours')}}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" md="2" lg="2" xl="2">
          <p>{{$t('admin.setHours')}}</p>
        </v-col>
        <v-col cols="12" sm="12" md="5" lg="5" xl="5" class="d-flex flex-column align-center">
          {{$t('admin.sHour')}}
          <div style="width: 290px; flex: 0 1 auto;">
            <v-time-picker scrollable full-width v-model="startHour"></v-time-picker>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="5" lg="5" xl="5" class="d-flex flex-column align-center">
          {{$t('admin.eHour')}}
          <div style="width: 290px; flex: 0 1 auto;">
            <v-time-picker scrollable full-width v-model="endHour"></v-time-picker>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="2" lg="2" xl="2">{{$t('admin.setDays')}}</v-col>
        <v-col cols="12" sm="12" md="10" lg="10" xl="10" class="d-flex justify-center">
          <v-btn-toggle v-model="workingDays" tile color="blue" multiple group>
            <v-btn v-for="(item, i) in days" :key="i" :value="item.id">{{item.label}}</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn rounded color="primary" @click="save">{{$t('general.save')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "business-hours",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Business Hours" : "ساعات العمل",
    };
  },

  data() {
    return {
      startHour: null,
      endHour: null,
      workingDays: [],
      days: [
        { id: 1, label: this.$t("admin.sun") },
        { id: 2, label: this.$t("admin.mon") },
        { id: 3, label: this.$t("admin.tus") },
        { id: 4, label: this.$t("admin.wed") },
        { id: 5, label: this.$t("admin.thr") },
        { id: 6, label: this.$t("admin.fri") },
        { id: 7, label: this.$t("admin.sat") },
      ]
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("/api/workschedules")
        .then(({ data }) => {

          this.startHour = data.data[0].from;
          this.endHour = data.data[0].to;

          data.data.forEach(day => {
            if (!day.day_off) this.workingDays.push(day.id);
          });
        })
        .catch(e => console.log(e));
    },
    save() {
      let forms = [];

      this.days.forEach(day => {
        let dayOff = !this.workingDays.includes(day.id);

        forms.push({
          id: day.id,
          from: this.startHour.substr(0, 5),
          to: this.endHour.substr(0, 5),
          day_off: dayOff
        });
      });

      forms.forEach(form => {
        axios
          .post("/api/workschedules/update", form)
          .then(({ data }) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success"
            });
          })
          .catch(err => {
            console.warn(err)
          });
      });
    }
  }
};
</script>

<style>
</style>