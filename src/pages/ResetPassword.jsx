import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useResetPassword } from '../features/authentication/useResetPassword';

import Password from '../ui/Password';
import Button from '../ui/Button';
import Label from '../ui/Label';
import { Link } from 'react-router-dom';
import MiniSpinner from '../ui/MiniSpinner';

const ResetPassword = () => {
  let { token } = useParams();

  const { isLoading, resetPassword } = useResetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const passwordValue = watch('password', '');

  const onSubmit = ({ password, passwordConfirm }) => {
    resetPassword({ password, passwordConfirm, token });
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-5 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[30rem] flex-1 flex-col items-center gap-4 rounded-md bg-white px-4 py-8 font-semibold sm:px-6"
      >
        <h2 className="text-2xl">Reset Password</h2>
        <div className="w-full">
          <Password
            placeholder="Password"
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
            placeholder="Confirm Password"
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

export default ResetPassword;
