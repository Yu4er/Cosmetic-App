interface IProductData {
  id: string;
  name: string;
  nameFrom1C: string;
  codeFrom1C: string;
  price: number;
  volume: string;
  isReady: boolean;
  isRetailAllowed: boolean;
  brand: {
    id: string;
    name: string;
    icon: string;
  };
  images: string[];
  category: string;
  subcategory: string;
  characteristics: {
    id: string;
    key: string;
    value: string;
  }[];
  tags: {
    id: string;
    name: string;
  }[];
  variations?: IProductVariationsData[];
}

interface IProductVariationsData {
  variations?: {
    id: string;
    code: string;
    value: string;
  };
}
interface IUsersData {
  id: string;
  email: string | null;
  phone: string;
  name: string;
  lastName: string | null;
  firmName: string | null;
  role: string;
}

interface ICatalogData {
  id: string;
  name: string;
  position: number;
}

interface ISubCatalogData extends ICatalogData {
  catalog_product?: {
    id: string;
  };
}
interface IBrandsData {
  id: string;
  name: string;
  icon: string;
  margin: number;
}

export type { IProductData, IUsersData, ICatalogData, ISubCatalogData };
