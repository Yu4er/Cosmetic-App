interface IAuthDataState {
  isLoading: boolean;
  error: string;
  rememberMeCheckbox: boolean;
  userLoginData?: string | null;
  userRegistrationData?: string | null;
}
interface IAuthDataResponse {
  token: string;
}
interface IAuthStateObj {
  email: string;
  password?: string;
}

export type { IAuthDataResponse, IAuthDataState, IAuthStateObj };
