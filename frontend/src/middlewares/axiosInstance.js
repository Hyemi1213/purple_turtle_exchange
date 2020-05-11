import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://demoex.be/v1',
    // withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    console.log('요청');
    return config
}, (e) => {
    console.log('요청 실패')
    return Promise.reject(e);
});

export default axiosInstance;