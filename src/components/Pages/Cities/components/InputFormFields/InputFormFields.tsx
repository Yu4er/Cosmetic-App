import React from "react";

import style from "./InputFormFields.module.scss";

export function InputFormFields() {
  return (
    <>
      <form className={style["input-block"]}>
        <input
          type="text"
          className={style["input-block__input"]}
          placeholder="Введите название города"
        />
        <input
          type="text"
          className={style["input-block__input"]}
          placeholder="Введите адрес"
        />
        <button className={style["input-block__button"]} type="button">
          Добавить город
        </button>
      </form>
    </>
  );
}
