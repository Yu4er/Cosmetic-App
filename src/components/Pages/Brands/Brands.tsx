import React, { useEffect } from "react";

import style from "./Brands.module.scss";
import { FileFieldInput } from "./components/FileFieldInput/FileFieldInput";
import { TableRowField } from "./components/TableRowField/TableRowField";

import type { IBrandsData } from "../../../interfaces/mockInterfaces";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { brandsSelectors } from "../../../store/features/brandSlice/selectors";
import { fetchLoadBrands } from "../../../store/features/brandSlice/thunks";

export function Brands() {
  const dispatch = useAppDispatch();
  const brandsData = useAppSelector(brandsSelectors.brandsDataSelector);

  useEffect(() => {
    dispatch(fetchLoadBrands({}));
  }, [dispatch]);

  return (
    <div className={style["brands-page"]}>
      <FileFieldInput />
      <div className={style["table-block"]}>
        <table className={style["table-block__wrapper"]}>
          <thead>
            <tr className={style["table-block__header"]}>
              <th>Логотип бренда</th>
              <th colSpan={2}>Название бренда</th>
            </tr>
          </thead>
          <tbody className={style["table-block__table"]}>
            {brandsData.map((item: IBrandsData) => (
              <TableRowField key={item.id} icon={item.icon} name={item.name} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
