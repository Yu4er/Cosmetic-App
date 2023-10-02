import axios from "axios";

import { showLog } from "../constants/utilities";


class UserService {
  static instance;
  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getUsers(limitView = 10, pagination = 1, searchString) {
		showLog("[UserService:getUsers]", {
      limitView,
      pagination,
      searchString,
    })

    function getLastPage(length) {
      return Math.ceil(length / limitView);
    }

    try {
      if (searchString) {
        const response = await axios.get(`http://localhost:3001/clients?q=${searchString}`);
        const filteredData = response.data;
        return {
          data: filteredData,
          lengthData: filteredData.length,
          lastPage: getLastPage(filteredData.length),
        };
      }

		const response = await axios.get("http://localhost:3001/clients");
    const usersData = response.data;
    const startIndex = (pagination - 1) * limitView;
    const endIndex = startIndex + limitView;
    const data = usersData.slice(startIndex, endIndex);

    return { data, lengthData:usersData.length, lastPage: getLastPage(usersData.length) };
    } catch (error) {
			showLog('Ошибка при получении данных:', error);
    }
  }
}
export const clientService = UserService.getInstance();
