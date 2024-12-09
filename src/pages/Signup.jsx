import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSignup } from '../features/authentication/useSignup';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Password from '../ui/Password';
import MiniSpinner from '../ui/MiniSpinner';
import Label from '../ui/Label';

const Signup = () => {
  const { signup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const passwordValue = watch('password', '');

  const onSubmit = ({ email, password, passwordConfirm }) => {
    signup(
      { email, password, passwordConfirm },
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
        <h2 className="text-2xl">Signup</h2>
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

        <div className="w-full">
          <Password
            placeholder="Create password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && <Label>{errors.password.message}</Label>}
        </div>

        <div className="w-full">
          <Password
            placeholder="Confirm password"
            password={passwordValue} // Pass password value to confirm password component
            id="passwordConfirm"
            {...register('passwordConfirm', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === passwordValue || 'Passwords do not match', // Custom validation to check if passwords match
            })}
          />
          {errors.passwordConfirm && (
            <Label>{errors.passwordConfirm.message}</Label>
          )}
        </div>
        <Button type="submit">{isLoading ? <MiniSpinner /> : 'Signup'}</Button>

        <p className="font-light text-slate-400">
          Already have an account?{' '}
          <span className="text-sky-600">
            <Link to="/login">Login</Link>
          </span>
        </p>

        <div className="flex w-full items-center">
          <div className="h-1 flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="h-1 flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center rounded border border-gray-300 px-4 py-2 shadow hover:bg-gray-100 focus:outline-none"
        >
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google logo"
            className="mr-2 h-5 w-5"
          />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
