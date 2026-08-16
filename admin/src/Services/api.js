import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.REACT_APP_API_URL || "https://ecommerce-atgp.vercel.app/api",

    withCredentials: true

});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default api;