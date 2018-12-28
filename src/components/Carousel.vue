<template>
  <div>
    <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" indicators background="#ababab" :interval="4000" img-width="1024" img-height="100vh" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  mounted: function test() {



    const wpClient = axios.create({
      baseURL: 'https://public-api.wordpress.com',
      timeout: 1000,
    });

    wpClient.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', process.env.WP_REDIRECT_URI);
    params.append('code', process.env.WP_CODE);
    params.append('client_id', process.env.WP_CLIENTID);
    params.append('client_secret', process.env.WP_SECRET);


    wpClient.post('/oauth2/token', params)
      .then(function(response) {
        console.log(response);
        const authStr = 'Bearer '.concat(response.client_secret);
        console.log(AuthStr)
        debugger;
        //axios.defaults.headers.get['Content-Type'] =';charset=utf-8';
        wpClient.get('/rest/v1.1/sites/oceanesohier.wordpress.com/media/', { headers: { 'Content-Type': 'application/json', Authorization: AuthStr } })
          .then(function(response) {
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });

  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  }
}

</script>
<style>
.carousel-indicators li {
  position: relative;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
}

</style>
