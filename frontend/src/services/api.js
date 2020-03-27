import axios from 'axios';

// define a baseURL do backend
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;