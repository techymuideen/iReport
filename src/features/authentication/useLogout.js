import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      localStorage.removeItem('token');
      queryClient.setQueryData(['user'], ['']);
      navigate('/login');
    },
    onError: () => {
      toast.error('Something went wrong!');
    },
  });

  return { logout, isLoading };
};
