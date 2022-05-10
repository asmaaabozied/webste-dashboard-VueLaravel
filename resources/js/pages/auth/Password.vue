<template>
  <v-card class="pa-5">
    <v-card-title>{{ $t('general.modifyPass') }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="oldPassword"
            :error-messages="oldPasswordErrors"
            :label="$t('auth.oldPassword')"
            outlined
            rounded
            dense
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword  ? icons.mdiEye : icons.mdiEyeOff"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :error-messages="passwordErrors"
            :label="$t('auth.newPassword')"
            outlined
            dense
            rounded
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword  ? icons.mdiEye : icons.mdiEyeOff"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword  ? icons.mdiEye : icons.mdiEyeOff"
            v-model="confirm"
            :error-messages="confirmErrors"
            @change="$v.confirm.$touch()"
            @blur="$v.confirm.$touch()"
            :label="$t('auth.confirm')"
            outlined
            rounded
            dense
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <v-btn rounded class="mx-2" color="primary" @click="save">{{$t('general.save')}}</v-btn>
            <v-btn
              rounded
              class="mx-2"
              color="secondary"
              :to="{ name: 'home' }"
            >{{$t('general.cancel')}}</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import { required, sameAs, email } from "vuelidate/lib/validators";
import { mdiEye, mdiEyeOff } from "@mdi/js";

export default {
  data() {
    return {
      oldPassword: null,
      password: null,
      confirm: null,
      showPassword: false,
      icons: {
        mdiEye,
        mdiEyeOff
      }
    };
  },
  validations: {
    password: {
      required
    },
    confirm: {
      sameAsPassword: sameAs("password"),
      required
    }
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
        this.$notify({
          text: this.$t('general.checkInputs'),
          type: "error"
        });
      }

      axios
        .post("/api/updatePassword", {
          old_password: this.oldPassword,
          new_password: this.password
        })
        .then(res => {
          this.$notify({
            text: this.$t("auth.successChangePass"),
            type: "success"
          });
            this.$store
                    .dispatch("logOut")
                    .then((res) => {
                        this.$notify({
                            text: this.$t("auth.successLogout"),
                            type: "info",
                        });
                    }).catch(err => console.log(err))
                    .finally(() => {
                        this.$router.push({name: "home"});
                    });
          this.$emit('close')
        })
        .catch(err => {
console.warn(err)
        });
    }
  },
  computed: {
    oldPasswordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.$t("validate.required"));
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
    }
  }
};
</script>

<style>
</style>
