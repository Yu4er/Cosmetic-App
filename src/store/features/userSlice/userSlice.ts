import { createSlice } from "@reduxjs/toolkit";

import { fetchLoadUsers } from "./thunks";

import type { IUsersState } from "./types";

const initialState: IUsersState = {
  isLoading: false,
  error: "",
  users: [],
  lastPage: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.users = action.payload.data;
        state.lastPage = action.payload.lastPage;
      })
      .addCase(fetchLoadUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "error";
      });
  },
});

const { setProducts } = usersSlice.actions;

export { setProducts, usersSlice };
