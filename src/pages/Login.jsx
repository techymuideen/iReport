import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLogin } from '../features/authentication/useLogin';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Password from '../ui/Password';
import Label from '../ui/Label';
import MiniSpinner from '../ui/MiniSpinner';
import GoogleAuth from '../features/authentication/GoogleAuth';

const Login = () => {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => login(data);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-5 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[30rem] flex-1 flex-col items-center gap-4 rounded-md bg-white px-4 py-8 font-semibold sm:px-6"
      >
        <h2 className="text-2xl">Login</h2>
        <div className="w-full">
          <Input
            id="email-username"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Please enter your email or username',
              minLength: {
                value: 6,
                message: 'Please enter a valid email or password.',
              },
            })}
          />
          {errors.username && <Label>{errors.username.message}</Label>}
        </div>
        <div className="w-full">
          <Password
            id="password"
            placeholder="Password"
            {...register('password', {
              required: 'Please enter your password.',
              minLength: {
                value: 6,
                message: 'Please enter a valid password.',
              },
            })}
          />
          {errors.password && <Label>{errors.password.message}</Label>}
        </div>
        <p className="text-sky-600">
          <Link to="/forget-password">Forget password?</Link>
        </p>
        <Button type="submit">{isLoading ? <MiniSpinner /> : 'Login'}</Button>
        <p className="font-light text-slate-400">
          Don&apos;t have an account an account?{' '}
          <span className="text-sky-600">
            <Link to="/signup">Signup</Link>
          </span>
        </p>

        <div className="flex w-full items-center">
          <div className="h-1 flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="h-1 flex-grow border-t border-gray-300"></div>
        </div>

        <GoogleAuth />
      </form>
    </div>
  );
};

export default Login;
