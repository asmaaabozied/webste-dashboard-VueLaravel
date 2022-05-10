<template>
  <div>
    <h3>{{ $t("admin.ads") }}</h3>
    <!-- item Dialog -->
    <v-dialog v-model="itemDialog" scrollable max-width="60vw">
      <ad :id="itemId" @close=" itemDialog = false; load();"/>
    </v-dialog>
    <!-- delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ $t("general.delete") }}</v-card-title>
        <v-card-text>{{ $t("general.deleteMsg") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmDeleteItem">{{$t("general.sure")}}</v-btn>
          <v-btn text @click="deleteDialog = false">{{
            $t("general.close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- constrols -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col md="2" lg="2" xl="2">
        <v-btn color="primary" dark @click="addItem" icon>
          <v-icon>{{ icons.mdiPlusThick }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- items -->
      <v-row>
          <v-card v-for="(item, i) in items" :key="i" class="ma-4" outlined width="25vw" elevation="1">
              <v-card-actions class="d-flex justify-end">
                  <v-btn small icon @click="deleteItem(item.id)">
                      <v-icon>{{ icons.mdiClose }}</v-icon>
                  </v-btn>
                  <v-btn small icon @click="editItem(item)">
                      <v-icon>{{ icons.mdiPencilOutline }}</v-icon>
                  </v-btn>
              </v-card-actions>

              <v-list-item two-line>
                  <v-avatar size="80" color="grey lighten-4" class="ms-2 me-2 mb-2">
                      <v-img :src="item.image"></v-img>
                  </v-avatar>
                  <v-list-item-content>
                      <v-list-item-title
                              class="headline mb-1"
                              v-text="
                  $i18n.locale == 'en' ? item.main_title : item.main_title_ar
                "
                      ></v-list-item-title>
                      <v-list-item-subtitle>
                          <div
                                  v-text="
                    $i18n.locale == 'en' ? item.sub_title : item.sub_title_ar
                  "
                          ></div>
                          <div>{{ item.price }}</div>
                      </v-list-item-subtitle>
                      <div class="d-flex justify-end">
                          <v-switch
                                  class="mx-2"
                                  color="blue"
                                  :input-value="item.isEnabled == 0 ? false : true"
                                  readonly
                          ></v-switch>
                      </div>
                  </v-list-item-content>
              </v-list-item>
          </v-card>
      </v-row>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="Math.ceil(total / limit)"
        :total-visible="5"
        @input="load"
        :next-icon="icons.mdiChevronRight"
        :prev-icon="icons.mdiChevronLeft"
        circle
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import {
  mdiClose,
  mdiPencilOutline,
  mdiMagnify,
  mdiPlusThick,
  mdiCheck,
  mdiChevronRight,
  mdiChevronLeft,
} from "@mdi/js";
import ad from "./ad";
import axios from "axios";

export default {
  components: {
    ad,
  },
    data() {
    return {
      icons: {
        mdiClose,
        mdiPencilOutline,
        mdiMagnify,
        mdiPlusThick,
        mdiCheck,
        mdiChevronRight,
        mdiChevronLeft,
      },
      items: [],
      search: null,
      itemDialog: false,
      deleteDialog: false,
      isLoading: false,
      itemId: 0,
      deleteItemId: null,
      page: 1,
      total: 0,
      limit: 5,
    };
  },
  methods: {
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem() {
      axios
        .delete(`/api/advertArea/${this.deleteItemId}`)
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
    editItem(item) {
      this.itemId = item.id;
      this.itemDialog = true;
    },
    addItem() {
      this.itemId = 0;
      this.itemDialog = true;
    },
    load() {
      this.isLoading = true;
      axios
        .get(`/api/advertArea?page=${this.page}`)
        .then((res) => {
          this.items = res.data.data;
          this.total = res.data.data.length;
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
