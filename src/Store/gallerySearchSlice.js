import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGallerySearch } from "../Api/fetchGallerySearch"


export const fetchGallerySearchAsync = createAsyncThunk("gallerySearch/fetchGallerySearch",
    async (value) => {
        const { data } = await fetchGallerySearch(value);
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

export const { toggleSearch } = gallerySearchSlice.actions
export default gallerySearchSlice.reducer