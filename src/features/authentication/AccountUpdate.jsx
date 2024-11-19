import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import Profile from '../../../public/img/user-18.jpg';

const AccountUpdate = () => {
  const data = {
    firstname: 'muideen',
    lastname: 'Olasunkanmi',
    othername: 'Femi',
    username: 'techymui',
    email: 'techymuideen@gmail.com',
    phoneNumber: '08036216292',
    profileImage: Profile,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
  });

  const onSubmit = formData => {
    console.log('Submitted Data:', formData);

    const imageFile = formData.profileImage?.[0];
    if (imageFile) {
      console.log('Profile Image:', imageFile);
    }
    // Add logic to save/update the account details
  };

  return (
    <div className='py-12 px-16 bg-white rounded-md'>
      <h1 className='text-2xl font-semibold mb-6 uppercase'>
        Your account settings
      </h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col items-center'>
          <div className='shrink-0'>
            <img
              className='h-16 w-16 object-cover rounded-full'
              src={Profile}
              alt='Current profile photo'
            />
          </div>
          <label className='block'>
            <span className='sr-only'>Choose profile photo</span>
            <input
              type='file'
              accept='image/*'
              className='block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100'
              {...register('profileImage')}
            />
          </label>
        </div>

        <div>
          <Label type='primary' id='username'>
            Username
          </Label>
          <Input
            type='text'
            id='username'
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username.message}</p>
          )}
        </div>

        <div>
          <Label type='primary' id='firstname'>
            First Name
          </Label>
          <Input
            type='text'
            id='firstname'
            {...register('firstname', { required: 'First name is required' })}
          />
          {errors.firstname && (
            <p className='text-red-500 text-sm'>{errors.firstname.message}</p>
          )}
        </div>

        <div>
          <Label type='primary' id='lastname'>
            Last Name
          </Label>
          <Input
            type='text'
            id='lastname'
            {...register('lastname', { required: 'Last name is required' })}
          />
          {errors.lastname && (
            <p className='text-red-500 text-sm'>{errors.lastname.message}</p>
          )}
        </div>

        <div>
          <Label type='primary' id='othername'>
            Other Name
          </Label>
          <Input type='text' id='othername' {...register('othername')} />
        </div>

        <div>
          <Label type='primary' id='email'>
            Email
          </Label>
          <Input
            type='email'
            id='email'
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label type='primary' id='phoneNumber'>
            Phone Number
          </Label>
          <Input
            type='number'
            id='phoneNumber'
            {...register('phoneNumber', {
              required: 'Phone number is required',
            })}
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-sm'>{errors.phoneNumber.message}</p>
          )}
        </div>

        <Button type='submit'>Save Settings</Button>
      </form>
    </div>
  );
};

export default AccountUpdate;
