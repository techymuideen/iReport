import { useMutation, useQueryClient } from '@tanstack/react-query';
import { completeSignup as completeSignupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useCompleteSignup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: completeSignup, isPending: isLoading } = useMutation({
    mutationFn: ({
      firstname,
      lastname,
      othernames,
      phoneNumber,
      username,
      token,
    }) =>
      completeSignupApi({
        firstname,
        lastname,
        othernames,
        phoneNumber,
        username,
        token,
      }),

    onSuccess: (response) => {
      localStorage.setItem('token', response.token);
      queryClient.setQueryData(['user'], response.data.user);
      navigate('/', { replace: true });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { completeSignup, isLoading };
};
