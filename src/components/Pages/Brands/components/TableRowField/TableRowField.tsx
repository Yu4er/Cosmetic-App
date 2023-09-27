import React from "react";

import style from "./TableRowField.module.scss";

interface ITableRowFieldProps {
  icon: string;
  name: string;
}

export function TableRowField({ icon, name }: ITableRowFieldProps) {
  return (
    <tr className={style["table-block__item"]}>
      <td
        className={style["table-block__image"]}
        key={`${name}${Math.random()}`}
      >
        <img src={icon} alt="icon" />
      </td>
      <td
        className={style["table-block__name"]}
        key={`${name}${Math.random()}`}
      >
        {icon}
      </td>
      <td className={style["table-block__buttons"]}>
        <button className="edit" type="button"></button>
        <button className="delete" type="button"></button>
      </td>
    </tr>
  );
}
