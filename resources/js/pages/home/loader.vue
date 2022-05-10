<template>
  <v-card flat class="pa-4" style="z-index: 999999">
    <div class="d-flex flex-column px-4" :style="`height: 95vh;`">
      <div>
        <v-row justify="end">
          <v-col cols="6" md="4" class="d-flex justify-end">
            <div class="internalAc">
              <v-img :src="internalAc" width="16rem" class="" contain></v-img>
              <div class="wave-back">
                <div :style="waveStyle"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row justify="center">
          <v-col cols="12" md="3">
            <div class="text-center text-h4" v-text="$t('topNav.inmaa')"></div>
            <div
              class="text-center text-h6 mt-2"
              v-text="$t('home.loading')"
            ></div>
          </v-col>
        </v-row>
      </div>
      <div class="mt-auto">
        <v-row justify="start">
          <v-col cols="6" md="4">
            <div class="externalAc">
              <v-img :src="ac" width="15rem"></v-img>
              <v-img :src="fan" width="7.3rem" class="fan"></v-img>
              <v-img :src="grill" width="12rem" class="grill"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      internalAc: require("../../../assets/images/loader/acInternal.png"),
      ac: require("../../../assets/images/loader/ac.png"),
      fan: require("../../../assets/images/loader/fan.png"),
      grill: require("../../../assets/images/loader/grill.png"),
      pipes: require("../../../assets/images/loader/pipes.svg"),
    };
  },

  computed: {
    waveStyle() {
      return `
        position: absolute;
        top: 0;
        left: 0;
        width: 16rem;
        height: 6.5rem;
        background-color: white;
        background-size: cover;
        background-position: center;
        mask-image: url(${require("../../../assets/images/loader/wave.png")});
        mask-size: contain;
        mask-repeat: no-repeat;
  `;
    },
  },
};
</script>

<style>
/* internal ac */
.internalAc {
  position: relative;
}

.wave-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 16rem;
  height: 5rem;
  background: linear-gradient(178deg, #09e15d, #2180f0);
  background-size: 400% 400%;
  -webkit-animation: wave 2s ease infinite;
  -moz-animation: wave 2s ease infinite;
  animation: wave 2s ease infinite;
}

@-webkit-keyframes wave {
  0% {
    background-position: 56% 0%;
  }
  50% {
    background-position: 45% 100%;
  }
  100% {
    background-position: 56% 0%;
  }
}
@-moz-keyframes wave {
  0% {
    background-position: 56% 0%;
  }
  50% {
    background-position: 45% 100%;
  }
  100% {
    background-position: 56% 0%;
  }
}
@keyframes wave {
  0% {
    background-position: 56% 0%;
  }
  50% {
    background-position: 45% 100%;
  }
  100% {
    background-position: 56% 0%;
  }
}

/* external ac */
.externalAc {
  position: relative;
}

.grill {
  position: absolute;
  top: 1rem;
  left: 1.6rem;
}

.fan {
  position: absolute;
  top: 1.3rem;
  left: 1.7rem;
  -webkit-animation: spin 10s linear infinite;
  -moz-animation: spin 10s linear infinite;
  animation: spin 10s linear ease-in-out infinite;
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  30% {
    -webkit-transform: rotate(2600deg);
  }
  60% {
    -webkit-transform: rotate(4000deg);
  }
  80% {
    -webkit-transform: rotate(4500deg);
  }
  100% {
    -webkit-transform: rotate(4750deg);
  }
}

/* html {
  overflow-x: hidden;
  overflow-y: hidden;
} */
</style>
