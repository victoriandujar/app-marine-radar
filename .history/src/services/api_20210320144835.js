import axios from 'axios';

const api = axios.create({
  baseURL: 'http://161.35.130.224:3333',
});

export default api;
