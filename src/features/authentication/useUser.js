import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export const useUser = () => {
  const {
    data: user,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return {
    user,
    id: user?._id,
    isLoading,
    isAuthenticated: user?.createdAt,
    email: user?.email,
    error,
  };
};
