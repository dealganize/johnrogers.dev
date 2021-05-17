import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00008b',
        secondary: '#00008b',
        accent: '#3D87E4',
      },
      dark: {
        primary: '#00008b',
        secondary: '#00008b',
        accent: '#3D87E4',
      },
    },
  },
})
