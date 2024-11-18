import { useForm } from 'react-hook-form';

import Password from '../ui/Password';
import Button from '../ui/Button';
import Label from '../ui/Label';

const ResetPassword = () => {
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
        <h2 className='text-2xl'>Reset Password</h2>
        <div className='w-full'>
          <Password
            placeholder='Password'
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
            placeholder='Confirm Password'
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

        <Button type='submit'>Confirm</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
