import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "@reactuses/core";

import { AuthCheckbox } from "./components/AuthCheckbox/AuthCheckbox";
import { Button } from "./components/Button/Button";
import { FormHeader } from "./components/FormHeader/FormHeader";
import style from "./FormLayout.module.scss";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { validationSchema } from "../constants/validationSchema";
import { authSelectors } from "../store/features/auth/selectors";
import { fetchAuthentication } from "../store/features/auth/thunks";
import { pathRoutes } from "../constants/pathRoutes";

export function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector(authSelectors.userLoginDataSelector);
  const errorMessage = useAppSelector(authSelectors.errorMessageSelector);
  const rememberMeCheck = useAppSelector(authSelectors.rememberMeCheckSelector);
  const [showPassword, togglePassword] = useToggle(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  async function handleAuth({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    dispatch(
      fetchAuthentication({
        email,
        password,
      })
    );
    if (rememberMeCheck) {
      localStorage.setItem("isAuth", JSON.stringify(userData));
    }
  }

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [dispatch, navigate, userData]);

  return (
    <div className={style["mainForm"]}>
      <div className={style["mainForm__container"]}>
        <FormHeader formTitle="Вход в учётную запись" />
        <div className={style["mainForm__body"]}>
          <form
            onSubmit={handleSubmit(handleAuth)}
            className={style["mainForm__form"]}
            noValidate
          >
            <div className={style["mainForm__form-wrapper"]}>
              <div className={style["mainForm__form-wrapper"]}>
                <div className={style["mainForm__form-item"]}>
                  <label htmlFor="email" className={style["mainForm__label"]}>
                    E-mail
                  </label>
                  <input
                    {...register("email")}
                    className="input"
                    type="email"
                    placeholder="Введите свой e-mail"
                    aria-label="input field"
                  />
                </div>
                {errors.email?.message && (
                  <div className="error">{errors.email?.message}</div>
                )}
                <div className={style["mainForm__form-item"]}>
                  <label
                    htmlFor="password"
                    className={style["mainForm__label"]}
                  >
                    Пароль
                  </label>
                  <input
                    {...register("password")}
                    className="input"
                    type={showPassword ? "password" : "text"}
                    placeholder="Введите пароль"
                    aria-label="input field"
                  />
                  <button
                    title="show password"
                    type="button"
                    onClick={togglePassword}
                    className={style["mainForm__show"]}
                  ></button>
                </div>
                {errors.password?.message && (
                  <div className="error">{errors.password?.message}</div>
                )}
              </div>
            </div>
            <AuthCheckbox />
            <div className={style["mainForm__buttons-wrapper"]}>
              {errorMessage && (
                <span className={style["mainForm__error"]}>{errorMessage}</span>
              )}
              <div className={style["mainForm__button"]}>
                <Button typeButton={"submit"} titleButton={"Войти"} />
              </div>
              <div className={style["mainForm__button"]}>
                <Link
                  to={`../${pathRoutes.register}`}
                  aria-label="register"
                  className={style["mainForm__register"]}
                >
                  У меня еще нет аккаунта
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
