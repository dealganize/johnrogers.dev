<template>
  <section id="about">
    <v-container fluid>
      <v-row class="my-5" align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="display-2">About me</h1>
              <h1 class="display-1 mb-3">Always learning.</h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    :src="require('@/assets/icons/grad.png')"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Graduated in 2016 with a 2:1 B.Sc in Computer Science and
                    Software Engineering from Maynooth University in Ireland.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    :src="require('@/assets/icons/suitcase.png')"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    After roles in New York and London, I moved to Berlin in
                    2019 and got my first front end position with
                    <a href="https://www.softgames.com/">Softgames GmbH</a>,
                    building automation tools with React and Node.js. I then
                    accepted a role at my current company,
                    <a href="https://www.easybell.de/">easybell GmbH</a>, where
                    I primarily use Vue.js.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    :src="require('@/assets/icons/puzzle.png')"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    In my spare time, I love to play sports - mainly Gaelic
                    football, soccer, and basketball. I also enjoy movies, video
                    games and occasionally chess!
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex radius">
              <v-img
                :src="require('@/assets/img/me.jpg')"
                class="ml-auto mr-auto radius"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
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
}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
