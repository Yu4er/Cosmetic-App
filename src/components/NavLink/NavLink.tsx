import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import style from "./NavLink.module.scss";

interface INavProps {
  href: string;
  picture: JSX.Element;
  name: string;
}

function getNavLinkClassName({ isActive }: { isActive: boolean }): string {
  return isActive ? `${style.tab} ${style.active}` : style.tab;
}

export function NavLink({ href, picture, name }: INavProps) {
  return (
    <li className={style["aside__link-item"]}>
      <RouterNavLink className={getNavLinkClassName} to={href}>
        <div className={style["aside__pic"]}>{picture}</div>
        <p className={style["name"]}>{name}</p>
      </RouterNavLink>
    </li>
  );
}
