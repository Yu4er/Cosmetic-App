import { RootState } from "../../store";

const catalogDataSelector = (state: RootState) => state.category.catalog;
const subCatalogDataSelector = (state: RootState) => state.category.subCatalog;
const pendingSelector = (state: RootState) => state.category.isLoading;

export const categorySelectors = {
  catalogDataSelector,
  subCatalogDataSelector,
  pendingSelector,
};
