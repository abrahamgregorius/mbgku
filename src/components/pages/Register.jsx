import { auth, db } from "../../lib/firebase";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../Layout/Authlayout";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../ui/common/FormInput";
import { registerFormSchema } from "../../validations/auth-validation";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const register = form.handleSubmit(async (values) => {
    try {
      const { name, email, password } = values;

      const res = await createUserWithEmailAndPassword(auth, email, password);
      const id = res.user.uid;
      await setDoc(doc(db, "users", id), {
        name,
        email,
        role: "masyarakat",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register your account</CardTitle>
          <CardDescription>
            Enter your data to create your account
          </CardDescription>
          <CardAction>
            <Button onClick={() => navigate("/login")} variant="link">
              Sign In
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={register} className="space-y-8">
              <FormInput
                form={form}
                label={"Name"}
                placeholder={"test"}
                type={"text"}
                name={"name"}
              />
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

export default Register;
