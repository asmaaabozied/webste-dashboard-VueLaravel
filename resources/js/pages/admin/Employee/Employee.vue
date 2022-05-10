<template>
  <v-card>
    <v-card-title>{{ $t("admin.employee") }}</v-card-title>
    <v-card-actions></v-card-actions>
    <v-card-text>
      <v-row>
        <v-avatar
          color="grey lighten-4"
          size="150"
          onclick="document.getElementById('profileImageInput').click();"
        >
          <img v-if="profileImagePreview" :src="profileImagePreview" />
          <v-btn v-else icon x-large>
            <v-icon x-large color="primary">{{
              icons.mdiAccountCircle
            }}</v-icon>
          </v-btn>
        </v-avatar>
        <input
          type="file"
          style="display:none;"
          id="profileImageInput"
          ref="profileImage"
          v-on:change="onProfileImageChange"
        />
      </v-row>
      <div class="red--text" v-for="e in imageErrors" :key="e">{{ e }}</div>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="username"
            :error-messages="usernameErrors"
            :label="$t('auth.username')"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-if="id == 0"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :error-messages="passwordErrors"
            :label="$t('auth.password')"
            outlined
            rounded
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-if="id == 0"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
            v-model="confirm"
            :error-messages="confirmErrors"
            @change="$v.confirm.$touch()"
            @blur="$v.confirm.$touch()"
            :label="$t('auth.confirm')"
            outlined
            rounded
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :label="$t('general.name')"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="nationality"
            :error-messages="nationalityErrors"
            :label="$t('admin.nationality')"
            outlined
            rounded
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="phone"
            :error-messages="phoneErrors"
            :label="$t('auth.phone')"
            outlined
            rounded
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="idNumber"
            :label="$t('admin.idNumber')"
            outlined
            rounded
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select
            :items="roles"
            item-text="label"
            item-value="id"
            v-model="role"
            :label="$t('admin.role')"
            :error-messages="roleErrors"
            rounded
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn rounded color="primary" dark @click="save">{{
        $t("general.save")
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { required, sameAs, requiredUnless } from "vuelidate/lib/validators";
import { mdiEye, mdiEyeOff, mdiAccountCircle } from "@mdi/js";

export default {
  name: "employee",

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Employee" : "موظف",
    };
  },

  data() {
    return {
      icons: {
        mdiEye,
        mdiEyeOff,
        mdiAccountCircle,
      },
      name: null,
      username: null,
      password: null,
      confirm: null,
      nationality: null,
      phone: null,
      idNumber: null,
      showPassword: false,
      profileImagePreview: null,
      profileImage: null,
      roles: [],
      role: null,
      id: this.$route.params.id,
    };
  },
  validations: {
    name: {
      required,
    },
    username: {
      required,
    },
    password: {
      required: requiredUnless(function() {
        if (this.id == 0) return false;
        else return true;
      }),
    },
    confirm: {
      sameAsPassword: sameAs("password"),
      required: requiredUnless(function() {
        if (this.state == 0) return false;
        else return true;
      }),
    },
    nationality: {
      required,
    },
    phone: {
      required,
    },
    idNumber: {
      required,
    },
    role: {
      required,
    },
    profileImage: {
      required: requiredUnless(function() {
        if (this.id == 0) return false;
        else return true;
      }),
    },
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning",
        });
        return;
      }
      let form = new FormData();
      form.append(`name`, this.name);
      form.append(`user_name`, this.username);
      if (this.id == 0) form.append(`password`, this.password);
      form.append(`nationality`, this.nationality);
      form.append(`phone`, this.phone);
      form.append(`id_number`, this.idNumber);
      if (this.profileImage) form.append(`image`, this.profileImage);
      form.append(`role`, this.role);
      if (this.id != 0) form.append("_method", "PUT");
      let url = this.id ? `/api/employee${this.id == 0 ? '' : '/' + this.id }` : `/api/employee`;
      axios
        .post(url, form)
        .then((res) => {
          if (res.data.status != 200) {
           console.warn(err)
            return;
          }
          this.$notify({
            text: this.$t("general.success"),
            type: "success",
          });
          this.$router.go(-1);
        })
        .catch((err) => {
           console.warn(err)
        });
    },
    onProfileImageChange(e) {
      const file = e.target.files[0];
      this.profileImagePreview = URL.createObjectURL(file);
      this.profileImage = this.$refs.profileImage.files[0];
    },
    load() {
      //load employee
      axios
        .get(`/api/employee/${this.id}`)
        .then((res) => {
          let data = res.data.data;
          this.name = data.name;
          this.phone = data.phone;
          this.nationality = data.nationality;
          this.idNumber = data.id_number;
          this.role = data.role;
          this.username = data.user_info.user_name;
          this.profileImagePreview = data.image;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
    createNew() {
      this.name = null;
      this.username = null;
      this.password = null;
      this.confirm = null;
      this.nationality = null;
      this.phone = null;
      this.idNumber = null;
      this.showPassword = false;
      this.profileImagePreview = null;
      this.profileImage = null;
      this.role = null;
      this.$v.$reset();
    },
    loadDefaults() {
      //load roles
      axios
        .get(`/api/allRole`)
        .then((res) => {
          this.roles = res.data.data;
        })
        .catch((err) => {
          console.warn(err)
        });
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
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    confirmErrors() {
      const errors = [];
      if (!this.$v.confirm.$dirty) return errors;
      !this.$v.confirm.required && errors.push(this.$t("validate.required"));
      !this.$v.confirm.sameAsPassword &&
        errors.push(this.$t("validate.confirmNoMatch"));
      return errors;
    },
    nationalityErrors() {
      const errors = [];
      if (!this.$v.nationality.$dirty) return errors;
      !this.$v.nationality.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    roleErrors() {
      const errors = [];
      if (!this.$v.role.$dirty) return errors;
      !this.$v.role.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.profileImage.$dirty) return errors;
      !this.$v.profileImage.required &&
        errors.push(this.$t("validate.required"));
      return errors;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.id == 0) vm.createNew();
      else vm.load();
    });
  },
  created() {
    this.loadDefaults();
  },
};
</script>
<style scoped></style>
