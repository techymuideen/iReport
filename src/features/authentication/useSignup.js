import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useSignup = () => {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: ({ passwordConfirm, password, email }) =>
      signupApi({
        passwordConfirm,
        password,
        email,
      }),

    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { signup, isLoading };
};
