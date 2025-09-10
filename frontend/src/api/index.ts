import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_DEV_BASE_URL_V1,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
})

export default api