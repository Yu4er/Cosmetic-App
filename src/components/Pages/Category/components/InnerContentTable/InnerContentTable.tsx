import React from "react";

import { InnerRow } from "./InnerRow";

import type { ICatalogData } from "../../../../../interfaces/mockInterfaces";

import style from "../../Category.module.scss";

interface IInnerContentTableProps {
  data: ICatalogData[];
  callback?: (position: number) => void;
}

export function InnerContentTable({ data, callback }: IInnerContentTableProps) {
  return (
    <div className={style["inner-data-table"]}>
      <div className={style["inner-data-table__header"]}>
        Название категории
      </div>
      <div className={style["inner-data-table__body"]}>
        {data.map((item) => (
          <InnerRow
            key={item.id}
            id={item.id}
            item={item}
            callback={callback}
          />
        ))}
      </div>
    </div>
  );
}
