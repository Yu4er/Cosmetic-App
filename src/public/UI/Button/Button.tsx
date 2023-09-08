import React from "react";

import style from "./Button.module.scss";

import { useAppSelector } from "../../../store/hooks";
import { authSelectors } from "../../../store/features/auth/selectors";

interface IButton {
  typeButton?: "button" | "submit" | "reset";
  titleButton: string;
}

export function Button({ typeButton, titleButton }: IButton) {
  const disabled = useAppSelector(authSelectors.pendingSelector);
  return (
    <button
      disabled={disabled}
      type={typeButton}
      aria-label={typeButton}
      className={style.mainForm__submit}
    >
      {titleButton}
    </button>
  );
}
