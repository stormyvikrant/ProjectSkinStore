import {configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlice";

export default configureStore({
    reducer:{
        user:userReducer,
    },
});