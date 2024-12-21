import { changeStatus as changeStatusApi } from '../../services/apiReport';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatus, isPending } = useMutation({
    mutationFn: ({ reportId, value }) => changeStatusApi({ reportId, value }),

    onSuccess: (data) => {
      queryClient.invalidateQueries(['reports', data.data.id]);
      toast.success('Report updated successfully!');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { changeStatus, isPending };
};
