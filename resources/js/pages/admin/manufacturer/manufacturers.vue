<template>
  <div>
    <h3>{{ $t("general.manufacturers") }}</h3>
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
            <th>#</th>
            <th>Name En</th>
            <th>Name Ar</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.name_en }}</td>
            <td>{{ item.name_ar }} </td>
            <td>
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
import axios from "axios";

export default {
  name: "manufacturers",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "manufacturer" : "المصانع",
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
      this.$router.push({ name: "manufacturer", params: { id: id } });
    },
    addItem(id) {
      this.$router.push({ name: "manufacturer", params: { id: 0 } });
    },
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    load() {
      axios
        .get(`/api/manufacture`)
        .then((res) => {
          this.items = res.data.data.data;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    confirmDeleteItem() {

      axios
        .delete(`/api/manufacture/${this.deleteItemId}`)
        .then((res) => {
          this.load();
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
