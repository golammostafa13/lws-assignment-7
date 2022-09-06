import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lws-assignment-7.herokuapp.com/api",
});

export default axiosInstance;
