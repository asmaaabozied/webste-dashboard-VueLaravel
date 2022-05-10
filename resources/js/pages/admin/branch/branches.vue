<template>
  <div>
    <h3>{{ $t("general.branches") }}</h3>
    <v-row justify="end">
      <v-col cols="2">
        <v-btn color="success" :to="{ name: 'sa14', params: { id: 0 } }" icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-simple-table dense fixed-header height="60vh">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{ $t("general.nameEn") }}</th>
            <th class="text-center">{{ $t("general.nameAr") }}</th>
            <th class="text-center">{{ $t("general.radius") }}</th>
            <th class="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">{{ item.name_ar }}</td>
            <td class="text-center">{{ item.radius }}</td>

            <td class="text-center">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      :to="{ name: 'sa14', params: { id: item.id } }"
                    >
                      <v-list-item-title
                        v-text="$t('general.open')"
                      ></v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteItem(item.id)">
                      <v-list-item-title
                        v-text="$t('general.delete')"
                      ></v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      :to="{ name: 'sa15', params: { id: item.id } }"
                    >
                      <v-list-item-title
                        v-text="$t('technical.generateAppointments')"
                      >
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      :to="{ name: 'sa16', params: { id: item.id } }"
                    >
                      <v-list-item-title
                        v-text="$t('technical.appointmentsView')"
                      >
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <confirm-dialog
      :isOpen="deleteInfo.dialog"
      :title="$t('general.delete')"
      :msg="$t('general.isSure')"
      @cancel="deleteInfo.dialog = false"
      @confirm="doDelete"
    />
  </div>
</template>
<script>
import { mdiDotsVertical } from "@mdi/js";
import confirmDialog from "../../../components/confirmDialog";

export default {
  name: "branch-index",
  
  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Company branches" : "أفرع الشركة",
    };
  },

  components: {
    confirmDialog,
  },

  data() {
    return {
      icons: {
        mdiDotsVertical,
      },
      items: [],
      deleteInfo: {
        id: 0,
        dialog: false,
      },
    };
  },

  methods: {
    load() {
      this.items = [];
      axios
        .get(`/api/branch`)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    deleteItem(id) {
      this.deleteInfo.id = id;
      this.deleteInfo.dialog = true;
    },
    doDelete() {
      axios
        .delete(`/api/branch/${this.deleteInfo.id}`)
        .then(() => {
          this.load();
        })
        .catch((err) => {
          this.$notify({
            text: err,
            type: "error",
          });
        })
        .finally(() => (this.deleteInfo.dialog = true));
    },
  },

  created() {
    this.load();
  },
};
</script>
<style scoped></style>
