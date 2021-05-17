<template>
  <section id="contact">
    <v-container fluid>
      <v-row align="center" class="mt-5" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Contact</h1>

              <h3 class="font-weight-light mt-3">
                <b>Telephone: </b> +353 (87) 707-3449
              </h3>
              <h3 class="font-weight-light">
                <b>Email:</b> johnmdrogers@gmail.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="name"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-textarea v-model="textArea" label="Message" required />

                <v-btn
                  :disabled="!valid"
                  color="primary"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  @click="submit"
                >
                  Submit
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <BorderWavesBlue />
  </section>
</template>

<script>
// import {db} from '@/main'
import BorderWavesBlue from './BorderWavesBlue'

export default {
  components: {
    BorderWavesBlue,
  },
  data: () => ({
    icons: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'],
    valid: true,
    name: '',
    email: '',
    textArea: '',
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: '',
    },
  }),
  methods: {
    submit() {
      alert('coming soon!')
      /* db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Whatever"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Whatever"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      }) */
    },
  },
}
</script>

<style scoped>
#contact {
  background-color: #f4f7f5;
}
</style>
