<template>
  <div class="d-flex flex-row justify-center mt-10">
    <v-card width="60vw" elevation="3" class="pa-12 mb-12">
      <v-card-title>{{ $t("admin.sparePart") }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="name_ar"
              :label="$t('service.name_ar')"
              required
             :error-messages="nameArErrors"

               :rules="[(v) => !!v || $requiredRules]"
              outlined
              rounded
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="name_en"
 :rules="[(v) => !!v || $requiredRules]"
  :error-messages="nameEnErrors"
              :label="$t('service.name_en')"
              required
              outlined
              rounded
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>

                <v-col cols="6">
            <v-text-field
              v-model="code"
 :rules="[(v) => !!v || $requiredRules]"
              :label="$t('code')"
              :error-messages="CodeErrors"
              required
              outlined
              rounded
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
            ></v-text-field>
          </v-col>

               <v-col cols="12">
                        <v-select
                                :items="devices"
                                v-model="device_id"
                                :label="$t('general.devices')"
                                :item-text="$i18n.locale == 'en' ? 'name_en' : 'name_ar' "
                                item-value="id"
                                outlined
                                rounded
                                dense
                        ></v-select>
                    </v-col>

                    
               <v-col cols="12">
                        <v-select
                                :items="manufactures"
                                v-model="manufacture_id"
                                :label="$t('manufactures')"
                                :item-text="$i18n.locale == 'en' ? 'name_en' : 'name_ar' "
                                item-value="id"
                                outlined
                                rounded
                                dense
                        ></v-select>
                    </v-col>

        </v-row>
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
import { required } from "vuelidate/lib/validators";

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
      name_ar: null,
      name_en: null,
      code:null,
      device_id:null,
      items:[],
      devices:[],
      manufactures:[],
      manufacture_id:[],


      icons: {},
    };
  },

  
  validations: {
    name_ar: {
      required,
    },
    name_en: {
      required,
    },
    code:{
       required,
    }
  },

   computed: {
    nameArErrors() {
      const errors = [];
      if (!this.$v.name_ar.$dirty) return errors;
      !this.$v.name_ar.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors() {
      const errors = [];
      if (!this.$v.name_en.$dirty) return errors;
      !this.$v.name_en.required && errors.push(this.$t("validate.required"));
      return errors;
    },

    CodeErrors(){
  const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push(this.$t("validate.required"));
      return errors;

    }
  },
  methods: {
    save() {
           this.$v.$touch();
          if (this.$v.$invalid) return;
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.$notify({
      //     text: this.$t("general.checkInputs"),
      //     type: "warning",
      //   });
      //   return;
      // }

        let url  = `/api/admin-panel/sparePart/createUpdate`;
        let data = {
            name_ar: this.name_ar,
            name_en: this.name_en,
             code: this.code,
             device_id:this.device_id,
             manufacture_id:this.manufacture_id,

        };

        if (this.id != 0) {
            data["id"] = this.id;
        }

        axios
            .post(url, data)
            .then((res) => {
                this.$notify({
                    text: this.$t("general.success"),
                    type: "success",
                });
                this.$router.push({name: "sparePart"});
            })
            .catch((err) => {
                console.warn(err)
        });


    },
    load() {
      axios
        .get(`/api/admin-panel/sparePart/getData/${this.id}`)
        .then((res) => {
          this.name_ar = res.data.data.resource.name_ar;
          this.name_en = res.data.data.resource.name_en;
           this.code = res.data.data.resource.code;
           this.device_id = res.data.data.resource.device_id;
         this.manufacture_id = res.data.data.resource.manufacture_id;
        })
        .catch((err) => {
           console.warn(err)
        });

         
    },


    
  loadDefaults(){

        axios.get(`/api/admin-panel/devices/getAlldevices?page=${this.page}`)
       .then(res => {
         this.devices = res.data.data.resource.data
                         });
      
 

       axios.get(`/api/manufacture`)
        .then(res => {
         this.manufactures = res.data.data.data
                         });

  },  
  

           

     

    createNew() {
      this.name_ar = null;
      this.name_en = null;
       this.code = null;
       this.device_id=null;
       this.manufacture_id=null;
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
