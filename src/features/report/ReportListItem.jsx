import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Table from './ReportTable';
import Button from '../../ui/Button';

const ReportListItem = ({ redFlagData }) => {
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
              className={`px-4 py-2 text-center rounded-full ${
                item.type === 'red-flag'
                  ? 'bg-red-500 text-white'
                  : 'bg-green-500 text-white'
              }`}>
              {item.type}
            </span>
            <span
              className={`px-4 text-center py-2 rounded-full ${
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

ReportListItem.propTypes = {
  redFlagData: PropTypes.array.isRequired,
};

export default ReportListItem;
