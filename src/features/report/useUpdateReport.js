import { updateReport as updateReportApi } from '../../services/apiReport';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const useUpdateReport = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { reportId } = useParams();

  const { mutate: updateReport, isPending } = useMutation({
    mutationFn: ({ payload }) => updateReportApi({ reportId, payload }),
    onSuccess: () => {
      queryClient.invalidateQueries('reports');
      toast.success('Report updated successfully');
      navigate('/manage-report');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateReport, isPending };
};
