<template>
  <div class="ma-10">
    <h3>{{ $t("admin.pages") }}</h3>

    <v-row>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="addItem" icon>
        <v-icon>{{ icons.mdiPlusThick }}</v-icon>
      </v-btn>
    </v-row>

    <div
      class="text-center"
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

    <v-simple-table v-else dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{ $t("general.nameAr") }}</th>
            <th class="text-center">{{ $t("general.nameEn") }}</th>
            <th class="text-center">{{ $t("admin.pageOrder") }}</th>
            <th class="text-center">{{ $t("general.updatedAt") }}</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ item.name_ar }}</td>
            <td class="text-center">{{ item.name_en }}</td>
            <td class="text-center">{{ item.pageOrder }}</td>
            <td class="text-center">{{ formatDate(item.updated_at) }}</td>
            <td>
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="view(item.id)">
                      <v-list-item-title>{{
                        $t("general.open")
                      }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteItem(item.id)">
                      <v-list-item-title>{{
                        $t("general.delete")
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- dialog -->
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
import { mdiDotsVertical, mdiPlusThick } from "@mdi/js";
import confirmDialog from "../../../components/confirmDialog";

export default {
  name: "cms-index",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Content management" : "ادارة المحتوى",
    };
  },

  components: {
    confirmDialog,
  },

  data() {
    return {
      icons: {
        mdiDotsVertical,
        mdiPlusThick,
      },
      items: [],
      itemId: 0,
      deleteItemId: null,
      deleteDialog: false,
      isLoading: false,
      deleteInfo: {
        id: 0,
        dialog: false,
      },
    };
  },

  methods: {
    load() {
      this.isLoading = true;
      this.items = [];
      axios
        .get(`/api/contentManagement`)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => {
           console.warn(err)
        })
        .finally(() => (this.isLoading = false));
    },
    view(id) {
      this.$router.push({ name: "sa11", params: { id: id } });
    },
    deleteItem(id) {
      this.deleteInfo.id = id;
      this.deleteInfo.dialog = true;
    },
    doDelete() {
      this.deleteInfo.dialog = false;
      axios
        .delete(`/api/contentManagement/${this.deleteInfo.id}`)
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
          this.load();
        })
        .catch((err) => {
           console.warn(err)
        });
    },
    addItem() {
      this.$router.push({ name: "sa11", params: { id: 0 } });
    },
  },

  created() {
    this.load();
  },
};
</script>

<style></style>
