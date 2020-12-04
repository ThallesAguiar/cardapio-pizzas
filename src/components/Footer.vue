<template>
  <v-bottom-navigation :value="value" color="error" grow dark app>
    <v-btn to="/">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="menus">
      <span>Cardapios</span>

      <v-icon>mdi-pizza</v-icon>
    </v-btn>

    <v-btn to="bake">
      <span>Como assar</span>

      <v-icon>mdi-clock</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
};
</script>

<style>
</style>