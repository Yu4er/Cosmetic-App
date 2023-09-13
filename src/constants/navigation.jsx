import React from "react";

import { pathRoutes } from "./pathRoutes";

import {
  CategoryImg,
  ClientsImg,
  ProductsImg,
  CitiesImg,
  BrandsImg,
  ProtocolsImg,
  OrdersImg,
  BannersImg,
  SeminarsImg,
  PromocodesImg,
} from "../assets/images";

export const navList = [
  {
    picture: <ProductsImg />,
    name: "Продукты",
    href: pathRoutes.products,
  },
  {
    picture: <ClientsImg />,
    name: "Пользователи",
    href: pathRoutes.users,
  },
  {
    picture: <CategoryImg />,
    name: "Категории",
    href: pathRoutes.category,
  },
  {
    picture: <CitiesImg />,
    name: "Города",
    href: pathRoutes.cities,
  },
  {
    picture: <BrandsImg />,
    name: "Бренды",
    href: pathRoutes.brands,
  },
  {
    picture: <ProtocolsImg />,
    name: "Протоколы",
    href: pathRoutes.protocols,
  },
  {
    picture: <OrdersImg />,
    name: "Заказы",
    href: pathRoutes.orders,
  },
  {
    picture: <BannersImg />,
    name: "Баннеры",
    href: pathRoutes.banners,
  },
  {
    picture: <SeminarsImg />,
    name: "Семинары",
    href: pathRoutes.seminars,
  },
  {
    picture: <PromocodesImg />,
    name: "Промокоды",
    href: pathRoutes.promocodes,
  },
];
