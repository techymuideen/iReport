import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser as updateCurrentUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isPending } = useMutation({
    mutationFn: (payload) => updateCurrentUserApi(payload),
    onSuccess: (response) => {
      console.log(response);
      queryClient.setQueryData(['user'], response.data.user);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      console.log(error);
    },
  });

  return { isPending, updateCurrentUser };
};
