<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("admin.users") }}</v-card-title>
      <v-card-text>


          <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :label="$t('general.name')"
                            outlined
                            rounded
                            dense
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            v-model="user_name"
                            :error-messages="usernameErrors"
                            :label="$t('auth.username')"
                            required
                            outlined
                            rounded
                            dense
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            :type="showPassword ? 'text' : 'password'"
                            v-model="password"
                            :error-messages="passwordErrors"
                            :label="$t('auth.password')"
                            outlined
                            rounded
                            dense
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
                            v-model="confirm"
                         
                            @change="$v.confirm.$touch()"
                            @blur="$v.confirm.$touch()"
                            :label="$t('auth.confirm')"
                            required
                            outlined
                            rounded
                            dense
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-text-field
                            v-model="phone"
                            :error-messages="phoneErrors"
                            :label="$t('auth.mobile')"
                            outlined
                            rounded
                            dense
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                    ></v-text-field>
                </v-col>
            </v-row>
          
            <!-- <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-select
                            v-model="accountType"
                            :label="$t('auth.accountType')"
                            :items="accountTypes"
                            item-value="id"
                            item-text="label"
                            outlined
                            rounded
                            dense
                    ></v-select>
                </v-col>
            </v-row> -->

       <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-select
                            v-model="type"
                            :label="$t('auth.accountType')"
                            :items="types"
                            item-value="name"
                            item-text="label"
                            outlined
                            rounded
                            dense
                    ></v-select>
                </v-col>
            </v-row>

                <v-col cols="12">
                        <v-select
                                :items="roles"
                                v-model="role_id"
                                :label="$t('auth.roles')"
                                item-text="display_name"
                                item-value="id"
                                outlined
                                rounded
                                dense
                        ></v-select>
                    </v-col>

                            <v-col cols="12">
                        <v-select
                                :items="employees"
                                v-model="employee_id"
                                :label="$t('auth.employees')"
                                item-text="name"
                                item-value="id"
                                outlined
                                rounded
                                dense
                        ></v-select>
                    </v-col>


    
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center">
              <v-btn rounded class="mx-1" color="primary" @click="save">{{
                $t("general.save")
              }}</v-btn>
              <v-btn rounded class="mx-1" @click="$router.go(-1)">{{
                $t("general.cancel")
              }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

import axios from "axios";

    import {required, sameAs, numeric, minLength} from "vuelidate/lib/validators";
    import {mdiEye, mdiEyeOff, mdiMapMarkerPlus, mdiMapMarkerOff} from "@mdi/js";
export default {
  name: "devices",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "device" : "device",
    };
  },

  data() {
    return {
      id: this.$route.params.id,
       name: "",
                user_name: null,
                role_id:null,
                employee_id:null,
                employees:[],
                password: null,
                confirm: null,
                phone: null,
                location: null,
                type:null,
                roles:[],
                mapCenter: {lat: 24.774265, lng: 46.738586},
                showPassword: false,
                icons: {
                    mdiEye,
                    mdiEyeOff,
                    mdiMapMarkerPlus,
                    mdiMapMarkerOff,
                },
                accountTypes: [
                    {id: 1, label: this.$t("auth.customerAccount")},
                    {id: 2, label: this.$t("auth.agentAccount")},
                ],
    types: [
                    {name: 'customer', label: this.$t("auth.customerAccount")},
                    {name:'employee', label: this.$t("auth.agentAccount")},
                ],

                accountType: 1,
                 acceptTerms: null,
                errorMessages: [],


      icons: {},
    };
  },

  
  validations: {
            name: {
                required,
            },
            user_name: {
                required,
            },
            password: {
                required,
            },
            confirm: {
              
                required,
            },
            phone: {
                required,
                numeric,
                minLength: minLength(10),
            },
        
          
        },

    computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            usernameErrors() {
                const errors = [];
                if (!this.$v.user_name.$dirty) return errors;
                !this.$v.user_name.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            passwordErrors() {
                const errors = [];
                if (!this.$v.password.$dirty) return errors;
                !this.$v.password.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            // confirmErrors() {
            //     const errors = [];
            //     if (!this.$v.confirm.$dirty) return errors;
            //     !this.$v.confirm.required && errors.push(this.$t("validate.required"));
            //     !this.$v.confirm.sameAsPassword &&
            //     errors.push(this.$t("validate.confirmNoMatch"));
            //     return errors;
            // },
            phoneErrors() {
                const errors = [];
                if (!this.$v.phone.$dirty) return errors;
                !this.$v.phone.required && errors.push(this.$t("validate.required"));
                !this.$v.phone.numeric && errors.push(this.$t("validate.numeric"));
                !this.$v.phone.minLength &&
                errors.push(this.$t("validate.minLengthNumric", {x: 10}));
                return errors;
            },
            // locationErrors() {
            //     const errors = [];
            //     if (!this.$v.location.$dirty) return errors;
            //     !this.$v.location.required &&
            //     errors.push(this.$t("validate.setLocation"));
            //     return errors;
            // },
         
         
        },
  methods: {


    save() {
           this.$v.$touch();
          if (this.$v.$invalid) return;
     

        let url  = `/api/admin-panel/users/create-user`;
        let data = {
            user_name: this.user_name,
            password: this.password,
             name: this.name,
             phone:this.phone,
             type:this.type,
             role_id:this.role_id,
             employee_id:this.employee_id,
             lat:0,
             lon:0

        

        };

        if (this.id != 0) {
            data["id"] = this.$route.params.id;
        }

        axios
            .post(url, data)
            .then((res) => {
                this.$notify({
                    text: this.$t("general.success"),
                    type: "success",
                });
                this.$router.push({name: "user"});
            })
            .catch((err) => {
                console.warn(err)
        });


    },
    load() {
    
      axios
        .get(`/api/admin-panel/users/getUser/${this.id}`)
        .then((res) => {
          this.user_name = res.data.data.user_name;
          this.name = res.data.data.name;
           this.phone = res.data.data.phone;
           this.type = res.data.data.type;
              this.role_id=res.data.data.role_id;
             this.employee_id=res.data.data.employee_id;
    
        })
        .catch((err) => {
           console.warn(err)
        });

         
    },


    
  loadDefaults(){

        axios.get(`/api/admin-panel/getALLRoles`)
       .then(res => {
         this.roles = res.data.data;
                         });
      
 

       axios.get(`/api/employee`)
        .then(res => {
           this.employees = res.data.data;
                     })

  },  
  

           

     

    createNew() {
      this.user_name = null;
          this.name = null;
           this.phone = null;
           this.type = null;
           this.role_id=null;
           this.employee_id=null;

      this.$v.$reset();
    
  }
 },
  watch: {
    id: {
      immediate: true,
      handler(val, oldVal) {
        if (val > 0) this.load();
        else if (val == 0) this.createNew();
      },
    },
  },

  
  created() {
       this.loadDefaults(); 
            
    }
    };
</script>
<style scoped></style>
