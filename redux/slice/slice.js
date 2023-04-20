import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { login } from "../actions/actions"
// Initial state
const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    authState: false,
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder
    //         .addCase(login.pending, (state, action) => {
    //             state.isLoading = true
    //         })
    //         .addCase(login.fulfilled, (state, action) => {
    //             console.log(action.payload)
    //         })
    //         .addCase(login.rejected, (state, action) => {
    //             state.isLoading = true
    //             state.isError = true
    //         })
    // },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
            })
            // .addCase(HYDRATE, (state, action) => {
            //     state.authState = action.payload.authSlice.authState
            // })
    }

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(login.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(login.fulfilled, (state, { payload }) => {
    //             When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
    //             state.isLoading = false
    //             state.data = payload;
    //         })
    //         .addCase(login.rejected, (state) => {
    //             state.isLoading = false
    //         })
    //         .addCase(HYDRATE, (state, action) => {
    //             state.authState = action.payload.authSlice.authState
    //         })
    // },

    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         console.log(state)
    //         console.log(action)
    //         state.authState = action.payload.authSlice.authState
    //         // return {
    //         //     ...state, authState: action.payload.authSlice.authState,
    //         // };
    //     },
    // },
});

export const { setAuthState } = authSlice.actions;

// export const selectAuthState = (state) => state.authSlice;

export default authSlice.reducer;