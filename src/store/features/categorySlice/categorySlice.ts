import { createSlice } from "@reduxjs/toolkit";

import { fetchLoadCatalog, fetchLoadSubCatalog } from "./thunks";

import type { ICatalogDataState } from "./types";

const initialState: ICatalogDataState = {
  isLoading: false,
  error: "",
  catalog: [],
  subCatalog: [],
};

const categorySlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.catalog = action.payload;
    },
    setSubCatalog: (state, action) => {
      state.subCatalog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.catalog = action.payload.data;
      })
      .addCase(fetchLoadCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "error";
      })
      .addCase(fetchLoadSubCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadSubCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.subCatalog = action.payload.data;
      })
      .addCase(fetchLoadSubCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "error";
      });
  },
});

const { setCatalog } = categorySlice.actions;

export { setCatalog, categorySlice };
