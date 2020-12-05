<template>
  <v-card class="bg" dark>
    <v-tabs vertical color="warning">
      <v-tab> <v-icon left>mdi-pizza</v-icon>PREMIUM </v-tab>
      <v-tab> <v-icon left>mdi-pizza</v-icon>TRADICIONAL </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="font-weight-black">Pedaços: 12</p>
            <v-divider></v-divider>
            <p class="font-weight-black">Sabores: 3</p>
            <v-divider></v-divider>
            <p class="font-weight-black">
              Quais: Americana, Bacon,Frango cheddar, Frango catupiry, Bagunça, Corn bacon, Frango crocante,
              Milho, Napolitana, Strogonoff de frango com ou seu palha. 
            </p>
            <v-btn to="/menus" color="error">CARDÁPIO</v-btn>
            <v-divider></v-divider>
            <p class="mb-0 font-weight-black">R$: 25</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="font-weight-black">Pedaços: 12</p>
            <v-divider></v-divider>
            <p class="font-weight-black">Sabores: 2</p>
            <v-divider></v-divider>
            <p class="font-weight-black">
              Quais: Calabresa, Frango, Marguerita, Mussarela, Presunto e
              queijo.
            </p>
            <v-btn to="/menus" color="error">CARDÁPIO</v-btn>
            <v-divider></v-divider>
            <p class="mb-0 font-weight-black">R$: 20,00</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {};
</script>
