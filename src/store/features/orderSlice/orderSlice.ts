import { createSlice } from "@reduxjs/toolkit";

import { fetchLoadOrders } from "./thunks";

import type { IOrdersState } from "./types";

const initialState: IOrdersState = {
  isLoading: false,
  error: "",
  orders: [],
  lastPage: 1,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.orders = action.payload.data;
        state.lastPage = action.payload.lastPage;
      })
      .addCase(fetchLoadOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "error";
      });
  },
});

const { setProducts } = ordersSlice.actions;

export { setProducts, ordersSlice };
