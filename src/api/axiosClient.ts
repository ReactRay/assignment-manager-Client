import axios from "axios";

const baseURL = import.meta.env.DEV
    ? "https://localhost:5001/api"
    : "https://app-schoolsit-eastus-dev-001-e3bgeqbjfqdqhnbv.canadacentral-01.azurewebsites.net/api";

const axiosClient = axios.create({
    baseURL,
    withCredentials: false,
});



axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        if (error.response?.status === 403) {
            console.warn("Forbidden");
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
