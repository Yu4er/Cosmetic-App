import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IUsersResponse, IUsersStateObj } from "./types";

import { clientService } from "../../../services/clientService";

const fetchLoadUsers = createAsyncThunk<
  IUsersResponse,
  IUsersStateObj,
  { rejectValue: string }
>(
  "users/fetchLoadUsers",
  async (
    { limitRowsOnPage, paginationObj, searchString },
    { rejectWithValue }
  ) => {
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
