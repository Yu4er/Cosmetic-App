import React from "react";

import style from "./Table.module.scss";
import { THeadCheckbox } from "./components/THeadCheckbox/THeadCheckbox";

interface ITableHeadProps {
  handleAllClick?: () => void;
  theadList: string[];
  isChecked?: boolean;
}

export function TableHead({
  isChecked,
  handleAllClick,
  theadList,
}: ITableHeadProps): JSX.Element {
  return (
    <thead className={style["content-sales-table__header"]}>
      <tr>
        {handleAllClick && (
          <THeadCheckbox isChecked={isChecked} callback={handleAllClick} />
        )}
        {theadList.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
