import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Password from '../ui/Password';
import Label from '../ui/Label';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className=' w-full px-5 py-12  min-h-[calc(100vh-4rem)] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white max-w-[30rem] flex-1 rounded-md font-semibold flex flex-col py-8 px-4 sm:px-6 gap-4 items-center'>
        <h2 className='text-2xl'>Login</h2>
        <div className='w-full'>
          <Input
            id='email-username'
            type='text'
            placeholder='Email or Unsername'
            {...register('username', {
              required: 'Please enter your email or username',
              minLength: {
                value: 6,
                message: 'Please enter a valid email or password.',
              },
            })}
          />
          {errors.username && <Label>{errors.username.message}</Label>}
        </div>
        <div className='w-full'>
          <Password
            id='password'
            placeholder='Password'
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
        <p className='text-sky-600'>
          <Link to='/forget-password'>Forget password?</Link>
        </p>
        <Button type='submit'>Login</Button>
        <p className='text-slate-400 font-light'>
          Don&apos;t have an account an account?{' '}
          <span className='text-sky-600'>
            <Link to='/signup'>Signup</Link>
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
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
