import React from "react";

import style from "./Table.module.scss";
import { TheadCheckbox } from "./components/TheadCheckbox/TheadCheckbox";

interface ITableHeadProps {
  isChecked?: boolean | undefined;
  handleAllClick?: () => void | undefined;
  theadList: string[];
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
          <TheadCheckbox isChecked={isChecked} callback={handleAllClick} />
        )}
        {theadList.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
