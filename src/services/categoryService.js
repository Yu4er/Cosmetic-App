import axios from "axios";
import { showLog } from "../constants/logger";

class CategoryService {
	static instance;
	static getInstance() {
		if (!CategoryService.instance) {
			CategoryService.instance = new CategoryService();
		}
		return CategoryService.instance;
	}

	async getCatalog() {
		showLog("[CategoryService:getCatalog]", "LoadCatalog")
		const response = await axios.get("http://localhost:3001/catalog");
		return  {data: response.data};
	}
	async getSubCatalog({position}) {
		showLog("[CategoryService:getCatalog]", "LoadSubCatalog", "position", position)
		const response = await axios.get(`http://localhost:3001/subCatalog?position=${position}`);
		return  {data: response.data};
	}
}
export const categoryService = CategoryService.getInstance();


