<template>
  <div>
    <h3>{{$t('products.categories')}}</h3>
    <div class="d-flex justify-end">
      <v-btn color="primary" @click="addItem" icon>
        <v-icon>{{icons.mdiPlusThick }}</v-icon>
      </v-btn>
    </div>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">{{$t('general.name')}}</th>
            <th class="text-center">{{$t('general.actions')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ $i18n.locale == 'en' ? item.name : item.name_ar }}</td>
            <td class="text-center">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="black" icon dark v-on="on">
                      <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="edit(item)">
                      <v-list-item-title>{{ $t('general.edit') }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteItem(item)">
                      <v-list-item-title>{{ $t('general.delete') }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <!-- item  -->
    <v-dialog v-if="itemDialog" v-model="itemDialog" max-width="50vw" scrollable>
      <category :id="itemId" @close="itemDialog = false; load();" />
    </v-dialog>
    <!-- delete -->
    <v-dialog v-model="deleteDialog" max-width="30vw">
      <v-card>
        <v-card-title>{{$t('general.delete')}}</v-card-title>
        <v-card-text>{{$t('general.deleteMsg')}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="confirmDelete">{{ $t('general.sure') }}</v-btn>
          <v-btn color="green darken-1" text @click="deleteDialog = false">{{ $t('general.close') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mdiDotsVertical, mdiPlusThick } from "@mdi/js";
import category from "./Category";

export default {
  components: {
    category
  },
  data() {
    return {
      items: [],
      itemId: 0,
      deleteId: 0,
      itemDialog: false,
      deleteDialog: false,
      icons: {
        mdiDotsVertical,
        mdiPlusThick
      }
    };
  },
  methods: {
    edit(item) {
      this.itemId = item.id;
      this.itemDialog = true;
    },
    deleteItem(item) {
      this.deleteId = item.id;
      this.deleteDialog = true;
    },
    confirmDelete() {
      this.deleteDialog = false;

      axios
        .delete(`/api/productCategory/${this.deleteId}`)
        .then(res => {
          this.load()
        })
        .catch(err => {

        });
    },
    addItem() {
      this.itemId = 0;
      this.itemDialog = true;
    },
    load() {
      axios
        .get(`/api/productCategory`)
        .then(res => {
          this.items = res.data.data;
        })
        .catch(() => {
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
