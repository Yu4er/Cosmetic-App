import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./FileFieldInput.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationFile } from "../../../../../constants/validationSchema";

export function FileFieldInput() {
  const [fileName, setFileName] = useState("Загрузите логотип бренда");

  //Для проверки ввода данных
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationFile),
    mode: "onSubmit",
  });

  function handleFileDownload(event: React.SyntheticEvent<HTMLInputElement>) {
    let file = event.target as HTMLInputElement;
    setFileName(file.value.split("\\")[2]);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={style["input-block"]}
      >
        <div className={style["input-block__item"]}>
          <input
            {...register("name")}
            type="text"
            className={style["input-block__input"]}
            placeholder="Введите название бренда"
          />
        </div>
        <div className={style["input-block__item"]}>
          <div className={style["input-block__logo"]}>
            <p className={style["input-block__file-name"]}>{fileName}</p>
            <label className={style["input-block__label"]}>
              <input
                {...register("files")}
                accept="image/png, image/jpeg, image/svg, image/jpg"
                type="file"
                className={style["input-block__input"]}
                onChange={handleFileDownload}
              />
            </label>
          </div>
          <span>Размер логотипа 500x500 px PNG, JPG, JPEG</span>
        </div>
        <button className={style["input-block__button"]} type="submit">
          Добавить
        </button>
      </form>
      {errors.name && <div className="error">{errors.name.message}</div>}
      {errors.files && <div className="error">{errors.files.message}</div>}
    </>
  );
}
