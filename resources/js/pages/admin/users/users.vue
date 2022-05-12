<template>
  <div>
    <h3>{{ $t("admin.users") }}</h3>
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
          <th>{{ $t("auth.name") }}</th>
          <th>{{ $t("auth.type") }}</th>
           <th>{{ $t("auth.status") }}</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.user_name }}</td>
          <td>{{ item.type }}</td>
           <td>

<span  v-if="item.status==1">{{ $t("auth.active") }}</span>

<span  v-else>{{ $t("auth.Noactive") }}</span>
           </td>
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

                  <v-list-item @click="chanagestatus(item.id)">
                  <v-list-item-title>{{
                      $t("auth.status")
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


       <!-- status dialog -->
    <v-dialog v-model="statusDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ $t("auth.status") }}</v-card-title>
        <v-card-text>{{ $t("general.statusMsg") }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="confirmStatusItem">{{
              $t("general.sure")
            }}
          </v-btn>
          <v-btn text @click="statusDialog = false">{{
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
      title: locale == "en" ? "user" : "user",
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
      statusDialog:false,
      deleteItemId: null,
       statusItemId: null,

    };
  },
  methods: {
    open(id) {
        console.log(id);
      this.$router.push({name: "users", params: {id: id}});
    },
    addItem(id) {
      this.$router.push({name: "users", params: {id: 'create'}});
    },
    deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },

      chanagestatus(id) {
      this.statusItemId = id;
      this.statusDialog = true;
    },
 
    load() {
    
         
           axios
        .get(`/api/admin-panel/getAllUser`)
        .then((res) => {
        
           this.items = res.data.data;
   
       
        })
        .catch((err) => {
           console.warn(err)
        });
    },
    confirmDeleteItem() {
      axios
          .delete(`/api/admin-panel/users/delete/${this.deleteItemId}`)
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

    confirmStatusItem(){
   axios
          .delete(`/api/admin-panel/users/status/${this.statusItemId}`)
          .then((res) => {
            this.$notify({
              text: this.$t("general.success"),
              type: "success",
            });
            this.load();
            this.statusDialog = false;
          })
          .catch((err) => {
            console.warn(err)
          });

    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.load();
    });
  },
};
</script>
<style scoped></style>
