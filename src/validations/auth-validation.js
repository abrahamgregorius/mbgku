import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, "Email required").email("email tidak valid"),
  password: z.string().min(1, "Password required"),
});

export const registerFormSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().min(1, "Email required").email("email tidak valid"),
  password: z.string().min(1, "Password required"),
});
