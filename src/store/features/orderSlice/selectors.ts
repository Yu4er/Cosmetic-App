import { RootState } from "../../store";

const ordersDataSelector = (state: RootState) => state.orders.orders;
const ordersLastPageSelector = (state: RootState) => state.orders.lastPage;
const pendingSelector = (state: RootState) => state.orders.isLoading;

export const ordersSelectors = {
  ordersDataSelector,
  ordersLastPageSelector,
  pendingSelector,
};
