import { combineReducers } from "@reduxjs/toolkit";
import { reusableSlice } from "../reusableSlice";

const reducers = combineReducers({
    reusableSlice: reusableSlice.reducer
})

export default reducers;