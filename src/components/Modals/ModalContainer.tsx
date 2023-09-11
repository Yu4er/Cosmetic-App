import React, { useCallback, type ReactPortal } from "react";
import { useEventListener } from "@reactuses/core";
import { createPortal } from "react-dom";

import style from "./ModalContainer.module.scss";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ComponentsList } from "../../constants/modalList";
import { closeModal } from "../../store/features/modal/modalSlice";
import { modalSelectors } from "../../store/features/modal/selectors";

function stopProp(event: React.MouseEvent<HTMLDivElement>) {
  event.stopPropagation();
}
export function ModalContainer(): ReactPortal | null {
  const dispatch = useAppDispatch();
  const modalId = useAppSelector(modalSelectors.idModalSelector);
  const keyupEscHandler = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.keyCode === 27) {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  const closeModalHandler = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  useEventListener("keyup", keyupEscHandler);

  if (modalId === "") {
    // eslint-disable-next-line unicorn/no-null -- need for createPortal
    return null;
  }

  return createPortal(
    <div className={style["modal"]} onClick={closeModalHandler}>
      <div className={style["modal__content"]} onClick={stopProp}>
        <div className={style["modal__body"]}>{ComponentsList[modalId]}</div>
      </div>
    </div>,

    document.querySelector("#modal") as Element | DocumentFragment
  );
}
