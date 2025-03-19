import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./Thunk";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        error: false,
        loading: false,
        filter: ''
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.products = [];
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.products = [];
                state.error = true;
                
            })
    }
});

export const { changeFilter } = productsSlice.actions;


export default productsSlice.reducer;
