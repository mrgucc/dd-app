import axios from 'axios';
const apiClient = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
// const instance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
export default apiClient;
