import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Table from './ReportTable';

// Sample data for red-flag records
const redFlagData = [
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
  const navigate = useNavigate();

  return (
    <Table>
      <Table.Header>
        <span>Name</span>
        <span className='text-center'>Type</span>
        <span className='text-center'>Status</span>
      </Table.Header>
      <Table.Body
        data={redFlagData}
        render={item => (
          <Table.Row id={item.id} key={item.id}>
            <span>{item.description}</span>
            <span
              className={`px-2 py-2 rounded-full text-center ${
                item.type === 'red-flag'
                  ? 'bg-red-500 text-white'
                  : 'bg-green-500 text-white'
              }`}>
              {item.type}
            </span>
            <span
              className={`px-2 text-center py-2 rounded-full  ${
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
        <Button onClick={() => navigate('/manage-report')}>See All</Button>
      </Table.Footer>
    </Table>
  );
};

export default ManageReport;
