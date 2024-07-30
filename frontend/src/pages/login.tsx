import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginImage from '../assets/login_img.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginFormData {
  walmartID: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', data, {
        withCredentials: true,
      });
      if (response.data.token) {
        Cookies.set('token', response.data.token, { expires: 7 });
        toast.success("Login successful!");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error("Login failed: No token received");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Login failed: Invalid credentials");
        } else {
          toast.error("Login failed: " + (error.response?.data?.error || error.message));
        }
      } else {
        toast.error("Login failed: " + (error as Error).message);
      }
    }
  };

  return (
    <div className="w-full flex justify-center mt-20 p-2 space-x-4">
      <Card className="w-[950px]">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex">Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent className="flex w-full gap-16 p-12 mt-10">
          <div className="w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="walmartid">WalmartID</Label>
                  <Input
                    id="walmartid"
                    placeholder="Your WalmartID here..."
                    {...register('walmartID', { required: 'WalmartID is required' })}
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
                    {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full mt-10 hover:bg-blue-900">Sign in</Button>
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
