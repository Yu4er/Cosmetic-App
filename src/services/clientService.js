import axios from "axios";
// import { usersMockData } from "../mocks/usersMockData";

class UserService {
  static instance;
  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getUsers(limitView = 10, pagination = 1, searchString) {
    // eslint-disable-next-line no-undef -- need for debugging
    console.info("[UserService:getUsers]", {
      limitView,
      pagination,
      searchString,
    });

    function getLastPage(length) {
      return Math.ceil(length / limitView);
    }

    try {
      const response = await axios.get("http://localhost:3001/clients");
      const usersData = response.data;

      if (searchString) {
        const response = await axios.get(`http://localhost:3001/clients?q=${searchString}`);
        const filteredData = response.data;
        return {
          data: filteredData,
          lengthData: filteredData.length,
          lastPage: getLastPage(filteredData.length),
        };
      }
    
    const startIndex = (pagination - 1) * limitView;
    const endIndex = startIndex + limitView;
    const data = usersData.slice(startIndex, endIndex);

    return { data, lengthData:usersData.length, lastPage: getLastPage(usersData.length) };
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      return {
        data: [],
        lengthData: 0,
        lastPage: 0,
      };
    }
  }
}
export const clientService = UserService.getInstance();
