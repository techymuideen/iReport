import PropTypes from 'prop-types';
import { useUser } from '../authentication/useUser';

const ReportSummary = ({ reports }) => {
  const { user } = useUser();
  const resolved = reports.filter(
    (record) => record.status === 'resolved',
  ).length;
  const unresolved = reports.filter(
    (record) => record.status === 'investigating',
  ).length;
  const rejected = reports.filter(
    (record) => record.status === 'rejected',
  ).length;

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">
        Welcome back {user?.firstname}
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Resolved Reports:</span>
          <span className="text-gray-700">{resolved}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Unresolved Reports:</span>
          <span className="text-gray-700">{unresolved}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Rejected Reports:</span>
          <span className="text-gray-700">{rejected}</span>
        </div>
      </div>
    </div>
  );
};

ReportSummary.propTypes = {
  reports: PropTypes.array.isRequired,
};

export default ReportSummary;
