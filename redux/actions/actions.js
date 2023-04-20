import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../service/authAPI"
import axios from "axios";
// import axios from "axios";
const baseUrl = "https://website-backend-git-dev-farmanparvez.vercel.app/"

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
    try {
        const res = await loginAPI(data)
        // const res = await axios.post(`${baseUrl}/api/signin`, data)
        console.log(res)
        return res
    } catch (error) {

    }
})