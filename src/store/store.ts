import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  authSlice,
  brandsSlice,
  categorySlice,
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
