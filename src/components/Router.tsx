import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";

import { pathRoutes } from "../constants/pathRoutes";
import { useAppSelector } from "../store/hooks";
import { Login } from "../public/Login";
import { Register } from "../public/Register";
import { authSelectors } from "../store/features/auth/selectors";

export function Router() {
  const isAuth = useAppSelector(authSelectors.userLoginDataSelector);

  return (
    <Routes>
      <Route path="auth/">
        <Route path={pathRoutes.login} element={<Login />} />
        <Route path={pathRoutes.register} element={<Register />} />
      </Route>
      <Route element={<Layout isAuth={isAuth} />}>
        <Route path={pathRoutes.products} element={<div>products</div>} />
        <Route path={pathRoutes.users} element={<div>Users</div>} />
        <Route path={pathRoutes.category} element={<div>Category</div>} />
        <Route path={pathRoutes.cities} element={<div>Cities</div>} />
        <Route path={pathRoutes.brands} element={<div>Brands</div>} />
        <Route path={pathRoutes.protocols} element={<div>Protocols</div>} />
        <Route path={pathRoutes.orders} element={<div>Orders</div>} />
        <Route path={pathRoutes.banners} element={<div>Banners</div>} />
        <Route path={pathRoutes.seminars} element={<div>Seminars</div>} />
        <Route path={pathRoutes.promocodes} element={<div>Promocodes</div>} />
        <Route path="/*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}
