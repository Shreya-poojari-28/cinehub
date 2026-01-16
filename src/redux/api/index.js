import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {}
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = accessToken

        config.headers["Accept"] = 'application/json'
        config.headers["Authorization"] = `Bearer ${token}`;

        return config;
    },
    (error) => Promise.reject(error)

)

export default axiosInstance