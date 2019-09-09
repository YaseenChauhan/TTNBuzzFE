import axios from 'axios';
import {BASE_URL} from './constants'

const axiosInstance = axios.create({
    baseURL: BASE_URL
});


// axiosInstance.interceptors.request.use(config => {
//     const token = getToken();
//     console.log(`token: ${token}`);
//     config.headers.Authorization = token;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

export default axiosInstance;