import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Password from '../ui/Password';
import Label from '../ui/Label';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const passwordValue = watch('password', '');

  const onSubmit = data => console.log(data);

  return (
    <div className=' w-full px-5 py-12  min-h-[calc(100vh-4rem)] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white max-w-[30rem] flex-1 rounded-md font-semibold flex flex-col py-8 px-4 sm:px-6 gap-4 items-center'>
        <h2 className='text-2xl'>Signup</h2>
        <div className='w-full'>
          <Input
            type='email'
            placeholder='Email'
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

        <div className='w-full'>
          <Password
            placeholder='Create password'
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

        <div className='w-full'>
          <Password
            placeholder='Confirm password'
            password={passwordValue} // Pass password value to confirm password component
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: value =>
                value === passwordValue || 'Passwords do not match', // Custom validation to check if passwords match
            })}
          />
          {errors.confirmPassword && (
            <Label>{errors.confirmPassword.message}</Label>
          )}
        </div>
        <Button type='submit'>Signup</Button>

        <p className='text-slate-400 font-light'>
          Already have an account?{' '}
          <span className='text-sky-600'>
            <Link to='/login'>Login</Link>
          </span>
        </p>

        <div className='flex items-center w-full'>
          <div className='border-t border-gray-300 h-1 flex-grow'></div>
          <span className='px-3 text-gray-500'>OR</span>
          <div className='border-t border-gray-300 h-1 flex-grow'></div>
        </div>

        <button
          type='button'
          className='w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none'>
          <img
            src='https://img.icons8.com/color/24/000000/google-logo.png'
            alt='Google logo'
            className='w-5 h-5 mr-2'
          />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
