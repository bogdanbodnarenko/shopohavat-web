import * as yup from "yup";

export interface IRegisterValues {
  email: string;
  password: string;
  name: string;
  phones?: string[];
  phone: string;
}

export const emailNotLongEnough = "email must be at least 3 characters";
export const nameNotLongEnough = "name must be at least 6 characters";
export const passwordNotLongEnough = "password must be at least 6 characters";
export const phoneNotValid = "phone is not valid";
export const invalidEmail = "email must be a valid email";

const email = yup
  .string()
  .min(3, emailNotLongEnough)
  .max(255)
  .email(invalidEmail)
  .required();
export const password = yup
  .string()
  .min(6, passwordNotLongEnough)
  .max(255)
  .required();

export const validProviderSchema = yup.object().shape({
  email,
  password,
  name: yup
    .string()
    .min(6, nameNotLongEnough)
    .max(255)
    .required(),
  phone: yup
    .string()
    .matches(/^((\+[380])+([0-9]){11})$/, phoneNotValid)
    .required(),
  url: yup
    .string()
    .notRequired()
    .url("Not a valid url")
});

export const validLoginSchema = yup.object().shape({ email, password });
