<template>
  <div class="body">
      <!-- cycle -->
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-container>

      <br/>
      <br/>
      <InfoPizza/>
      <br/>
      <br/>
      <h2 class="font-weight-black">
        As pizzas são feitas com todo cuidado e carinho para o melhor sabor
        para o cliente. Elas são feitas com molho caseiro e não os comprados,
        queijo ralado e oregáno, e para completar, uma massa fofinha e gostosa
        demais.<br />
        As pizzas são baseadas nas pizzas da Cia das Pizzas, pois foi lá que
        adquiri a experiência de trabalhar com pizzas.
      </h2>
      <h1>BOM APETITE!!!!!</h1>
    </v-container>
  </div>
</template>

<script>
import InfoPizza from './InfoPizza'
export default {
  components: {
    InfoPizza
  },
  data: () => ({
    items: [
      {
        src: "https://thalles-pizzas.s3-sa-east-1.amazonaws.com/mista.jpg",
      },
      {
        src: "https://thalles-pizzas.s3-sa-east-1.amazonaws.com/cornbacon.jpg",
      },
      {
        src: "https://thalles-pizzas.s3-sa-east-1.amazonaws.com/calabresa.jpg",
      },
      {
        src: "https://thalles-pizzas.s3-sa-east-1.amazonaws.com/crocante.jpg",
      },
    ],
  }),
};
</script>

<style>
.body {
  background-image: url("../assets/fundo.jpg");
  background-repeat: repeat;
  color: aliceblue;
}
</style>