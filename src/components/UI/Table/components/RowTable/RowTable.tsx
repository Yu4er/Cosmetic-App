import React, { memo } from "react";

import type { ITableColumnsProps } from "../../../../../interfaces/tableColumns";

import style from "../../Table.module.scss";
import { TbodyCheckbox } from "../TbodyCheckbox/TbodyCheckbox";
import { IProductData } from "../../../../../interfaces/mockInterfaces";

interface IRowTable {
  dataRow: IProductData;
  columns: ITableColumnsProps[];
  checkboxHandler?: (id: string) => void;
  isChecked?: boolean;
  idModal?: string | null;
}

export const RowTable = memo(
  function component({
    dataRow,
    checkboxHandler,
    isChecked,
    columns,
  }: IRowTable): JSX.Element {
    const rowData: string[] = columns.map((element) =>
      element.selector(dataRow)
    );

    return (
      <tr className={isChecked ? style["_active"] : undefined}>
        {checkboxHandler && (
          <TbodyCheckbox
            isChecked={isChecked}
            id={dataRow.id}
            checkboxHandler={checkboxHandler}
          />
        )}
        {rowData.map((el, index) => {
          return <td key={`${index}-${Math.random()}`}>{el}</td>;
        })}
      </tr>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.isChecked === nextProps.isChecked;
  }
);
