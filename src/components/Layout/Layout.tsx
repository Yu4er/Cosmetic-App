import React from "react";
import { Outlet } from "react-router-dom";

import style from "./Layout.module.scss";

import { navList } from "../../constants/navigation";
import { NavLink } from "../NavLink/NavLink";

export function Layout(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.main}>
          <aside className={style["aside"]}>
            <ul className={style["aside__list"]}>
              {navList.map((item) => (
                //выводим весь список категорий aside
                <NavLink
                  key={item.name}
                  picture={item.picture}
                  name={item.name}
                  href={item.href}
                />
              ))}
            </ul>
          </aside>
          <main className={style.mainInner}>
            <div className={style.mainInner__body}>
              <div className={style.mainInner__content}>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
