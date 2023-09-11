import * as Yup from "yup";

const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]*$");

interface IValidationSchema {
  email: string;
  password: string;
}

interface IFormSchema extends IValidationSchema {
  confirm: string;
}

const validationSchema: Yup.ObjectSchema<IValidationSchema> =
  Yup.object().shape({
    email: Yup.string()
      .required("Обязательное поле")
      .matches(emailRegex, "Неверный email")
      .email("Неверный email"),

    password: Yup.string()
      .required("Обязательное поле")
      .min(4, "Пароль должен быть больше 4 символов"),
  });

const formSchema: Yup.ObjectSchema<IFormSchema> = Yup.object().shape({
  email: Yup.string()
    .required("Обязательное поле")
    .matches(emailRegex, "Неверный email")
    .email("Неверный email"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(4, "Пароль должен быть длиннее 4 символов")
    .matches(/\d/, "Пароль должен содержать цифру")
    .matches(/[A-z]/, "Пароль должен содержать букву"),
  confirm: Yup.string()
    .required("Обязательное поле")
    .oneOf([Yup.ref("password")], "Пароли не совпадают"),
});

export { validationSchema, formSchema };
