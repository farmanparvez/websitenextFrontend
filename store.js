import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./redux/slice/slice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  authSlice
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, authSlice: { authState: action?.payload?.authSlice?.authState },
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}

const makeStore = () => configureStore({ reducer: masterReducer });

export const wrapper = createWrapper(makeStore, { debug: true });