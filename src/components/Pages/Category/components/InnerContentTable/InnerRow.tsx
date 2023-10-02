import React, { useRef, useState } from "react";

import type {
  ICatalogData,
  ISubCatalogData,
} from "../../../../../interfaces/mockInterfaces";

import style from "../../Category.module.scss";

interface IRowTable {
  item: ICatalogData | ISubCatalogData;
  id: string;
  callback?: (position: number) => void;
}

export function InnerRow({ item, callback, id }: IRowTable) {
  function onClickHandler() {
    if (callback) {
      callback(item.position);
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const [disable, setDisable] = useState(true);

  function editHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    inputRef.current?.focus();
    setDisable(false);
  }
  function saveInput() {
    setDisable(true);
  }

  return (
    <div
      className={style["inner-data-table__item"]}
      onClick={callback ? onClickHandler : undefined}
    >
      <label className={style["inner-data-table__label"]} htmlFor={id}>
        <input
          title={item.name}
          id={id}
          type="text"
          disabled={disable}
          defaultValue={item.name}
          className={style["inner-data-table__name"]}
          ref={inputRef}
          onBlur={saveInput}
        ></input>
      </label>
      <div className={style["inner-data-table__buttons"]}>
        <div className={style["inner-data-table__btn"]}>
          <button
            onClick={editHandler}
            title="edit"
            className="edit"
            data-id={id}
          />
        </div>
        <div className={style["inner-data-table__btn"]}>
          <button
            onClick={editHandler}
            title="delete"
            className="delete"
            data-id={id}
          />
        </div>
      </div>
    </div>
  );
}
