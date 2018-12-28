<template>
  <div id="app">
    <NavBar></NavBar>
    <Carousel></Carousel>
    <Banner></Banner>
  </div>
</template>
<script>
  import NavBar from "./components/NavBar.vue";
  import Carousel from "./components/Carousel.vue";
  import Banner from "./components/Banner.vue";
  // import WpClient from ".services/WpClient.js"
  import axios from 'axios'

  export default {
    name: "app",
    components: {
      NavBar,
      Carousel,
      Banner
    }
  };
</script>
<style>
</style>
