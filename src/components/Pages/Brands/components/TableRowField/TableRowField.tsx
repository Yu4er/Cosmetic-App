import React from "react";

import style from "./TableRowField.module.scss";

interface ITableRowFieldProps {
  item: {
    icon: string;
    name: string;
  };
}

export function TableRowField({ item }: ITableRowFieldProps) {
  return (
    <tr className={style["table-block__item"]}>
      <td
        className={style["table-block__image"]}
        key={`${item.name}${Math.random()}`}
      >
        <img src={item.icon} alt="icon"></img>
      </td>
      <td
        className={style["table-block__name"]}
        key={`${item.name}${Math.random()}`}
      >
        {item.name}
      </td>
      <td className={style["table-block__buttons"]}>
        <button className="edit" type="button"></button>
        <button className="delete" type="button"></button>
      </td>
    </tr>
  );
}
