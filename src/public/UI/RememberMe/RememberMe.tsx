import React, { useCallback } from "react";

import style from "./RememberMe.module.scss";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setRemember } from "../../../store/features/auth/AuthSlice";
import { authSelectors } from "../../../store/features/auth/selectors";

export function RememberMe() {
  const dispatch = useAppDispatch();
  const rememberMe = useAppSelector(authSelectors.rememberMeSelector);

  const change = useCallback(() => {
    dispatch(setRemember(!rememberMe));
  }, [dispatch, rememberMe]);

  return (
    <div className={style["formCheck"]}>
      <input
        onChange={change}
        checked={rememberMe}
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
