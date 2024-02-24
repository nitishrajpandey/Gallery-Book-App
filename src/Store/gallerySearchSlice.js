import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGalleryBookApi } from "../Api/fetchGalleryBookApi";
import { nextpageApi } from "../Api/nextpageApi";

export const fetchGallerySearchAsync = createAsyncThunk(
    "gallerySearch/fetchGalleryBookApi",
    async ({ value, page }) => {
        try {
            const response = await fetchGalleryBookApi(value, page);

            return response.data;
        } catch (error) {
            throw error;
        }
    }
);



export const fetchNextPageAsync = createAsyncThunk(
    "gallerySearch/fetchNextPage",
    async (nextPage) => {
        try {
            const response = await nextpageApi(nextPage);
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const gallerySearchSlice = createSlice({
    name: "gallerySearch",
    initialState: {
        value: [],
        searchValue: "",
        page: 1,
        pending: false
    },
    reducers: {
        searchInput: (state, action) => {
            state.searchValue = action.payload;
        },
        pageInput: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGallerySearchAsync.fulfilled, (state, action) => {
                state.value = action.payload.photos; // Replace existing data with new search results
                state.pending = false;
            })
            .addCase(fetchGallerySearchAsync.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(fetchNextPageAsync.fulfilled, (state, action) => {
                state.value = [...state.value, ...action.payload.photos];
            });
    },
});

export const { searchInput, pageInput } = gallerySearchSlice.actions;

export default gallerySearchSlice.reducer;
