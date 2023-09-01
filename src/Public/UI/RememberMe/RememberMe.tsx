import React, { useCallback } from "react";

import style from "./RememberMe.module.scss";

import { useAppDispatch } from "../../../store/hooks";
import { setRemember } from "../../../store/features/AuthSlice";

interface IRememberMe {
  remember: boolean;
}

export function RememberMe({ remember }: IRememberMe) {
  const dispatch = useAppDispatch();

  const change = useCallback(() => {
    dispatch(setRemember(!remember));
  }, [dispatch, remember]);

  return (
    <div className={style.formCheck}>
      <input
        onChange={change}
        checked={remember}
        type="checkbox"
        className={style.formCheck__input}
        id="rememberMe"
      ></input>
      <label className={style.formCheck__label} htmlFor="rememberMe">
        Запомнить меня
      </label>
    </div>
  );
}
