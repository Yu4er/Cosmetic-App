import React from "react";

import style from "./FormHeader.module.scss";

interface IFormHeaderProps {
  formTitle: string;
}

export function FormHeader({ formTitle }: IFormHeaderProps) {
  return (
    <div className={style["mainForm__header"]}>
      <h3 className={style["mainForm__title"]}>{formTitle}</h3>
    </div>
  );
}
