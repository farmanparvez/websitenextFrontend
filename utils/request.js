import axios from "axios";
const baseUrl = "https://nextjs-app-backend.vercel.app"
// const baseUrl = "https://website-backend-git-dev-farmanparvez.vercel.app"
// const baseUrl = "https://website-backend-git-dev-farmanparvez.vercel.app"

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}

export const requests = (config) => {
    const configs = {
        method: config?.method ? config?.method : 'GET',
        url: config?.fullUrl ? config?.fullUrl : `${baseUrl}/${config?.url}`,
        headers: config?.headers ? config?.headers : headers,
        body: config?.body ? config?.body : null
    }
    return axios.request(configs).then((res) => res.data)
}