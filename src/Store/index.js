import { configureStore } from "@reduxjs/toolkit";
import backgroundChangerReducer from "./backgroundChangerSlice"
import gallerySearchReducer from "./gallerySearchSlice";
export const myStore = configureStore({
    reducer: {
        backgroundChanger: backgroundChangerReducer,
        gallerySearch: gallerySearchReducer
    }
})

export default myStore;