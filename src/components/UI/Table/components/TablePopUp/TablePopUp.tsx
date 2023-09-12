import React from "react";

import style from "./TablePopUp.module.scss";

import { CloseImg, RecycleImg } from "../../../../../assets/images";

interface IPopUp {
  openPopup: boolean;
  PopUpToggle: () => void;
  checkedItemsArray: string[];
  deleteCellTable: () => void;
}

export function TablePopUp({
  openPopup,
  PopUpToggle,
  checkedItemsArray,
  deleteCellTable,
}: IPopUp): JSX.Element {
  return (
    <>
      {openPopup} && (
      <div className={style["popup"]}>
        <div className={style.popup__content}>
          <div onClick={PopUpToggle} className={style.popup__close}>
            <CloseImg />
          </div>
          <div className={style.popup__body}>
            <p className={style.popup__info}>
              Количество выбранных позиций:
              <span className={style.popup__count}>
                {checkedItemsArray.length > 0 ? checkedItemsArray.length : 1}
              </span>
            </p>
            <div className={style.popup__button_wrapper}>
              <button
                onClick={deleteCellTable}
                type="button"
                className={style.popup__button}
              >
                <RecycleImg />
                <span>Удалить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}
