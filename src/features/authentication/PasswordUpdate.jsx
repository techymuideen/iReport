import { useForm } from 'react-hook-form';
import Password from '../../ui/Password';
import Label from '../../ui/Label';
import Button from '../../ui/Button';

const PasswordData = () => {
  const {
    register, // Register inputs
    handleSubmit, // Handle form submission
    formState: { errors }, // Access form errors
    watch, // Watch specific form values
  } = useForm();

  // Form submission handler
  const onSubmit = formData => {
    console.log('Submitted Data:', formData);
    // Here you can send the form data (currentPassword, newPassword, confirmPassword)
    // to your backend or handle further logic.
  };

  // Watch the newPassword and confirmPassword fields to validate they match
  const newPassword = watch('newPassword');

  return (
    <div className='p-4 sm:py-12 sm:px-16 bg-white rounded-md'>
      <h1 className='text-2xl font-semibold mb-6 uppercase'>Password change</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        {/* Current Password Field */}
        <div>
          <Label type='primary' id='currentPassword'>
            Current Password
          </Label>
          <Password
            id='currentPassword'
            {...register('currentPassword', {
              required: 'Current password is required',
            })}
          />
          {errors.currentPassword && (
            <p className='text-red-500 text-sm'>
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        {/* New Password Field */}
        <div>
          <Label type='primary' id='newPassword'>
            New Password
          </Label>
          <Password
            id='newPassword'
            {...register('newPassword', {
              required: 'New password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
          {errors.newPassword && (
            <p className='text-red-500 text-sm'>{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <Label type='primary' id='confirmPassword'>
            Confirm Password
          </Label>
          <Password
            id='confirmPassword'
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value =>
                value === newPassword || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type='submit'>Save Password</Button>
      </form>
    </div>
  );
};

export default PasswordData;
