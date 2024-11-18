import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Label from '../ui/Label';

const ForgetPassword = () => {
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
        <h2 className='text-2xl'>Forget Password</h2>
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
        <Button type='submit'>Confirm</Button>
        <p className='text-slate-400 font-light'>
          Already have an account?{' '}
          <span className='text-sky-600'>
            <Link to='/login'>Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
