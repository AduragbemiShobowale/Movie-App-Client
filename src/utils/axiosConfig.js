import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://movie-app-action.onrender.com/",
});

export default axiosInstance;
