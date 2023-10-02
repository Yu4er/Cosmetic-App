import { IOrdersData } from "../../../interfaces/mockInterfaces";

interface IOrdersState {
  isLoading: boolean;
  error: string;
  orders: IOrdersData[];
  lastPage: number;
}

interface IOrdersResponse {
  data: IOrdersData[];
  dataLength: number;
  lastPage: number;
}
interface IOrdersStateObj {
  limitRowsOnPage: number;
  paginationObj: number;
  searchString?: string;
}

export type { IOrdersState, IOrdersResponse, IOrdersStateObj };
