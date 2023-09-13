import React, { useCallback } from "react";

import style from "./AuthCheckbox.module.scss";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setRemember } from "../../../store/features/auth/authSlice";
import { authSelectors } from "../../../store/features/auth/selectors";

export function AuthCheckbox() {
  const dispatch = useAppDispatch();
  const rememberMeCheckbox = useAppSelector(
    authSelectors.rememberMeCheckboxSelector
  );

  const change = useCallback(() => {
    dispatch(setRemember(!rememberMeCheckbox));
  }, [dispatch, rememberMeCheckbox]);

  return (
    <div className={style["formCheck"]}>
      <input
        onChange={change}
        checked={rememberMeCheckbox}
        type="checkbox"
        className={style["formCheck__input"]}
        id="rememberMe"
      ></input>
      <label className={style["formCheck__label"]} htmlFor="rememberMe">
        Запомнить меня
      </label>
    </div>
  );
}
