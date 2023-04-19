import { request } from "../utils/request"
const baseUrl = "https://website-backend-git-dev-farmanparvez.vercel.app/"

export const loginAPI = async (data) => await request({ method: 'post', url: `${baseUrl}/api/signin`, data })