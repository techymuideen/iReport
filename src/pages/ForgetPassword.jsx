import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useForgetPassword } from '../features/authentication/useForgetPassword';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Label from '../ui/Label';
import MiniSpinner from '../ui/MiniSpinner';

const ForgetPassword = () => {
  const { isLoading, forgetPassword } = useForgetPassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email }) => {
    forgetPassword(
      { email },
      {
        onSuccess: () => reset(),
      },
    );
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-5 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[30rem] flex-1 flex-col items-center gap-4 rounded-md bg-white px-4 py-8 font-semibold sm:px-6"
      >
        <h2 className="text-2xl">Forget Password</h2>
        <div className="w-full">
          <Input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // regex validation for email format
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && <Label>{errors.email.message}</Label>}
        </div>
        <Button type="submit">{isLoading ? <MiniSpinner /> : 'Confirm'}</Button>
        <p className="font-light text-slate-400">
          Already have an account?{' '}
          <span className="text-sky-600">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
