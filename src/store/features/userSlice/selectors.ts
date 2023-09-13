import { RootState } from "../../store";

const usersDataSelector = (state: RootState) => state.users.users;
const usersLastPageSelector = (state: RootState) => state.users.lastPage;
const pendingSelector = (state: RootState) => state.users.isLoading;

export const usersSelectors = {
  usersDataSelector,
  usersLastPageSelector,
  pendingSelector,
};
