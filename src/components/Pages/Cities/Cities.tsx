import React, { useEffect } from "react";

import style from "./Cities.module.scss";
import { InputFormFields } from "./components/InputFormFields/InputFormFields";
import { TableRowField } from "./components/TableRowFiled/TableRowField";

import type { ICitiesData } from "../../../interfaces/mockInterfaces";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchLoadCities } from "../../../store/features/citySlice/thunks";
import { citiesSelectors } from "../../../store/features/citySlice/selectors";

export function Cities() {
  const dispatch = useAppDispatch();
  const citiesData = useAppSelector(citiesSelectors.citiesDataSelector);

  useEffect(() => {
    dispatch(fetchLoadCities({}));
  }, [dispatch]);
  return (
    <div className={style["cities-page"]}>
      <InputFormFields />
      <div className={style["table-block"]}>
        <table className={style["table-block__wrapper"]}>
          <thead>
            <tr className={style["table-block__header"]}>
              <th>Город</th>
              <th colSpan={2}>Адрес</th>
            </tr>
          </thead>
          <tbody className={style["table-block__table"]}>
            {citiesData.map((item: ICitiesData) => (
              <TableRowField
                key={item.id}
                city={item.name}
                address={item.address}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
