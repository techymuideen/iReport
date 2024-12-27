import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCompleteSignup } from '../features/authentication/useCompleteSignup';

import Input from '../ui/Input';
import Button from '../ui/Button';
import MiniSpinner from '../ui/MiniSpinner';
import Label from '../ui/Label';

const Signup = () => {
  const { completeSignup, isLoading } = useCompleteSignup();
  const { token } = useParams(); // Simulated route params
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!token) navigate('/signup');

  const onSubmit = (data) => completeSignup({ ...data, token });

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-5 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[30rem] flex-1 flex-col items-center gap-4 rounded-md bg-white px-4 py-8 font-semibold sm:px-6"
      >
        <h2 className="text-2xl">Complete Signup</h2>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Firstname*"
            {...register('firstname', {
              required: 'Firstname is required',
            })}
          />
          {errors.firstname && <Label>{errors.firstname.message}</Label>}
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Lastname*"
            {...register('lastname', {
              required: 'Lastname is required',
            })}
          />
          {errors.lastname && <Label>{errors.lastname.message}</Label>}
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Other names"
            {...register('othername')}
          />
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Username*"
            {...register('username', {
              required: 'Username is required',
              pattern: {
                value: /^[a-zA-Z0-9]*$/, // Alphanumeric regex
                message: 'Only alphanumeric characters are allowed',
              },
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters',
              },
            })}
          />
          {errors.username && <Label>{errors.username.message}</Label>}
        </div>

        <Button type="submit">
          {isLoading ? <MiniSpinner /> : 'Complete Signup'}
        </Button>
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

export default Signup;
