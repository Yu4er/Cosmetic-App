import axios from "axios";

import { showLog } from "../constants/utilities";

class OrderService {
  static instance;
  static getInstance() {
    if (!OrderService.instance) {
      OrderService.instance = new OrderService();
    }
    return OrderService.instance;
  }

  async getOrders(limitView = 10, pagination = 1, searchString) {
		showLog("[OrderService:getOrders]", {
      limitView,
      pagination,
      searchString,
    })

    function getLastPage(length) {
      return Math.ceil(length / limitView);
    }

    try {
      if (searchString) {
        const response = await axios.get(`http://localhost:3001/orders?q=${searchString}`);
        const filteredData = response.data;
        return {
          data: filteredData,
          lengthData: filteredData.length,
          lastPage: getLastPage(filteredData.length),
        };
      }
			const response = await axios.get("http://localhost:3001/orders");
      const ordersData = response.data;
	
    const startIndex = (pagination - 1) * limitView;
    const endIndex = startIndex + limitView;
    const data = ordersData.slice(startIndex, endIndex);

    return { data, lengthData:ordersData.length, lastPage: getLastPage(ordersData.length) };
    } catch (error) {
			showLog('Ошибка при получении данных:', error);
      return {
        data: [],
        lengthData: 0,
        lastPage: 0,
      };
    }
  }
}
export const orderService = OrderService.getInstance();
