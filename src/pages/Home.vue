<template>
    <Carousel></Carousel>
</template>
<script>
 export default{
    name:"home",
    data(){
      return {msg: 'hello vue'}
    },
    components: {
      'Carousel' : Tabs
    }
  }
</script>
