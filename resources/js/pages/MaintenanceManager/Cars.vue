<template>
  <div>
    <h3>{{$t('admin.cars')}}</h3>

    <v-dialog v-model="assignEmpModal" width="60vw" scrollable>
      <assign-car v-if="assignEmpModal" :id="selectedCar" @success="assignEmpModal = false; load();" />
    </v-dialog>

    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{$t('general.type')}}</th>
            <th class="text-center">{{$t('general.no')}}</th>
            <th class="text-center">{{$t('technical.assignedEmps')}}</th>
            <th class="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ items.id }}</td>
            <td class="text-center">{{ item.car_kind }}</td>
            <td class="text-center">{{ item.palette_number }}</td>
            <td class="text-center">
              <div v-if="item.employee_info">
                <v-chip
                  close
                  @click:close="removeCarAssign(item.employee_info.id)"
                >
                  <v-avatar left>
                    <v-img :src="item.employee_info.image"></v-img>
                  </v-avatar>
                  {{ item.employee_info.name }}
                </v-chip>
              </div>
            </td>
            <td class="text-center">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="openModal(item.id)">
                      <v-list-item-title>{{ $t('technical.carAssign') }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center">
      <v-pagination v-model="page" :length="Math.ceil(total / limit)" :total-visible="5" circle></v-pagination>
    </div>
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";
import AssignCar from "./AssignCarToEmp";

export default {
  name: "cars",
  
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Vechiles" : "المركبات",
    };
  },

  components: {
    "assign-car": AssignCar
  },
  data() {
    return {
      icons: {
        mdiDotsVertical
      },
      page: 1,
      limit: 5,
      total: 0,
      assignEmpModal: false,
      items: [],
      selectedCar: null
    };
  },
  methods: {
    load() {
      axios
        .get(`/api/cars?page=${this.page}`)
        .then(res => {
          this.items = res.data.data.resource.data;
          this.limit = res.data.data.resource.per_page;
          this.total = res.data.data.resource.total;
        })
        .catch(err => {
console.warn(err)
        });
    },
    openModal(id) {
      this.selectedCar = id;
      this.assignEmpModal = true;
    },
    removeCarAssign(empId) {
      axios
        .post(`/api/takeCar`, {
          employee_id: empId
        })
        .then(res => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info"
          });

          this.load();
        })
        .catch(err => {
console.warn(err)
        });
    }
  },
  created() {
    this.load();
  }
};
</script>
<style scoped>
</style>