import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "./UI/Button/Button";
import { FormHeader } from "./UI/FormHeader/FormHeader";
import style from "./FormLayout.module.scss";

import { formSchema } from "../constants/validationSchema";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useShowPassword } from "../hooks/useShowPassword";
import { authSelectors } from "../store/features/auth/selectors";
import { fetchRegistration } from "../store/features/auth/thunks";

export function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorMessage = useAppSelector(authSelectors.errorMessageSelector);
  const regData = useAppSelector(authSelectors.userRegistrationDataSelector);
  const { showPass, showPassword } = useShowPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
  });

  async function handleRegistration({
    email,
    password,
  }: {
    email: string;
    password?: string;
  }) {
    dispatch(
      fetchRegistration({
        email,
        password,
      })
    );
  }
  useEffect(() => {
    regData && navigate("/login");
  }, [dispatch, navigate, regData]);

  return (
    <div className={style["mainForm"]}>
      <div className={style["mainForm__container"]}>
        <FormHeader formTitle="Создание учетной записи" />
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className={style["mainForm__form"]}
          noValidate
        >
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
            <div className="error">{errors.email?.message}</div>
            <div className={style["mainForm__form-item"]}>
              <label htmlFor="password" className={style["mainForm__label"]}>
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
                className={style["mainForm__show"]}
              ></button>
            </div>
            <div className="error">{errors.password?.message}</div>
            <div className={style["mainForm__form-item"]}>
              <label htmlFor="confirm" className={style["mainForm__label"]}>
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
                className={style["mainForm__show"]}
              ></button>
            </div>
            <div className="error">{errors.confirm?.message}</div>
          </div>
          <div className={style["mainForm__buttons-wrapper"]}>
            {errorMessage && (
              <span className={style["mainForm__error"]}>{errorMessage}</span>
            )}
            <div className={style["mainForm__button"]}>
              <Button typeButton={"submit"} titleButton={"Регистрация"} />
            </div>
            <div className={style["mainForm__button"]}>
              <Link
                to={"/auth/login"}
                aria-label="login"
                className={style["mainForm__register"]}
              >
                У меня уже есть аккаунт
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
