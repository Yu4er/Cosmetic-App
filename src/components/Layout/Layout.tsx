import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import style from "./Layout.module.scss";

import { navList } from "../../constants/navigation";
import { NavLink } from "../NavLink/NavLink";
import { pathRoutes } from "../../constants/pathRoutes";

interface IProtectedRoutesProps {
  isAuth?: string | null;
}

export function Layout({ isAuth }: IProtectedRoutesProps): JSX.Element {
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={`auth/${pathRoutes.login}`} state={location.pathname} />
    );
  }

  return (
    <div className={style["wrapper"]}>
      <div className={style["container"]}>
        <div className={style["main"]}>
          <aside className={style["aside"]}>
            <ul className={style["aside__list"]}>
              {navList.map((item) => (
                <NavLink
                  key={item.name}
                  picture={item.picture}
                  name={item.name}
                  href={item.href}
                />
              ))}
            </ul>
          </aside>
          <main className={style["mainInner"]}>
            <div className={style["mainInner__body"]}>
              <div className={style["mainInner__content"]}>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
