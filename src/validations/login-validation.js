import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().min(1, "Email required").email("email tidak valid"),
  password: z.string().min(1, "Password required"),
});

export default loginFormSchema;
