import { brandsMockData } from "../mocks/brandsMockData";

class BrandsService {
	static instance;
	static getInstance() {
		if (!BrandsService.instance) {
			BrandsService.instance = new BrandsService();
		}
		return BrandsService.instance;
	}

	async getBrands() {
		// eslint-disable-next-line no-undef -- need for debugging
		console.info("[BrandsService:getBrands]", {});
		const data = brandsMockData;
		return { data };
	}
}
export const brandsService = BrandsService.getInstance();
