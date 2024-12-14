import { useMutation } from '@tanstack/react-query';
import { forgetPassword as forgetPasswordApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useForgetPassword = () => {
  const { mutate: forgetPassword, isPending: isLoading } = useMutation({
    mutationFn: ({ email }) =>
      forgetPasswordApi({
        email,
      }),

    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { forgetPassword, isLoading };
};
