import { RootState } from "../../store";

const userLoginDataSelector = (state: RootState) => state.auth.userLoginData;
const userRegistrationDataSelector = (state: RootState) =>
  state.auth.userRegistrationData;
const rememberMeCheckboxSelector = (state: RootState) =>
  state.auth.rememberMeCheckbox;
const errorMessageSelector = (state: RootState) => state.auth.error;
const pendingSelector = (state: RootState) => state.auth.isLoading;

export const authSelectors = {
  userLoginDataSelector,
  userRegistrationDataSelector,
  rememberMeCheckboxSelector,
  errorMessageSelector,
  pendingSelector,
};
