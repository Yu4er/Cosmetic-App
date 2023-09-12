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

export type { IProductData };
