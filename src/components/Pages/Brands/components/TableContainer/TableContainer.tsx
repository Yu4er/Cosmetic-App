import React, { useEffect } from "react";

import style from "./TableContainer.module.scss";

import type { IBrandsData } from "../../../../../interfaces/mockInterfaces";

import { TableRowField } from "../TableRowField/TableRowField";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { fetchLoadBrands } from "../../../../../store/features/brandSlice/thunks";
import { brandsSelectors } from "../../../../../store/features/brandSlice/selectors";

export function TableContainer() {
  const dispatch = useAppDispatch();
  const brandsData = useAppSelector(brandsSelectors.brandsDataSelector);

  useEffect(() => {
    dispatch(fetchLoadBrands({}));
  }, [dispatch]);

  return (
    <table className={style["table-block__wrapper"]}>
      <thead>
        <tr className={style["table-block__header"]}>
          <th>Логотип бренда</th>
          <th colSpan={2}>Название бренда</th>
        </tr>
      </thead>
      <tbody className={style["table-block__table"]}>
        {brandsData.map((item: IBrandsData) => (
          <TableRowField key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
