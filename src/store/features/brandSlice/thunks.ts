import { createAsyncThunk } from "@reduxjs/toolkit";

import { IBrandsResponse } from "./types";

import { brandsService } from "../../../services/brandsService";

export const fetchLoadBrands = createAsyncThunk<
  IBrandsResponse,
  { rejectValue?: string }
>("brands/fetchLoadCatalogs", async (_, { rejectWithValue }) => {
  try {
    const response = await brandsService.getBrands();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});
