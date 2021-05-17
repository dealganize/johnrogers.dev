<template>
  <section id="hero">
    <v-parallax :src="require('@/assets/img/bgHero.jpg')">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">
                Welcome to my page
              </h1>
              <h1 class="font-weight-light">
                I'm John, and I like to build things.
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                class="mt-5"
                @click="$vuetify.goTo('#features')"
              >
                My projects
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <BorderWaves class="wave" />
    </v-parallax>
    <v-container id="features" fluid class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-light">
                Some of my personal learning projects:
              </h1>
            </v-col>
            <v-col
              v-for="(feature, i) in features"
              :key="i"
              cols="12"
              sm="4"
              class="text-center"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                  <v-btn
                    text
                    plain
                    :ripple="false"
                    @click="redirectToDemo(feature.link)"
                    >To demo ></v-btn
                  >
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BorderWaves from './borderWaves'
export default {
  components: {
    BorderWaves,
  },
  data() {
    return {
      features: [
        {
          img: require('@/assets/icons/cloudy.png'),
          title: 'Weather app',
          text: 'Simple weather app using weatherstack API, built using Handlebars and Node.',
          link: 'https://rogers-node-weather-app.herokuapp.com/',
        },
        {
          img: require('@/assets/icons/hamburger.png'),
          title: 'Burger Builder',
          text: 'Learning project for creating and ordering a burger, built using React, CSS, and Firebase.',
          link: 'https://burger-builder-f9483.web.app/',
        },
        {
          img: require('@/assets/icons/alien.png'),
          title: 'Alien Game',
          text: 'Question based, front-end web-game built using Vue.js.',
          link: '',
        },
      ],
    }
  },
  methods: {
    redirectToDemo(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style>
#hero {
  z-index: 0;
}
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
.v-parallax__content {
  padding: 0px !important;
  height: 100%;
}
</style>
