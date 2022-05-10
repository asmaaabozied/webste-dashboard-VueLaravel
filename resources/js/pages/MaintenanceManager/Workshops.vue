<template>
  <div>
    <h3>{{$t('technical.workshops')}}</h3>
    <v-row>
      <v-spacer></v-spacer>
      <v-col md="2" lg="2" xl="2">
        <v-btn color="primary" dark @click="addItem" icon>
          <v-icon>{{icons.mdiPlusThick }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center"></th>
            <th class="text-center">{{$t('general.name')}}</th>
            <th class="text-center">{{$t('topNav.employees')}}</th>
            <th class="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">
              <v-avatar>
                <img :src="item.image" />
              </v-avatar>
            </td>
            <td class="text-center">{{ $i18n.locale == 'en' ? item.name : item.name_ar }}</td>
            <td class="text-center">
              <v-chip
                v-for="(emp, j) in item.employees_info"
                :key="j + 'e'"
                close
                @click:close="removeEmpAssign(item.id, emp.id)"
              >
                <v-avatar left>
                  <v-img :src="emp.image"></v-img>
                </v-avatar>
                {{ emp.name }}
              </v-chip>
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
                    <v-list-item @click="open(item.id)">
                      <v-list-item-title>{{ $t('general.open') }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteItem(item.id)">
                      <v-list-item-title>{{ $t('general.delete') }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="assignEmp(item.id)">
                      <v-list-item-title>{{ $t('technical.assignEmps') }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- assign emp -->
    <v-dialog width="40vw" scrollable v-model="addEmpModal">
      <assign-emp :id="selectedWorkshopId" @close="addEmpModal = false; load();" />
    </v-dialog>
    <!-- delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{$t('general.delete')}}</v-card-title>
        <v-card-text>{{$t('general.deleteMsg')}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmDeleteItem">{{ $t('general.sure') }}</v-btn>
          <v-btn text @click="deleteDialog = false">{{ $t('general.close') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {
  mdiPlaylistEdit,
  mdiMagnify,
  mdiPlusThick,
  mdiDotsVertical
} from "@mdi/js";
import AssignEmp from "./../../components/AssignEmpToWorkshop";

export default {
  components: {
    "assign-emp": AssignEmp
  },
  data() {
    return {
      icons: {
        mdiPlaylistEdit,
        mdiMagnify,
        mdiPlusThick,
        mdiDotsVertical
      },
      items: [],
      searchValue: null,
      addEmpModal: false,
      selectedEmps: [],
      selectedWorkshopId: null,
      deleteDialog: false,
      deleteInfo: {
        id: null
      }
    };
  },
  methods: {
    assignEmp(id) {
      this.selectedWorkshopId = id;
      this.addEmpModal = true;
    },
    open(id) {
      this.$router.push({
        name: "mm11",
        params: {
          id: id,
          preType: 1,
          preDepartment: this.$store.state.user.department_id
        }
      });
    },
    deleteItem(id) {
      this.deleteInfo.id = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem() {
      axios
        .delete(`/api/workshop/${this.deleteInfo.id}`)
        .then(res => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info"
          });
          this.deleteInfo.id = null;
        })
        .catch(err => {
console.warn(err)
        })
        .finally(() => {
          this.deleteDialog = false;
          this.load();
        });
    },
    load() {
      axios
        .get(`/api/department/${this.$store.state.user.department_id}`)
        .then(res => {
          this.items = res.data.data.workshops;
        })
        .catch(err => {
console.warn(err)
        });
    },
    addItem() {
      this.$router.push({
        name: "mm11",
        params: {
          id: 0,
          preType: 1,
          preDepartment: this.$store.state.user.department_id
        }
      });
    },
    removeEmpAssign(workshopId, empId) {
      axios
        .delete(`/api/workIn/${workshopId}`, {
          headers: {
            Authorization: "Bearer " + this.$store.state.token
          },
          data: {
            employee_id: [empId]
          }
        })
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
  mounted() {
    this.load();
  }
};
</script>
<style scoped>
</style>