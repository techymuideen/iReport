import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useUser = () => {
  const {
    data: user,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  if (error) {
    toast.remove();
    toast.error(error.response.data.message);
  }

  return {
    user,
    id: user?._id,
    isLoading,
    isAuthenticated: user?.createdAt,
    email: user?.email,
  };
};
