import axios from 'axios';
import { getToken } from './auth';
import configurations from '../config/urlConfig';

const api = axios.create({
    baseURL : configurations.URL_BACKEND
});

api.interceptors.request.use(async config =>{
    const token = getToken();
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export default api;