// src/hooks/useGoogleAuth.js
import { useMutation } from '@tanstack/react-query';
import { googleAuth as googleAuthApi } from '../../services/apiAuth';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useGoogleAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const googleAuthMutation = useMutation({
    mutationFn: googleAuthApi,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData(['user'], data.data.user);
      toast.success('Login successful');
      navigate('/', { replace: true });
    },
    onError: () => {
      toast.error('Google Auth Error');
    },
  });

  const handleGoogleSuccess = (authResult) => {
    if (authResult?.code) {
      googleAuthMutation.mutate(authResult.code);
    } else {
      toast.error('Invalid Google Response');
    }
  };
  return { handleGoogleSuccess, isLoading: googleAuthMutation.isLoading };
};
