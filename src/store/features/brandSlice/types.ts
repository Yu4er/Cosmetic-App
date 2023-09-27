import { IBrandsData } from "../../../interfaces/mockInterfaces";

interface IBrandsState {
  isLoading: boolean;
  error: string;
  brands: IBrandsData[];
}

interface IBrandsResponse {
  data: IBrandsData[];
}

export type { IBrandsState, IBrandsResponse };
