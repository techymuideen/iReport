import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useUpdateCurrentUser } from './useUpdateAccount';
import { FiPlusCircle } from 'react-icons/fi';
import { useUser } from './useUser';
import { useDropzone } from 'react-dropzone';

import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import MiniSpinner from '../../ui/MiniSpinner';
import AccountUpdateSkeleton from './AccountUpdateSkeleton';
import toast from 'react-hot-toast';

const AccountUpdate = () => {
  const { isLoading, user, error } = useUser();
  const [imagePreview, setImagePreview] = useState(user?.photo || '');
  const { isPending, updateCurrentUser } = useUpdateCurrentUser();
  const [uploadedFile, setUploadedFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      firstname: user?.firstname || '',
      lastname: user?.lastname || '',
      othernames: user?.othernames || '',
      username: user?.username || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
    });
    setImagePreview(user?.photo || '');
  }, [user, reset]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    maxFiles: 1,
  });

  const onSubmit = (formData) => {
    const payload = new FormData();

    // Append form fields
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    // Append file if available
    if (uploadedFile) {
      payload.append('photo', uploadedFile);
    }

    updateCurrentUser(payload);
  };

  if (error) {
    toast.remove();
    toast.error(error.response.data.message);
  }

  return (
    <div className="rounded-md bg-white px-4 py-4 sm:px-16 sm:py-12">
      <h1 className="mb-6 text-2xl font-semibold uppercase">
        Your account settings
      </h1>
      {isLoading && <AccountUpdateSkeleton />}
      {!isLoading && (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Profile Photo Section */}
          <div className="flex flex-col items-center">
            <div
              {...getRootProps({
                className: 'mt-4 border-dashed border-2 border-gray-300 p-4',
              })}
              className={`mt-4 cursor-pointer p-4 text-center ${isDragActive ? 'bg-gray-200' : ''}`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <div className="flex shrink-0 items-end justify-end">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={imagePreview}
                    alt="Profile Preview"
                  />
                  <span className="">
                    <FiPlusCircle size={20} />
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div>
            <Label type="primary" id="username">
              Username
            </Label>
            <Input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div>
            <Label type="primary" id="firstname">
              First Name
            </Label>
            <Input
              type="text"
              id="firstname"
              {...register('firstname', { required: 'First name is required' })}
            />
            {errors.firstname && (
              <p className="text-sm text-red-500">{errors.firstname.message}</p>
            )}
          </div>

          <div>
            <Label type="primary" id="lastname">
              Last Name
            </Label>
            <Input
              type="text"
              id="lastname"
              {...register('lastname', { required: 'Last name is required' })}
            />
            {errors.lastname && (
              <p className="text-sm text-red-500">{errors.lastname.message}</p>
            )}
          </div>

          <div>
            <Label type="primary" id="othername">
              Other Name
            </Label>
            <Input type="text" id="othername" {...register('othernames')} />
          </div>

          <div>
            <Label type="primary" id="phoneNumber">
              Phone Number
            </Label>
            <Input
              type="number"
              id="phoneNumber"
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <Button type="submit">
            {isPending ? <MiniSpinner /> : 'Save Settings'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default AccountUpdate;
