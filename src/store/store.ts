import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { authSlice } from "./features/auth/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store };
export type { AppDispatch, RootState, AppThunk };
