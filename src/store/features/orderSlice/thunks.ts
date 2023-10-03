import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IOrdersResponse, IOrdersStateObj } from "./types";

import { orderService } from "../../../services/orderService";

const fetchLoadOrders = createAsyncThunk<
  IOrdersResponse,
  IOrdersStateObj,
  { rejectValue: string }
>(
  "orders/fetchLoadOrders",
  async (
    { limitRowsOnPage, paginationObj, searchString },
    { rejectWithValue }
  ) => {
    try {
      const response = await orderService.getOrders(
        limitRowsOnPage,
        paginationObj,
        searchString
      );
      return response;
    } catch (error) {
      const myError = error as string;
      return rejectWithValue(myError);
    }
  }
);

export { fetchLoadOrders };
