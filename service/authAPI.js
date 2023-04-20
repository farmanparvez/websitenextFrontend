import { requests } from "../utils/request"

export const loginAPI = async (data) => {
    return requests({
    method: 'POST', url: `api/signin`, headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }, body: data
}
)}