<template>
  <div>
    <div class="text-center">
      <h2 class="primary--text">{{$t('auth.title')}}</h2>
      <h3>{{$t('auth.titleSub')}}</h3>
    </div>
    <v-row justify="center">
      <v-col cols="12" md="4" xl="3">
        <register @close="closePage" type="registerVisitor" @confirmcode="confirmCode" />
      </v-col>
    </v-row>
      <div class="text-center">
          <span>{{ $t("auth.ifHave") }}</span>
          <br>
          <v-btn rounded outlined color="green" class="mt-3">
              <router-link class="text-sm-center" :to="{name : 'login'}" style="text-decoration: none">{{$t('auth.login')}}</router-link>
          </v-btn>
      </div>
    <div style="height: 100px; width: 200px;"></div>
  </div>
</template>
<script>
import register from "./Register";

export default {
  components: {
    register
  },
  methods: {
    closePage() {
      this.$router.push({ name: "home" });
    },
    confirmCode(username) {
      this.$router.push({ name: 'confirmCode', params: { username: username } })
    }
  }
};
</script>
<style scoped>
</style>
