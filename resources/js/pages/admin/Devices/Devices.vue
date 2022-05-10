<template>
  <div>
    <h3>{{ $t("admin.devices") }}</h3>
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
          <th>{{ $t("service.name_ar") }}</th>
          <th>{{ $t("service.name_en") }}</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.name_ar }}</td>
          <td>{{ item.name_en }}</td>
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
                    }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteItem(item.id)">
                  <v-list-item-title>{{
                      $t("general.delete")
                    }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div>
      <v-pagination
          v-model="page"
          @input="load"
          :length="Math.ceil(total / limit)"
          :total-visible="5"
          circle
      ></v-pagination>
    </div>
    <!-- delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ $t("general.delete") }}</v-card-title>
        <v-card-text>{{ $t("general.deleteMsg") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmDeleteItem">{{
              $t("general.sure")
            }}
          </v-btn>
          <v-btn text @click="deleteDialog = false">{{
              $t("general.close")
            }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {mdiDotsVertical, mdiPlusThick} from "@mdi/js";

export default {
  name: "cars",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Devices" : "Devices",
    };
  },

  data() {
    return {
      page: 1,
      total: 0,
      limit: 5,
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
      this.$router.push({name: "device", params: {id: id}});
    },
    addItem(id) {
      this.$router.push({name: "device", params: {id: 0}});
    },
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    load() {
      axios
          .get(`/api/admin-panel/devices/getAlldevices?page=${this.page}`)
          .then((res) => {
            this.items = res.data.data.resource.data;
            this.limit = res.data.data.resource.per_page;
            this.total = res.data.data.resource.total;
          })
          .catch((err) => {
            console.warn(err)
          });
    },
    confirmDeleteItem() {
      axios
          .delete(`/api/admin-panel/devices/delete/${this.deleteItemId}`)
          .then((res) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
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
