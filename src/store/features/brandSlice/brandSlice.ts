import { createSlice } from "@reduxjs/toolkit";

import { IBrandsState } from "./types";
import { fetchLoadBrands } from "./thunks";

const initialState: IBrandsState = {
  isLoading: false,
  error: "",
  brands: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.brands = action.payload.data;
      })
      .addCase(fetchLoadBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "error";
      });
  },
});

export { brandsSlice };
