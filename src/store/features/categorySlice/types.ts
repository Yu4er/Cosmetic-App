import {
  ICatalogData,
  ISubCatalogData,
} from "../../../interfaces/mockInterfaces";

interface ICatalogDataState {
  isLoading: boolean;
  error: string;
  catalog: ICatalogData[];
  subCatalog: ISubCatalogData[];
}

interface ICatalogsDataResponse {
  data: ICatalogData[] | ISubCatalogData[];
}
interface ICategoryStateObj {
  position?: number;
}

export type { ICatalogDataState, ICatalogsDataResponse, ICategoryStateObj };
