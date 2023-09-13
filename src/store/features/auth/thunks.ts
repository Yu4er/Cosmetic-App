import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IAuthDataResponse, IAuthStateObj } from "./types";
import { loginUrl, registrationUrl } from "./constants";

type errorAuth = { response: { data: { message: string } } };
type errorRegister = {
  response: { data: { message: { errors: { msg: string }[] } } };
};

const fetchAuthentication = createAsyncThunk<
  IAuthDataResponse,
  IAuthStateObj,
  { rejectValue: string }
>(
  "auth/fetchAuthentication",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post<IAuthDataResponse>(loginUrl, {
        username: email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as errorAuth).response.data.message);
    }
  }
);

const fetchRegistration = createAsyncThunk<
  IAuthDataResponse,
  IAuthStateObj,
  { rejectValue: string }
>(
  "auth/fetchRegistration",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post<IAuthDataResponse>(registrationUrl, {
        username: email,
        password,
      });
      return response.data;
    } catch (error) {
      const myError = error as unknown as errorRegister;
      const errMess = myError.response.data.message.errors;
      if (myError.response.data.message.errors) {
        return rejectWithValue(errMess[0].msg);
      } else {
        const errMess = (error as errorAuth).response.data.message;
        return rejectWithValue(errMess);
      }
    }
  }
);

export { fetchRegistration, fetchAuthentication };
