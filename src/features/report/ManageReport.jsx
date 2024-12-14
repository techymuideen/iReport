import Pagination from '../../ui/Pagination';
import Spinner from '../../ui/Spinner';
import Table from './ReportTable';
import ReportTableOperations from './ReportTableOperations';
import { useReports } from './useReports';
import toast from 'react-hot-toast';

const ManageReport = () => {
  const { reports, isLoading, error, count } = useReports();

  if (isLoading) return <Spinner />;
  if (error) toast.error(error.message);

  return (
    <div className="flex flex-col gap-6">
      <ReportTableOperations />
      <Table>
        <Table.Header>
          <span>Name</span>
          <span className="text-center sm:inline">Type</span>
          <span className="text-center sm:inline">Status</span>
        </Table.Header>
        <Table.Body
          data={reports}
          render={(item) => (
            <Table.Row id={item.id} key={item.id}>
              <span className="line-clamp-1">{item.title}</span>
              <span
                className={`rounded-full px-1 py-2 text-center sm:inline sm:px-2 ${
                  item.type === 'red-flag' ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {item.type}
              </span>
              <span
                className={`rounded-full px-1 py-2 text-center sm:inline sm:px-2 ${
                  item.status === 'resolved'
                    ? 'text--[#0088FE]'
                    : item.status === 'draft' || item.status === 'investigation'
                      ? 'text-[#FFBB28]'
                      : 'text-[#FF8042]'
                }`}
              >
                {item.status}
              </span>
            </Table.Row>
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ManageReport;
