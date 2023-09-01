import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "./UI/Button/Button";
import style from "./FormLayout.module.scss";

import { pathRoutes } from "../constants/pathRoutes";
import { formSchema } from "../constants/validationSchema";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchRegistration } from "../store/features/AuthSlice";

export function Register() {
  const [showPass, setShowPass] = useState(true);

  function showPassword() {
    setShowPass((prev) => !prev);
  }

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const errorMessage = useAppSelector((state) => state.auth.error);
  const navigate = useNavigate();
  async function handleRegistration({
    email,
    password,
  }: {
    email: string;
    password?: string;
  }) {
    try {
      dispatch(
        fetchRegistration({
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
    }
  }, [dispatch, userData, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
  });

  return (
    <>
      <div className={style.mainForm__header}>
        <h3 className={style.mainForm__title}>Создание учетной записи</h3>
      </div>
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className={style.mainForm__form}
        noValidate
      >
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
          <div className="error">{errors.email?.message}</div>
          <div className={style["mainForm__form-item"]}>
            <label htmlFor="password" className={style.mainForm__label}>
              Пароль
            </label>
            <input
              {...register("password")}
              className="input"
              type={showPass ? "password" : "text"}
              placeholder="Введите свой пароль"
              aria-label="input field"
            />
            <button
              title="show password"
              type="button"
              onClick={showPassword}
              className={style.mainForm__show}
            ></button>
          </div>
          <div className="error">{errors.password?.message}</div>
          <div className={style["mainForm__form-item"]}>
            <label htmlFor="confirm" className={style.mainForm__label}>
              Повторите пароль
            </label>
            <input
              {...register("confirm")}
              className="input"
              type={showPass ? "password" : "text"}
              placeholder="Повторите пароль"
              aria-label="input field"
            />
            <button
              title="show password"
              type="button"
              onClick={showPassword}
              className={style.mainForm__show}
            ></button>
          </div>
          <div className="error">{errors.confirm?.message}</div>
        </div>
        <div className={style["mainForm__buttons-wrapper"]}>
          <span className={style.mainForm__error}>{errorMessage}</span>
          <div className={style.mainForm__button}>
            <Button typeButton={"submit"} nameButton={"Регистрация"} />
          </div>
          <div className={style.mainForm__button}>
            <Link
              to={pathRoutes.login}
              aria-label="login"
              className={style.mainForm__register}
            >
              У меня уже есть аккаунт
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
