<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Built using Vue.js and Vuetify
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          text: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/johnmdrogers/',
        },
        {
          text: 'mdi-instagram',
          link: 'https://www.instagram.com/johnr0g/',
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
