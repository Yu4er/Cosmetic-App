import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RememberMe } from "./UI/RememberMe/RememberMe";
import { Button } from "./UI/Button/Button";
import style from "./FormLayout.module.scss";

import { fetchAuthentication } from "../store/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { pathRoutes } from "../constants/pathRoutes";
import { validationSchema } from "../constants/validationSchema";

export function Login() {
  const [inputType, setInputType] = useState("password");

  function showPassword() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const rememberMe = useAppSelector((state) => state.auth.rememberMe);
  const errorMessage = useAppSelector((state) => state.auth.error);

  const navigate = useNavigate();

  async function handleAuth({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      dispatch(
        fetchAuthentication({
          email,
          password,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (userData) {
      navigate("/");
      if (rememberMe) {
        localStorage.setItem("isAuth", JSON.stringify(userData));
      }
    }
  }, [dispatch, userData, navigate]);

  useEffect(() => {
    if (userData) {
      sessionStorage.setItem("isAuth", JSON.stringify(userData));
      navigate("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  return (
    <>
      <div className={style.mainForm__header}>
        <h3 className={style.mainForm__title}>Вход в учётную запись</h3>
      </div>
      <div className={style.mainForm__body}>
        <form
          onSubmit={handleSubmit(handleAuth)}
          className={style.mainForm__form}
          noValidate
        >
          <div className={style["mainForm__form-wrapper"]}>
            <div className={style["mainForm__form-wrapper"]}>
              <div className={style["mainForm__form-item"]}>
                <label htmlFor="email" className={style.mainForm__label}>
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
                <label htmlFor="password" className={style.mainForm__label}>
                  Пароль
                </label>
                <input
                  {...register("password")}
                  className="input"
                  type={inputType}
                  placeholder="Введите пароль"
                  aria-label="input field"
                />
                <button
                  title="show password"
                  type="button"
                  onClick={showPassword}
                  className={style.mainForm__show}
                ></button>
              </div>
              {errors.password?.message && (
                <div className="error">{errors.password?.message}</div>
              )}
            </div>
          </div>
          <RememberMe remember={rememberMe} />
          <div className={style["mainForm__buttons-wrapper"]}>
            <span className={style.mainForm__error}>{errorMessage}</span>
            <div className={style.mainForm__button}>
              <Button typeButton={"submit"} nameButton={"Войти"} />
            </div>
            <div className={style.mainForm__button}>
              <Link
                to={pathRoutes.register}
                aria-label="register"
                className={style.mainForm__register}
              >
                У меня еще нет аккаунта
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
