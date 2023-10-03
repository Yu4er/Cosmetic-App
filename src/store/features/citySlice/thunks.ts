import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ICitiesResponse } from "./types";

import { citiesService } from "../../../services/citiesService";

export const fetchLoadCities = createAsyncThunk<
  ICitiesResponse,
  { rejectValue?: string }
>("city/fetchLoadCities", async (_undefined, { rejectWithValue }) => {
  try {
    const response = await citiesService.getCities();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});
