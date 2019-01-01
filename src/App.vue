<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "./components/NavBar.vue";
  import Carousel from "./components/Carousel.vue"
  // import WpClient from ".services/WpClient.js"
  import axios from 'axios'

  export default {
    name: "app",
    components: {
      NavBar,
      Carousel
    }
  };
</script>
<style>
</style>
