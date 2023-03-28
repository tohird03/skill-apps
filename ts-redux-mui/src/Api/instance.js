import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})

export { instance }