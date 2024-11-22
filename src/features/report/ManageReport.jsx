import Pagination from '../../ui/Pagination';
import Table from './ReportTable';
import ReportTableOperations from './ReportTableOperations';

// Sample data for red-flag records
const reportData = [
  {
    id: 1,
    status: 'resolved',
    description: 'Issue 1 resolved',
    type: 'red-flag',
  },
  {
    id: 2,
    status: 'resolved',
    description: 'Issue 2 in draft',
    type: 'intervention',
  },
  {
    id: 3,
    status: 'investigation',
    description: 'Issue 3 under investigation',
    type: 'intervention',
  },
  {
    id: 4,
    status: 'rejected',
    description: 'Issue 4 rejected',
    type: 'red-flag',
  },
  {
    id: 5,
    status: 'resolved',
    description: 'Issue 5 resolved',
    type: 'red-flag',
  },
  {
    id: 6,
    status: 'rejected',
    description: 'Issue 6 rejected',
    type: 'intervention',
  },
];

const ManageReport = () => {
  return (
    <div className='flex flex-col gap-6'>
      <ReportTableOperations />
      <Table>
        <Table.Header>
          <span>Name</span>
          <span className='text-center sm:inline hidden'>Type</span>
          <span className='text-center sm:inline hidden'>Status</span>
        </Table.Header>
        <Table.Body
          data={reportData}
          render={item => (
            <Table.Row id={item.id} key={item.id}>
              <span>{item.description}</span>
              <span
                className={`px-2 py-2 rounded-full sm:inline hidden text-center ${
                  item.type === 'red-flag'
                    ? 'bg-red-500 text-white'
                    : 'bg-green-500 text-white'
                }`}>
                {item.type}
              </span>
              <span
                className={`px-2 text-center py-2 sm:inline hidden rounded-full  ${
                  item.status === 'resolved'
                    ? 'bg-[#0088FE] text-white'
                    : item.status === 'draft' || item.status === 'investigation'
                    ? 'bg-[#FFBB28] text-white'
                    : 'bg-[#FF8042] text-white'
                }`}>
                {item.status}
              </span>
            </Table.Row>
          )}
        />
        <Table.Footer>
          <Pagination count={100} />
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ManageReport;
