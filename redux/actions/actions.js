import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../service/authAPI"
import axios from "axios";
// import axios from "axios";
const baseUrl = "https://nextjs-app-backend.vercel.app"

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
    try {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
        // const res = await loginAPI(data)
        // const res = await axios.post(`${baseUrl}/api/signin`, data, { headers })
        const res = await axios.get(`${baseUrl}`, { headers })
        console.log(res)
        return res
    } catch (error) {
        console.log(res)
    }
})