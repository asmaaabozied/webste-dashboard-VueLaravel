<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title primary-title v-text="$t('topNav.roles')">
          </v-card-title>
          <v-card-text>

              <v-row justify="center">
                  <v-col cols="12" md="12">
                      <v-text-field
                              v-model="name"
                              :label="$t('general.name')"
                              outlined
                              rounded
                              dense
                              autocomplete="off"
                              autocorrect="off"
                              spellcheck="false"
                              :error-messages="nameArErrors">
                      </v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                      <input
                              class="form-check-input"
                              type="checkbox"
                              v-model="selectAllPermission"
                              @click="selectAll"
                      >

                      <label class="form-check-label"  style="font-size: 25px">
                          Select All Roles And Permission
                      </label>
                  </v-col>


              </v-row>


              <div class="row">

                  <div class="col-md-4" v-for="permissions in modules_permissions">

                      <h2 class="pull-left" style="font-size: 35px; margin-bottom:10px">{{ permissions.name }}</h2>

                      <div class="form-check" v-for="permission in permissions.module_permissions" style="margin-bottom:5px">

                          <input
                                  class="form-check-input"
                                  type="checkbox"
                                  :id="permission.id"
                                  v-bind:value="permission.id"
                                  v-model="permissionsCheck"
                          >

                          <label class="form-check-label" :for="permission.id" style="font-size: 25px">
                              {{ permission.display_name }}
                          </label>
                      </div>

                  </div>

              </div>

          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn rounded color="success" @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { required } from "vuelidate/lib/validators";

export default {
  name: "Roles And Permissions",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Roles And Permissions" : "Roles And Permissions",
    };
  },

  data() {
    return {
        id: 0,
        name:"",
        modules_permissions: [],
        permissionsCheck:[],
        selectAllPermission:false
    };
  },

  validations: {
    name: { required },
  },

  methods: {

    save() {

        if(this.permissionsCheck.length == 0)
        {
            this.$notify({
                text: this.$t("general.checkInputs"),
                type: "warning",
            });
            return;
       }

        let formData=new FormData();
        formData.append("name",this.name);
        formData.append("permissions",this.permissionsCheck);

        let url=`/api/admin-panel/create-new-role`;

        if (this.id > 0) {
            url = "/api/admin-panel/update-role-permission";
            formData.append("id", this.id);
        }


        axios.post(url,formData).then((res) => {

          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });

        }).catch((err) => {
            console.log("error");
            console.warn(err)
        });



    },
    load() {

      axios
          .get(`/api/admin-panel/getRoleWithPermission/${this.id}`)
          .then((res) => {
              let data              = res.data.data;
              this.name             = data.role.display_name;
              this.permissionsCheck = data.permissions;
          })
        .catch((err) => {
          console.warn(err)
        });
    },
    reset() {
        this.name             = '';
        this.permissionsCheck = [];
    },
    getAllModulesPermissions() {
         axios.get(`/api/admin-panel/getModulesRoles`).then((res) => {
             this.modules_permissions=res.data.data;
        }).catch((err) => {
          console.warn(err)
        });
    },
    selectAll(){
        if (this.selectAllPermission) {

            var list = [];
            this.modules_permissions.forEach(function (permission) {
                permission.module_permissions.forEach(function (item) {
                    list.push(item.id);
                });
            });

            this.permissionsCheck = list;
        }
        else {
            this.permissionsCheck = [];
        }
    }
  },

  computed: {
    nameArErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.nameAr.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  },

  created() {

    this.getAllModulesPermissions();

    this.id = parseInt(this.$route.params.id);
    if (this.id == 0) this.reset();
    else if (this.id > 0) this.load();
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
  background-color: gray;
}
</style>
