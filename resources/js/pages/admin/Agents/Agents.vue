<template>
  <div>
    <h3>{{ $t("admin.agents") }}</h3>
    <!-- itemDialog -->
    <v-dialog v-model="itemDialog" scrollable max-width="60vw">
      <agent @close="itemDialog = false; load();" :id="itemId" />
    </v-dialog>
    <!-- add Dialog -->
    <v-dialog v-model="addDialog" scrollable max-width="60vw">
      <register @close="addDialog = false"/>
    </v-dialog>
    <!-- controls -->
    <v-row>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="addDialog = true" icon>
        <v-icon>{{ icons.mdiPlusThick }}</v-icon>
      </v-btn>
    </v-row>
    <!-- cards -->
    <div
      class="text-center"
      v-if="isLoading"
      width="100%"
      style="height: 50vh; "
    >
      <v-progress-circular
        :width="7"
        :size="70"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-slide-y-transition mode="in-out" v-else>
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
            <v-btn small icon @click="openItem(item.id)">
              <v-icon>{{ icons.mdiOpenInApp }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>
                <div>{{ item.phone }}</div>
                <div class="d-flex justify-end">
                  <v-switch
                    class="mx-2"
                    color="blue"
                    :input-value="item.isConfirmed == 0 ? false : true"
                    readonly
                  ></v-switch>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-slide-y-transition>

    <div class="text-center">
      <!-- <v-pagination v-model="page" :length=" total / limit" :total-visible="5" @input="load" circle></v-pagination> -->
    </div>
  </div>
</template>
<script>
import { mdiOpenInApp, mdiPlusThick, mdiCheck } from "@mdi/js";
import agent from "./Agent";
import axios from "axios";
import register from "./../../Auth/Register";

export default {
  name: "agents",

  components: {
    agent,
    register,
  },

  metaInfo() {
    const locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Agents" : "العملاء",
    };
  },

  data() {
    return {
      icons: {
        mdiOpenInApp,
        mdiPlusThick,
      },
      itemDialog: false,
      addDialog: false,
      items: [],
      page: 1,
      limit: 10,
      total: 0,
      isLoading: false,
      itemId: 0,
    };
  },
  methods: {
    openItem(id) {
      this.itemId = id;
      this.itemDialog = true;
    },
    load() {
      axios
        .get(`/api/gallery`)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => {
          console.warn(err)
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.load();
    });
  },
};
</script>
<style scoped></style>
