import { useQuery } from '@tanstack/react-query';
import { getReport } from '../../services/apiReport';
import { useParams } from 'react-router-dom';

export const useReport = () => {
  const { reportId } = useParams();

  const {
    data: report,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(reportId),
  });

  return {
    report,
    isLoading,
    error,
  };
};
