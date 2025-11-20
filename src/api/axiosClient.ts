import axios from "axios";

// Auto-detect environment
const isDevelopment = import.meta.env.MODE === "development";

// Localhost for dev, Azure for production
const baseURL = isDevelopment
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

// Handle Unauthorized / Forbidden responses
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        if (error.response?.status === 403) {
            console.warn("Forbidden: You do not have permission for this action.");
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
