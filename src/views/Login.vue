<template>
  <v-container fill-height>
    <v-card
      width="600"
      class="mx-auto"
    >
      <form>
        <v-app-bar
          flat
        ></v-app-bar>
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
        <v-btn
            class="mr-4"
            @click="submit"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
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
  methods: {
    submit () {
      console.log(123)
    },
    clear () {
      console.log(456)
    },
  }
}
</script>

<style scoped>

</style>
