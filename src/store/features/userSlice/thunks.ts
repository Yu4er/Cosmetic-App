import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUsersResponse, IUsersStateObj } from "./types";

import { clientService } from "../../../services/clientService";

const fetchLoadUsers = createAsyncThunk<
  IUsersResponse,
  IUsersStateObj,
  { rejectValue: string }
>(
  "products/fetchLoadUsers",
  async (
    { limitRowsOnPage, paginationObj, searchString },
    { rejectWithValue }
  ) => {
    console.log("==============================================");
    console.log(limitRowsOnPage, paginationObj, searchString);
    console.log("==============================================");
    try {
      const response = await clientService.getUsers(
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

export { fetchLoadUsers };
