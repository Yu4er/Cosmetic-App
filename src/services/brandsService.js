import axios from "axios";
import { showLog } from "../constants/logger";

class BrandsService {
	static instance;
	static getInstance() {
		if (!BrandsService.instance) {
			BrandsService.instance = new BrandsService();
		}
		return BrandsService.instance;
	}

	async getBrands() {
		showLog("[BrandsService:getBrands]", {})
		const response = await axios.get("http://localhost:3001/brands");
		const data = response.data;
		return { data };
	}
}
export const brandsService = BrandsService.getInstance();
