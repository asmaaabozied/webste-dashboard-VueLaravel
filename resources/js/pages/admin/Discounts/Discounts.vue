<template>
  <div>
    <h3>{{ $t("admin.discounts") }}</h3>
    <!-- edit/add -->
    <v-dialog v-model="itemDialog" scrollable max-width="60vw">
      <discount :id="itemId"  @close="itemDialog = false" />
    </v-dialog>
    <!-- delete -->
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ $t("general.delete") }}</v-card-title>
        <v-card-text>{{ $t("general.deleteMsg") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmDeleteItem">{{
            $t("general.sure")
          }}</v-btn>
          <v-btn color="gray" text @click="deleteDialog = false">{{
            $t("general.close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="d-flex justify-end">
      <v-btn color="primary" dark @click="addItem" icon>
        <v-icon>{{ icons.mdiPlusThick }}</v-icon>
      </v-btn>
    </div>

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

    <!-- items -->
    <v-slide-y-transition mode="in-out" v-else>
      <div class="d-flex flex-wrap" style="width: 100%">
        <v-card
          v-for="(item, i) in items"
          :key="i"
          class="ma-4"
          outlined
          width="25vw"
          elevation="1"
        >
          <v-card-actions class="d-flex justify-end">
            <v-btn small icon @click="deleteItem(item.id)">
              <v-icon>{{ icons.mdiClose }}</v-icon>
            </v-btn>
            <v-btn small icon @click="editItem(item.id)">
              <v-icon>{{ icons.mdiPencilOutline }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-list-item two-line>
            <v-avatar size="80" color="grey lighten-4" class="ms-2 me-2 mb-2">
              <v-img :src="item.img"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{
                item.name
              }}</v-list-item-title>
              <v-list-item-subtitle>
                <div>{{ item.address }}</div>
              </v-list-item-subtitle>
              <div class="d-flex justify-end">
                <v-switch
                  class="mx-2"
                  color="blue"
                  v-model="item.isActive"
                  readonly
                ></v-switch>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-slide-y-transition>
  </div>
</template>
<script>
import {
  mdiClose,
  mdiPencilOutline,
  mdiMagnify,
  mdiPlusThick,
  mdiCheck,
} from "@mdi/js";
import discount from "./Discount";

export default {
  name: "discounts",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Discounts" : "أكواد الحسم",
    };
  },

  components: {
    discount,
  },
  data() {
    return {
      icons: {
        mdiClose,
        mdiPencilOutline,
        mdiPlusThick,
        mdiCheck,
      },
      search: null,
      itemDialog: false,
      deleteDialog: false,
      isLoading: false,
      itemId: null,
      deleteItemId: null,
      items: [],
    };
  },
  methods: {
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem() {
      axios
        .delete(`/api/discountCode/${this.deleteItemId}`)
        .then((res) => {
          this.load();
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          this.deleteDialog = false;
        });
    },
    editItem(id) {
      this.itemId = id;
      this.itemDialog = true;
    },
    addItem() {
      this.itemId = 0;
      this.itemDialog = true;
    },
    load() {
      this.isLoading = true;
      axios
        .get(`/api/discountCode`)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          this.isLoading = false;
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
