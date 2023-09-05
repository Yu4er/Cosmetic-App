import React from "react";

import style from "./Pagination.module.scss";

interface ISelectDrawProps {
  value: number;
}

export function SelectDraw({ value }: ISelectDrawProps): JSX.Element {
  return (
    <option className={style["pagination__option"]} value={value}>
      {value}
    </option>
  );
}
