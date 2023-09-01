import React from "react";
import { Route, Routes } from "react-router-dom";

import { pathRoutes } from "../constants/pathRoutes";
import { FormLayout } from "../Public/FormLayout";
import { Login } from "../Public/Login";
import { Register } from "../Public/Register";

export function Router() {
  return (
    <Routes>
      <Route element={<FormLayout />}>
        <Route path={pathRoutes.login} element={<Login />} />
        <Route path={pathRoutes.register} element={<Register />} />
      </Route>
      <Route path="/">
        <Route path="/*" element={<div>404</div>}></Route>
      </Route>
    </Routes>
  );
}
