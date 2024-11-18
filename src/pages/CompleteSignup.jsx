import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Label from '../ui/Label';

const Signup = () => {
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
        <h2 className='text-2xl'>Complete Signup</h2>
        <div className='w-full'>
          <Input
            type='text'
            placeholder='Firstname'
            {...register('firstname', {
              required: 'Firstname is required',
            })}
          />
          {errors.firstname && <Label>{errors.firstname.message}</Label>}
        </div>
        <div className='w-full'>
          <Input
            type='text'
            placeholder='Lastname'
            {...register('lastname', {
              required: 'Lastname is required',
            })}
          />
          {errors.lastname && <Label>{errors.lastname.message}</Label>}
        </div>
        <div className='w-full'>
          <Input
            type='text'
            placeholder='Other names'
            {...register('othername')}
          />
        </div>
        <div className='w-full'>
          <Input
            type='text'
            placeholder='Username'
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters',
              },
            })}
          />
          {errors.username && <Label>{errors.username.message}</Label>}
        </div>
        <div className='w-full'>
          <Input
            className='appearance-none'
            type='number'
            placeholder='Phone Number'
            {...register('phone', {
              required: 'Phone Number is required',
            })}
          />
          {errors.phone && <Label>{errors.phone.message}</Label>}
        </div>
        <Button type='submit'>Signup</Button>
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

export default Signup;
