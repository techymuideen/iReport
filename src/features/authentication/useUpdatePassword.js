import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePasswordApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useUpdatePassword = () => {
  const { mutate: updatePassword, isPending: isLoading } = useMutation({
    mutationFn: ({ passwordCurrent, password, passwordConfirm }) =>
      updatePasswordApi({ passwordCurrent, password, passwordConfirm }),

    onSuccess: () => {
      toast.success('Password changed succesfully!');
    },

    onError: (error) => {
      toast.error(error.response.data.message);
      console.log(error);
    },
  });

  return { updatePassword, isLoading };
};
