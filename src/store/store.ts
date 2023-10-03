import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import {
  authSlice,
  brandsSlice,
  categorySlice,
  citiesSlice,
  modalSlice,
  ordersSlice,
  usersSlice,
} from "./features";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    users: usersSlice.reducer,
    category: categorySlice.reducer,
    brands: brandsSlice.reducer,
    orders: ordersSlice.reducer,
    cities: citiesSlice.reducer,
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
