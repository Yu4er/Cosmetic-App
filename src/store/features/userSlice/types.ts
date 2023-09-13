import { IUsersData } from "../../../interfaces/mockInterfaces";

interface IUsersState {
  isLoading: boolean;
  error: string;
  users: IUsersData[];
  lastPage: number;
}

interface IUsersResponse {
  data: IUsersData[];
  dataLength: number;
  lastPage: number;
}
interface IUsersStateObj {
  limitRowsOnPage: number;
  paginationObj: number;
  searchString?: string;
}

export type { IUsersState, IUsersResponse, IUsersStateObj };
