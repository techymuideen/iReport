import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllReport } from '../../services/apiReport';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export const useReports = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // // FILTER
  const filter1Value = searchParams.get('status');
  const filter2Value = searchParams.get('type');
  const filter1 =
    !filter1Value || filter1Value === 'all'
      ? null
      : { field: 'status', value: filter1Value };

  const filter2 =
    !filter2Value || filter2Value === 'all'
      ? null
      : { field: 'type', value: filter2Value };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // QUERY
  const {
    isLoading,
    data: { data: reports, count } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ['reproducts', filter1Value, filter2Value, page],
    queryFn: () => getAllReport({ page, filter1, filter2 }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['reports', filter1Value, filter2Value, page + 1],
      queryFn: () => getAllReport({ page: page + 1, filter1, filter2 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['reports', filter1Value, filter2Value, page - 1],
      queryFn: () => getAllReport({ page: page - 1, filter1, filter2 }),
    });

  return { isLoading, error, reports, count, refetch };
};
