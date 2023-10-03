import { RootState } from "../../store";

const citiesDataSelector = (state: RootState) => state.cities.cities;
const pendingSelector = (state: RootState) => state.cities.isLoading;

export const citiesSelectors = {
  citiesDataSelector,
  pendingSelector,
};
