import { RootState } from "../../store";

const userLoginDataSelector = (state: RootState) => state.auth.userLoginData;
const userRegistrationDataSelector = (state: RootState) =>
  state.auth.userRegistrationData;
const rememberMeCheckSelector = (state: RootState) =>
  state.auth.rememberMeCheck;
const errorMessageSelector = (state: RootState) => state.auth.error;
const pendingSelector = (state: RootState) => state.auth.isLoading;

export const authSelectors = {
  userLoginDataSelector,
  userRegistrationDataSelector,
  rememberMeCheckSelector,
  errorMessageSelector,
  pendingSelector,
};
