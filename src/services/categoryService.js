import { catalogMockData } from "../mocks/catalogMockData";
import { subCatalogMockData } from "../mocks/subCatalogMockData";

class CategoryService {
	static instance;
	static getInstance() {
		if (!CategoryService.instance) {
			CategoryService.instance = new CategoryService();
		}
		return CategoryService.instance;
	}

	async getCatalog(searchString) {
		// eslint-disable-next-line no-undef -- need for debugging
		console.info("[CategoryService:getCatalog]", "LoadCatalog", searchString);

		if (searchString) {
			return  {data: catalogMockData};
		}

		return  {data: catalogMockData};
	}
	async getSubCatalog(searchString) {
		// eslint-disable-next-line no-undef -- need for debugging
		console.info("[CategoryService:getCatalog]", "LoadSubCatalog", searchString);
		
		if (searchString) {
			return  {data: subCatalogMockData};
		}
		return  {data: subCatalogMockData};
	}
}
export const categoryService = CategoryService.getInstance();
