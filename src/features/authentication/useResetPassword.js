import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { resetPassword as resetPasswordApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useResetPassword = () => {
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending: isLoading } = useMutation({
    mutationFn: ({ password, passwordConfirm, token }) =>
      resetPasswordApi({
        password,
        passwordConfirm,
        token,
      }),

    onSuccess: () => {
      toast.success(
        'Password changed succefully! Please log in with your new password.',
      );
      navigate('/', { replace: true });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { resetPassword, isLoading };
};
