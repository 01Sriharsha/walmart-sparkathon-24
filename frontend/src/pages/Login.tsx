import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoginImage from "../assets/login_img.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormData {
  walmartID: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    defaultValues: {
      walmartID: "",
      password: "",
    },
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
      toast.success("Login successful!");
      reset();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Login failed: ${error.message}`);
      } else {
        toast.error("Login failed: An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full flex justify-center mt-20 p-2 space-x-4">
      <Card className="w-[950px]">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex w-full gap-16 p-12 mt-10">
          <div className="w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="walmartID">WalmartID</Label>
                  <Input
                    id="walmartID"
                    placeholder="Your WalmartID here..."
                    {...register("walmartID", {
                      required: "WalmartID is required",
                    })}
                  />
                  {errors.walmartID && (
                    <p className="text-red-500">{errors.walmartID.message}</p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full mt-10 hover:bg-blue-900">
                Sign in
              </Button>
            </form>
          </div>
          <div className="w-1/2 flex justify-center p-2">
            <img src={LoginImage} alt="login Image" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
