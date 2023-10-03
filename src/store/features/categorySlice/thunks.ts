import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ICatalogsDataResponse, ICategoryStateObj } from "./types";

import { categoryService } from "../../../services/categoryService";

const fetchLoadCatalog = createAsyncThunk<
  ICatalogsDataResponse,
  ICategoryStateObj,
  { rejectValue: string }
>("category/fetchLoadCatalog", async (_undefined, { rejectWithValue }) => {
  try {
    const response = await categoryService.getCatalog();
    return response;
  } catch (error) {
    const myError = error as string;
    return rejectWithValue(myError);
  }
});

const fetchLoadSubCatalog = createAsyncThunk<
  ICatalogsDataResponse,
  ICategoryStateObj,
  { rejectValue: string }
>("category/fetchLoadSubCatalog", async (position, { rejectWithValue }) => {
  try {
    const response = await categoryService.getSubCatalog(position);
    return response;
  } catch (error) {
    const myError = error as string;
    return rejectWithValue(myError);
  }
});

export { fetchLoadCatalog, fetchLoadSubCatalog };
