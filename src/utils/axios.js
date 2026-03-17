// import axios from "axios";

// // Create Axios instance
// const API = axios.create({
//   baseURL: "https://ecommerce-mern-backend-upua.onrender.com/api", // your backend render URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Request interceptor to attach token
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://ecommerce-mern-backend-1.onrender.com/api", // change if your backend port is different
// });

// export default instance;


import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-mern-backend-1.onrender.com/api",
});

// 🔥 ADD THIS (VERY IMPORTANT)
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;