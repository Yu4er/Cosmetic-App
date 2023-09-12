import React from "react";

import style from "./Pagination.module.scss";

interface ISelectLimitProps {
  value: number;
}

export function SelectLimit({ value }: ISelectLimitProps): JSX.Element {
  return (
    <option className={style["pagination__option"]} value={value}>
      {value}
    </option>
  );
}
