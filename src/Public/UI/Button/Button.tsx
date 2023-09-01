import React from "react";

import style from "./Button.module.scss";

interface IButton {
  typeButton: "button" | "submit" | "reset" | undefined;
  nameButton: string;
}

export function Button({ typeButton, nameButton }: IButton) {
  return (
    <button
      type={typeButton}
      aria-label={typeButton}
      className={style.mainForm__submit}
    >
      {nameButton}
    </button>
  );
}
