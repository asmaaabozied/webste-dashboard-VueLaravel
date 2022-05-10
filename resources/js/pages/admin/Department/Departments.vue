<template>
  <div>
    <h3>{{ $t("general.departments") }}</h3>
    <!-- controls -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col md="2" lg="2" xl="2">
        <v-btn color="primary" dark @click="addItem" icon>
          <v-icon>{{ icons.mdiPlusThick }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- items -->
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">&nbsp;</th>
            <th class="text-center">{{ $t("general.name") }}</th>
            <th class="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i" >
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">
              <v-avatar size="100">
                <img :src="item.image" style="padding: 10px"/>
              </v-avatar>
            </td>
            <td class="text-center">
              {{ $i18n.locale == "ar" ? item.name_ar : item.name }}
            </td>
            <td class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="black" icon dark v-on="on">
                    <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="open(item.id)">
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
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ $t("general.delete") }}</v-card-title>
        <v-card-text>{{ $t("general.deleteMsg") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmDeleteItem">{{
            $t("general.sure")
          }}</v-btn>
          <v-btn text @click="deleteDialog = false">{{
            $t("general.close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mdiDotsVertical, mdiPlusThick } from "@mdi/js";

export default {
  name: "departments",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Departments" : "الأقسام",
    };
  },

  data() {
    return {
      items: [],
      icons: {
        mdiDotsVertical,
        mdiPlusThick,
      },
      deleteDialog: false,
      deleteItemId: null,
    };
  },
  methods: {
    open(id) {
      this.$router.push({ name: "sa10-2", params: { id: id } });
    },
    addItem(id) {
      this.$router.push({ name: "sa10-2", params: { id: 0 } });
    },
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    load() {
      axios
        .get(`/api/department`)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    confirmDeleteItem() {
      axios
        .delete(`/api/department/${this.deleteItemId}`)
        .then((res) => {
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
          this.deleteDialog = false;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.load();
    });
  },
};
</script>
<style scoped></style>
