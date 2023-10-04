import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../Components/utils/StatusCode";
const initialState = {
    data: [],
    status: StatusCode.IDLE
};

export const getProduct = createAsyncThunk("products/get", async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result;
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE
            })
            .addCase(getProduct.rejected, (state) => {
                state.status = StatusCode.ERROR
            });
    },
});

export const { add, remove, fetchProducts } = productSlice.actions;
export default productSlice.reducer;
