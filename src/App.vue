<template>
  <v-app>
    <Navbar />
    <ButtonsFloat />

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>

    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import ButtonsFloat from "./components/ButtonsFloat";
import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    Navbar,
    ButtonsFloat,
    Footer,
  },

  data: () => ({}),
  created() {
    let path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      this.$router.push(`/${path}`);
    }
  },
};
</script>

<style>
body {
  background-image: url("./assets/fundo.jpg");
  background-repeat: repeat;
}
* {
  padding: 0;
  margin: 0;
}

</style>