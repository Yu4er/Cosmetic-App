import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";

import { FormLayout } from "../Public/FormLayout";
import { Login } from "../Public/Login";
import { Register } from "../Public/Register";
import { pathRoutes } from "../constants/pathRoutes";

export function Router() {
  return (
    <Routes>
      <Route path="auth/" element={<FormLayout />}>
        <Route path={pathRoutes.login} element={<Login />} />
        <Route path={pathRoutes.register} element={<Register />} />
      </Route>
      <Route path="/" element={<Layout />}>
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
