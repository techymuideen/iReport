import { useForm } from 'react-hook-form';
import { useUpdatePassword } from './useUpdatePassword';
import Password from '../../ui/Password';
import Label from '../../ui/Label';
import Button from '../../ui/Button';
import MiniSpinner from '../../ui/MiniSpinner';

const PasswordData = () => {
  const { updatePassword, isLoading } = useUpdatePassword();
  const {
    register, // Register inputs
    handleSubmit, // Handle form submission
    formState: { errors }, // Access form errors
    reset,
    watch, // Watch specific form values
  } = useForm();

  // Form submission handler
  const onSubmit = (formData) => {
    updatePassword(formData, {
      onSuccess: reset(),
    });
  };

  // Watch the password and passwordConfirm fields to validate they match
  const password = watch('password');

  return (
    <div className="rounded-md bg-white p-4 sm:px-16 sm:py-12">
      <h1 className="mb-6 text-2xl font-semibold uppercase">Password change</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Current Password Field */}
        <div>
          <Label type="primary" id="passwordCurrent">
            Current Password
          </Label>
          <Password
            id="passwordCurrent"
            {...register('passwordCurrent', {
              required: 'Current password is required',
            })}
          />
          {errors.passwordCurrent && (
            <p className="text-sm text-red-500">
              {errors.passwordCurrent.message}
            </p>
          )}
        </div>

        {/* New Password Field */}
        <div>
          <Label type="primary" id="password">
            New Password
          </Label>
          <Password
            id="password"
            {...register('password', {
              required: 'New password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <Label type="primary" id="passwordConfirm">
            Confirm Password
          </Label>
          <Password
            id="passwordConfirm"
            {...register('passwordConfirm', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
          {errors.passwordConfirm && (
            <p className="text-sm text-red-500">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit">
          {isLoading ? <MiniSpinner /> : 'Save Password'}
        </Button>
      </form>
    </div>
  );
};

export default PasswordData;
