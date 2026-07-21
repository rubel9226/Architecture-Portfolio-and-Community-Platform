import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
    withCredentials: true,
    timeout: 30000,
});

// api.interceptors.request.use(
//     (config) => {
//         if (typeof window !== "undefined") {
//         const token = localStorage.getItem("accessToken");

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         const message =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Something went wrong";

//         return Promise.reject(message);
//     }
// );

export default api;