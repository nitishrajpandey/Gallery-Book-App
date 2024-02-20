import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGalleryBookApi } from "../Api/fetchGalleryBookApi"


export const fetchGallerySearchAsync = createAsyncThunk("gallerySearch/fetchGalleryBookApi",
    async (value = "laptop") => {
        const { data } = await fetchGalleryBookApi(value);
        return data
    }
)

export const gallerySearchSlice = createSlice({
    name: "gallerySearch",
    initialState: {
        value: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGallerySearchAsync.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default gallerySearchSlice.reducer