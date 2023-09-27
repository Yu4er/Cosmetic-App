import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { authSlice } from "./features/auth/authSlice";
import { modalSlice } from "./features/modal/modalSlice";
import { usersSlice } from "./features/userSlice/userSlice";
import { categorySlice } from "./features/categorySlice/categorySlice";
import { brandsSlice } from "./features/brandSlice/brandSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    users: usersSlice.reducer,
    category: categorySlice.reducer,
    brands: brandsSlice.reducer,
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
