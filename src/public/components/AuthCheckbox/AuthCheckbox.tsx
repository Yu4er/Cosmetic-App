import React, { useCallback } from "react";

import style from "./AuthCheckbox.module.scss";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setRemember } from "../../../store/features/auth/authSlice";
import { authSelectors } from "../../../store/features/auth/selectors";

export function AuthCheckbox() {
  const dispatch = useAppDispatch();
  const rememberMeCheck = useAppSelector(authSelectors.rememberMeCheckSelector);

  const change = useCallback(() => {
    dispatch(setRemember(!rememberMeCheck));
  }, [dispatch, rememberMeCheck]);

  return (
    <div className={style["formCheck"]}>
      <input
        onChange={change}
        checked={rememberMeCheck}
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
