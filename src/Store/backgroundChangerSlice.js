import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBackgroundChanger } from "../Api/backgroundChangerApi";



export const fetchBackgroundAsync = createAsyncThunk("background/fetchBackground",
    async (value) => {
        const { data } = await fetchBackgroundChanger(value);
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