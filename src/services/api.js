import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/luksops/json-server-rocketshoes',
});

export default api;
