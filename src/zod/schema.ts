import { z } from "zod";
import {
  EmailSchema,
  NameSchema,
  PasswordSchema,
  UsernameSchema,
} from "./user-validation";

export const userSignUpSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
  name: NameSchema,
  email: EmailSchema,
});

export const userSignInSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export const userForgotPasswordSchema = z.object({
  email: EmailSchema,
});

export const userResetPasswordSchema = z.object({
  password: PasswordSchema,
  confirmPassword: PasswordSchema,
});
