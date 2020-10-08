<template>
  <v-app>   
    <nav-comp></nav-comp>
    <v-main>
      <router-view></router-view>      
    </v-main>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import NavComp from './components/NavBar';
import FooterComp from './components/Footer';

export default {
  name: 'App',

  components: {
    NavComp,
    FooterComp
  },

  data: () => ({
    //
  }),
};
</script>
