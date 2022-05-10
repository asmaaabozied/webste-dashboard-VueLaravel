<template>
  <div>
    <v-hover v-slot:default="{ hover }" close-delay="200">
      <!-- single image small preview -->
      <v-img v-if="src" :src="src" :width="width" :height="height" @click="imageModal = true">
        <div id="image-preview" class="d-flex justify-center align-center">
          <v-overlay :absolute="true" :value="hover">
            <v-icon color="white" x-large>{{icons.mdiArrowExpandAll}}</v-icon>
          </v-overlay>
        </div>
      </v-img>
      <!-- multi image small preview-->
      <v-carousel v-else-if="images" :width="width" :height="height">
        <v-carousel-item
          v-for="(item,i) in images"
          :key="i"
          :src="item"
          reverse-transition="fade-transition"
          transition="fade-transition"
          @click="imageModal = true"
        >
          <div id="image-preview" class="d-flex justify-center align-center">
            <v-overlay :absolute="true" :value="hover">
              <v-icon color="white" x-large>{{icons.mdiArrowExpandAll}}</v-icon>
            </v-overlay>
          </div>
        </v-carousel-item>
      </v-carousel>
      <div v-else :style="{ 'width': width, 'height': height, 'background-color: lightgray;': 1 }"></div>
    </v-hover>

    <!-- full screen dialog  -->
    <v-dialog v-model="imageModal" scrollable fullscreen transition="fade-transition">
      <v-card id="preview-card-back">
        <v-card-title id="preview-toolbar" class="d-flex justify-space-between">
          <v-btn @click="imageModal = false" small fab>
            <v-icon>{{icons.mdiArrowLeft}}</v-icon>
          </v-btn>
          <v-btn @click="downloadFile" small fab>
            <v-icon>{{icons.mdiDownload}}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="d-flex justify-center align-center">
          <div id="image-preview-full" class="d-flex justify-center align-center">
            <v-img v-if="src" :src="src" contain></v-img>
            <v-carousel
              v-model="currentIndex"
              v-else-if="images"
              height="100%"
              hide-delimiters
              hide-delimiter-background                            
            >
              <v-carousel-item
                v-for="(item,i) in images"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition" 
              >
              <v-img :src="item" contain></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiArrowExpandAll, mdiArrowLeft, mdiDownload } from "@mdi/js";
export default {
  props: ["width", "height", "src", "images"],
  data() {
    return {
      icons: {
        mdiArrowExpandAll,
        mdiArrowLeft,
        mdiDownload
      },
      imageModal: false,
      currentIndex: null
    };
  },
  methods: {
    downloadFile() {
      const url = this.src ? this.src : this.images[this.currentIndex];
      const method = "GET";
      axios
        .request({
          url,
          method,
          responseType: "blob"
        })
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", url.replace(/^.*[\\\/]/, ""));
          document.body.appendChild(fileLink);

          fileLink.click();
          fileLink.remove();
        })
        .catch(err => {
console.warn(err)
        });
    }
  }
};
</script>

<style scoped>
#image-preview {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

#preview-toolbar {
  background: linear-gradient(to bottom, black, rgba(255, 0, 0, 0));
}

#image-preview-full {
  width: 70%;
}

#preview-card-back {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 !important;
}
</style>