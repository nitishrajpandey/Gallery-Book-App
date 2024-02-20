import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGalleryBookApi } from "../Api/fetchGalleryBookApi";



export const fetchBackgroundAsync = createAsyncThunk("background/fetchBackground",
    async (value = "flower") => {
        const { data } = await fetchGalleryBookApi(value);
        return data
    }
)



export const backgroundChangerSlice = createSlice({
    name: "backgroundChanger",
    initialState: { values: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBackgroundAsync.fulfilled, (state, action) => {
            state.values = action.payload
        })
    }

})

export default backgroundChangerSlice.reducer