import React from "react";

import style from "./TableCheckboxes.module.scss";

interface ITheadCheckbox {
  isChecked: boolean | undefined;
  callback: () => void | undefined;
}

export function THeadCheckbox({
  isChecked,
  callback,
}: ITheadCheckbox): JSX.Element {
  return (
    <th className={style["thead-checkbox"]}>
      <input
        placeholder="checkbox"
        checked={isChecked}
        type="checkbox"
        id="checkAll"
        className={style["content-sales-table__checkbox"]}
        onChange={callback}
      />
      <label
        className={style["content-sales-table__label"]}
        htmlFor="checkAll"
      ></label>
    </th>
  );
}
