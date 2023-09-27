import { RootState } from "../../store";

const brandsDataSelector = (state: RootState) => state.brands.brands;
const pendingSelector = (state: RootState) => state.brands.isLoading;

export const brandsSelectors = {
  brandsDataSelector,
  pendingSelector,
};
