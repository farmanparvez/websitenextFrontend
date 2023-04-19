import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../service/authAPI"

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
    try {
        const res = await loginAPI(data)

        console.log(res)
        return res
    } catch (error) {

    }
})