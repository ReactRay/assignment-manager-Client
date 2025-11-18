import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://localhost:5001/api",
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
    (error) => {
        return Promise.reject(error);
    }
);

// --- RESPONSE INTERCEPTOR: Handle unauthorized responses ---
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired OR no token
            localStorage.removeItem("token");
            window.location.href = "/login";   // force redirect
        }

        if (error.response?.status === 403) {
            console.warn("Forbidden: You do not have permission for this action.");
        }

        return Promise.reject(error);
    }
);


export default axiosClient;
