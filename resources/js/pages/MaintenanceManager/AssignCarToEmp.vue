<template>
  <v-card elevation="3">
    <v-card-title>{{$t('technical.assignEmps')}}</v-card-title>
    <v-card-text class="d-flex justify-center flex-column">
      <v-card outlined>
        <v-card-text id="employees">
          <v-autocomplete
            v-model="selectedEmp"
            :items="employees"
            outlined
            dense
            chips
            item-text="name"
            item-value="id"
            :label="$t('topNav.employees')"
            class="ma-4"
            clearable
          ></v-autocomplete>
        </v-card-text>
      </v-card>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn @click="addEmpToWorkshop(selectedEmp)">{{$t('general.save')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {} from "@mdi/js";
export default {
  props: {
    id: Number
  },
  data() {
    return {
      icons: {},
      selectedEmp: null,
      employees: []
    };
  },
  methods: {
    load() {
      //load all employees
      axios
        .get(`/api/employee`)
        .then(res => {
          this.employees = res.data.data;
        })
        .catch(err => {
          console.warn(err)
        });
    },
    addEmpToWorkshop(empId) {
      if (this.selectedEmp)
        axios
          .post(`/api/giveCar`, {
            car_id: this.id,
            employee_id: empId
          })
          .then(res => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success"
            });

            this.$emit("success");
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
        if (val > 0) this.selectedEmp = null;
      }
    }
  },
  created() {
    this.load();
  }
};
</script>

<style scoped>
#selected,
#employees {
  height: 50vh;
  overflow-y: scroll;
}
</style> 