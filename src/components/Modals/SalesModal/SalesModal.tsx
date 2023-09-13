import React from "react";

import style from "./SalesModal.module.scss";

export function SalesModal() {
  return (
    <div className={style["sales"]}>
      <div className={style["sales__header"]}>
        <div className={style["header-button"]}>
          <div className={style["header-button__item"]}>
            <button type="button">Удалить</button>
          </div>
          <div className={style["header-button__item"]}>
            <button type="button">Сохранить</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className={style["sales__body"]}>
        <div className={style["sales-block"]}>
          <ul className={style["sales-block__list"]}>
            <li className={style["sales-block__list-item"]}>
              <label htmlFor="input-1" className={style["sales-block__label"]}>
                Начисление кешбека с покупки
              </label>
              <div className={style["sales-block__input-wrapper"]}>
                <input
                  disabled
                  id="input-1"
                  className={style["sales-block__input"]}
                  type="text"
                  value={"20%"}
                ></input>
              </div>
            </li>
            <li className={style["sales-block__list-item"]}>
              <label htmlFor="input-2" className={style["sales-block__label"]}>
                Категория
              </label>
              <div className={style["sales-block__input-wrapper"]}>
                <input
                  disabled
                  id="input-2"
                  className={style["sales-block__input"]}
                  type="text"
                  value={"Название категории"}
                ></input>
              </div>
            </li>
            <li className={style["sales-block__list-item"]}>
              <label htmlFor="input-3" className={style["sales-block__label"]}>
                Подкатегория
              </label>
              <div className={style["sales-block__input-wrapper"]}>
                <input
                  disabled
                  id="input-3"
                  className={style["sales-block__input"]}
                  type="text"
                  value={"Название подкатегории"}
                ></input>
              </div>
            </li>
            <li className={style["sales-block__list-item"]}>
              <label htmlFor="input-4" className={style["sales-block__label"]}>
                Бренд
              </label>
              <div className={style["sales-block__input-wrapper"]}>
                <input
                  disabled
                  id="input-4"
                  className={style["sales-block__input"]}
                  type="text"
                  value={"Имя бренда"}
                ></input>
              </div>
            </li>
            <li className={style["sales-block__list-item"]}>
              <label htmlFor="input-5" className={style["sales-block__label"]}>
                Товар
              </label>
              <div className={style["sales-block__input-wrapper"]}>
                <input
                  disabled
                  id="input-5"
                  className={style["sales-block__input"]}
                  type="text"
                  value={"Название товара"}
                ></input>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
