<template>
  <div>
    <h3>{{$t('admin.spareParts')}}</h3>
    <!-- single spare part dialog -->
    <v-dialog v-model="sparePartDialog" scrollable max-width="60vw">
      <spare-part v-if="sparePartDialog" :id="itemId" @close="sparePartDialog = false; load();" />
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
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="2">
        <v-btn color="primary" dark @click="addItem" icon>
          <v-icon>{{icons.mdiPlusThick }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- parts -->

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
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ item.code }}</v-list-item-title>
            <v-list-item-subtitle>
              <div>{{ item.name }}</div>
              <div>{{ item.name_ar }}</div>
              <div>{{ item.manufacturer }}</div>
              <div>{{ item.price + ' ' + $t('general.sar') }}</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>
<script>
import {
  mdiClose,
  mdiPencilOutline,
  mdiMagnify,
  mdiPlusThick,
  mdiCheck
} from "@mdi/js";
import sparePart from "./SparePart";
import axios from "axios";

export default {
  components: {
    "spare-part": sparePart
  },
  data() {
    return {
      icons: {
        mdiClose,
        mdiPencilOutline,
        mdiMagnify,
        mdiPlusThick,
        mdiCheck
      },
      searchString: null,
      sparePartDialog: false,
      deleteDialog: false,
      items: [],
      itemId: 0,
      deleteItemId: null
    };
  },
  methods: {
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem() {
      axios
        .delete(`/api/sparePart/${this.deleteItemId}`)
        .then(res => {
          this.$notify({
            text: this.$t("general.success"),
            type: "info"
          });
          this.deleteDialog = false;
          this.load();
        })
        .catch(err => {
console.warn(err)
        });
    },
    editItem(id) {
      this.itemId = id;
      this.sparePartDialog = true;
    },
    addItem() {
      this.itemId = 0;
      this.sparePartDialog = true;
    },
    load() {
      axios
        .get(`/api/sparePart`)
        .then(res => {
          this.items = res.data.data;
        })
        .catch(err => {
console.warn(err)
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.load();
    });
  }
};
</script>
<style scoped>
</style>