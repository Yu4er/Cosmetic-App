import { createSlice } from "@reduxjs/toolkit";

import { fetchLoadCities } from "./thunks";

import type { ICitiesState } from "./types";

const initialState: ICitiesState = {
  isLoading: false,
  error: "",
  cities: [],
};

const citiesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.cities = action.payload.data;
      })
      .addCase(fetchLoadCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "error";
      });
  },
});

export { citiesSlice };
