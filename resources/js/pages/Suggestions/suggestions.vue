<template>
  <div id="suggestContainer">
    <v-row style="height: 100%">
      <v-col sm="12" md="6" lg="4" xl="4">
        <v-card class="elevation-0 d-flex flex-column" style="height: 100%">
          <v-card-title>{{ $t('topNav.suggestions')}}</v-card-title>
          <div id="suggestList" style="flex: 1">
            <v-list v-if="items.length > 0" three-line style="cursor: pointer;">
              <template v-for="(item, index) in items">
                <div :key="index">
                  <v-divider></v-divider>
                  <v-list-item @click="currentItem = item">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content v-if="item">
                      <v-list-item-title v-text="item.user_info.user_name"></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.text.length > 50 ? item.text.substr(0, 45) + '...' : item.text"
                      ></v-list-item-subtitle>
                      <v-list-item-subtitle v-html=" formatDate(item.created_at) "></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </template>
              <v-divider></v-divider>
            </v-list>
          </div>
          <div>
            <v-pagination v-model="page" @input="load" :length="lastPage" :total-visible="5" circle></v-pagination>
          </div>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" lg="8" xl="8">
        <div id="thread" class="px-2 mb-2">
          <v-card v-if="items.length > 0" class="elevation-1 ma-4">
            <v-card-title class="headline">{{currentItem.user_info.user_name}}</v-card-title>
            <v-card-text>
              <p v-text="currentItem.text"></p>
              <p v-text="formatDate(currentItem.created_at)"></p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {} from "@mdi/js";

export default {
  data() {
    return {
      icons: {},
      page: 1,
      lastPage: 0,
      items: [],
      currentItem: {   }
    };
  },
  methods: {
    load() {
      axios
        .get("/api/suggestion", { params: { page: this.page } })
        .then(({ data }) => {
          this.lastPage = data.data.resource.last_page;
          this.items = data.data.resource.data;

          if (this.items.length) this.currentItem = this.items[0];
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
#suggestContainer {
  height: 85vh;
  width: 100%;
  overflow: hidden;
}

#suggestList {
  overflow-y: scroll;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #8bd886;
}
</style>