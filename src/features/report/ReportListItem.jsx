import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Table from './ReportTable';
import Button from '../../ui/Button';

const ReportListItem = ({ reports }) => {
  const navigate = useNavigate();

  return (
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
              className={`line-clamp-1 rounded-full px-1 py-2 text-center sm:inline sm:px-4 ${
                item.type === 'red-flag' ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {item.type}
            </span>
            <span
              className={`line-clamp-1 rounded-full px-1 py-2 text-center sm:inline sm:px-4 ${
                item.status === 'resolved'
                  ? 'text-[#0088FE]'
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
        <Button onClick={() => navigate('/manage-report')}>See All</Button>
      </Table.Footer>
    </Table>
  );
};

ReportListItem.propTypes = {
  reports: PropTypes.array.isRequired,
};

export default ReportListItem;
