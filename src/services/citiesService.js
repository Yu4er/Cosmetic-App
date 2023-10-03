import axios from "axios";

import { showLog } from "../constants/utilities";

class CitiesService {
	static instance;
	static getInstance() {
		if (!CitiesService.instance) {
			CitiesService.instance = new CitiesService();
		}
		return CitiesService.instance;
	}

	async getCities() {
		showLog("[CitiesService:getCities]", {})
		const response = await axios.get("http://localhost:3001/cities");
		const data = response.data;
		return { data };
	}
}
export const citiesService = CitiesService.getInstance();
