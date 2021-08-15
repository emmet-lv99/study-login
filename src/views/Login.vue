<template>
  <v-container fill-height >
    <v-layout column wrap align-content-center justify-center>
      <v-alert type="success">
        I'm a success alert.
      </v-alert>
      <v-alert type="error">
        I'm an error alert.
      </v-alert>

      <v-card
          width="600"
          class="mx-auto"
      >

        <v-app-bar
            flat
        ></v-app-bar>
        <v-card-text>

          <form>
            <v-text-field
                v-model="name"
                :rules="rules.name"
                label="First name"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Normal with hint text"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>
            <div class="pt-10">
              <v-btn
                  class="mr-4"
                  @click="submit"
              >
                Login
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
            </div>
          </form>
        </v-card-text>

      </v-card>
    </v-layout>

  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {

  name: "Login.vue",
  data: () => ({
    name: '',
    password: '',
    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      name: [val => (val || '').length > 0 || 'This field is required'],
    },
  }),
  computed: {
    ...mapState(['allUsers'])
  },
  methods: {
    submit () {
      console.log(this.allUsers)
    },
    clear () {
      console.log(456)
    },
  }
}
</script>

<style scoped>

</style>
