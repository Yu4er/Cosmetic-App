import React from "react";

import style from "./TableRowField.module.scss";

interface ITableRowFieldProps {
  city: string;
  address: string;
}

export function TableRowField({ city, address }: ITableRowFieldProps) {
  return (
    <tr className={style["table-block__item"]}>
      <td>{city}</td>
      <td>{address}</td>
      <td className={style["table-block__recycle"]}>
        <button className={style["delete"]} type="button"></button>
      </td>
    </tr>
  );
}
