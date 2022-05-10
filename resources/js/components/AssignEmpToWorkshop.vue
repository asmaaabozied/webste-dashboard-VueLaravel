<template>
  <v-card height="80vh" elevation="3">
    <v-card-title>{{$t('technical.assignEmps')}}</v-card-title>
    <v-card-text>
      <v-autocomplete
        v-model="selectedEmp"
        :items="employees"
        outlined
        dense
        chips
        item-text="name"
        item-value="id"
        :label="$t('topNav.employees')"
      ></v-autocomplete>
      <v-btn @click="addEmpToWorkshop(selectedEmp)">{{$t('general.assign')}}</v-btn>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn @click="$emit('close')" rounded>{{ $t('general.close') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiClose } from "@mdi/js";
export default {
  props: {
    id: Number
  },
  data() {
    return {
      icons: { mdiClose },
      selectedEmp: null,
      employees: [],
      activeEmpsInWorkshop: []
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

      //load activeEmployeesInWorkshop
      axios
        .get(`/api/workshop/${this.id}`)
        .then(res => {
          this.activeEmpsInWorkshop = res.data.data.employees_info;
        })
        .catch(err => {
          console.warn(err)
        });

      this.selectedEmp = null;
    },
    addEmpToWorkshop(empId) {
      axios
        .post(`/api/workIn`, {
          workshop_id: this.id,
          employee_id: [empId]
        })
        .then(res => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success"
          });
          this.$emit('close')
        })
        .catch(err => {
console.warn(err)
        });
    },
    removeEmp(id) {
      axios
        .delete(`/api/workIn/${this.id}`)
        .then(res => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success"
          });
          this.load();
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
      }
    }
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