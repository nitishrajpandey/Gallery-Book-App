import { configureStore } from "@reduxjs/toolkit";
import backgroundChangerReducer from "./backgroundChangerSlice"
export const myStore = configureStore({
    reducer: {
        backgroundChanger: backgroundChangerReducer
    }
})

export default myStore;