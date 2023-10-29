import axios from "axios";

export const reqResApi = (url = 'https://localhost:7053/api/v1') => {
    return axios.create({
        baseURL: url
    })
}