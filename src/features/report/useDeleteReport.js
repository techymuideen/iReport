import { deleteReport as deleteReportApi } from '../../services/apiReport';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useDeleteReport = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteReport, isPending: isLoading } = useMutation({
    mutationFn: (id) => deleteReportApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries('reports');
      toast('Report deleted successfully!');
      navigate('/manage-report');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return { deleteReport, isLoading };
};
