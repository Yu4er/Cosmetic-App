import { createSlice } from "@reduxjs/toolkit";

import { IAuthDataState } from "./types";
import { fetchAuthentication, fetchRegistration } from "./thunks";

const initialState: IAuthDataState = {
  isLoading: false,
  error: "",
  rememberMeCheck: false,
  userLoginData: localStorage.getItem("isAuth") ?? undefined,
  userRegistrationData: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRemember: (state, action) => {
      state.rememberMeCheck = action.payload;
    },
    logOut: (state) => {
      state.userLoginData = undefined;
      localStorage.removeItem("isAuth");
    },
    setUserLoginData: (state, action) => {
      state.userLoginData = action.payload;
    },
    setUserRegisterData: (state, action) => {
      state.userRegistrationData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthentication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuthentication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userLoginData = action.payload.token;
      })
      .addCase(fetchAuthentication.rejected, (state, action) => {
        state.isLoading = false;
        {
          typeof action.payload === "string"
            ? (state.error = action.payload)
            : (state.error = "error");
        }
      })
      .addCase(fetchRegistration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userRegistrationData = action.payload.token;
      })
      .addCase(fetchRegistration.rejected, (state, action) => {
        state.isLoading = false;
        {
          typeof action.payload === "string"
            ? (state.error = action.payload)
            : (state.error = "error");
        }
      });
  },
});

const { setRemember, logOut, setUserLoginData, setUserRegisterData } =
  authSlice.actions;

export {
  setRemember,
  logOut,
  setUserLoginData,
  authSlice,
  setUserRegisterData,
};
