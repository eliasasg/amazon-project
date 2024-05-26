import axios from "axios"

const axiosInstance = axios.create({
    // baseURL: "http://localhost:5000",
    // amazon-api-deploy
    baseURL: "https://project-two-api-deploy.onrender.com"
})
export {axiosInstance}