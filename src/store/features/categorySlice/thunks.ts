import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ICatalogsDataResponse, ICategoryStateObj } from "./types";

import { categoryService } from "../../../services/categoryService";

const fetchLoadCatalog = createAsyncThunk<
  ICatalogsDataResponse,
  ICategoryStateObj,
  { rejectValue: string }
>(
  "products/fetchLoadCatalog",
  async ({ searchString }, { rejectWithValue }) => {
    try {
      const response = await categoryService.getCatalog(searchString);
      return response;
    } catch (error) {
      const myError = error as string;
      return rejectWithValue(myError);
    }
  }
);

const fetchLoadSubCatalog = createAsyncThunk<
  ICatalogsDataResponse,
  ICategoryStateObj,
  { rejectValue: string }
>(
  "products/fetchLoadSubCatalog",
  async ({ searchString }, { rejectWithValue }) => {
    try {
      const response = await categoryService.getSubCatalog(searchString);
      return response;
    } catch (error) {
      const myError = error as string;
      return rejectWithValue(myError);
    }
  }
);

export { fetchLoadCatalog, fetchLoadSubCatalog };
