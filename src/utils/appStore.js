import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import configReducer from "./configSlice"
import vedioReducer from "./vediosSlice"
const appStore = configureStore({
     reducer:{
        user:userReducer,
        config:configReducer,
        vedio:vedioReducer,
     }
})

export default appStore;