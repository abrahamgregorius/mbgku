import { auth } from "../../lib/firebase";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import AuthLayout from "../Layout/Authlayout";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../validations/auth-validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormInput from "../ui/common/FormInput";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const signIn = form.handleSubmit(async (values) => {
    try {
      const { email, password } = values;
      console.log(email, password);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button onClick={() => navigate("/register")} variant="link">
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={signIn} className="space-y-8">
              <FormInput
                form={form}
                label={"Email"}
                placeholder={"example@gmail.com"}
                type={"email"}
                name={"email"}
              />
              <FormInput
                form={form}
                name={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
                type={"password"}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default Login;
