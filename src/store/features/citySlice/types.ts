import { ICitiesData } from "../../../interfaces/mockInterfaces";

interface ICitiesState {
  isLoading: boolean;
  error: string;
  cities: ICitiesData[];
}

interface ICitiesResponse {
  data: ICitiesData[];
}

export type { ICitiesState, ICitiesResponse };
