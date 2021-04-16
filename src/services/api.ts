import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-backend-felipe.herokuapp.com/api/app',
});

export default api;
