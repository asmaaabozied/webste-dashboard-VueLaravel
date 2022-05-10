<template>
  <v-container fill-height class="d-flex align-center justify-center">
    <v-card flat>
      <v-img :src="img" height="20rem" contain></v-img>
      <v-card-text>
        <div class="text-center">
          <h2>{{ $t("auth.error401") }}</h2>
          <div>
            <h4>{{ $t("auth.unauthorized") }}</h4>
          </div>
          <div>{{ $t("auth.returnToMain") }}</div>
          <router-link :to="{ name: 'home' }">{{
            $t("topNav.home")
          }}</router-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../../assets/images/page401.svg"),
    };
  },
};
</script>

<style></style>
