import axios from 'axios'

Class WpCLient {

  constructor() {
    this.wpClient = axios.create({
      baseURL: 'https://public-api.wordpress.com',
      timeout: 1000
    });

  }

}

function getToken() {

  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('username', process.env.WP_USERNAME);
  params.append('password', process.env.WP_PASSWORD);
  params.append('client_id', process.env.WP_CLIENT_ID);
  params.append('client_secret', process.env.WP_SECRET);

  wpClient.post('/oauth2/token', params)
    .then(function(response) {
      console.log(response);
      return response.access_token
    })
    .catch(function(error) {
      console.log(error);
    });

}

export default WpClient
