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
interface IOrdersData {
  id: string;
  order_type: string;
  total: number;
  isViewedByAdmin: boolean;
  order_number: string;
  delivery_type: string;
  isPayed: boolean;
  user: IOrdersUserData;
  warehouse: { city: string };
  date: string;
}

interface IOrdersUserData {
  id: string;
  name: string;
  lastName: string;
  secondName: string | undefined;
  firmName: string | undefined;
  role: string;
}

interface ICitiesData {
  id: string;
  name: string;
  address: string;
}

export type {
  IProductData,
  IUsersData,
  ICatalogData,
  ISubCatalogData,
  IBrandsData,
  IOrdersData,
  IOrdersUserData,
  ICitiesData,
};
