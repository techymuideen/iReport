import { createReport as createReportApi } from '../../services/apiReport';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreateReport = () => {
  const queryClient = useQueryClient();

  const { mutate: createReport, isPending: isLoading } = useMutation({
    mutationFn: ({ payload }) => createReportApi({ payload }),
    onSuccess: () => {
      queryClient.invalidateQueries('reports');
      toast.success('Report created successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createReport, isLoading };
};
