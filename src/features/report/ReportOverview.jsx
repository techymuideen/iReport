import toast from 'react-hot-toast';
import { useReports } from './useReports';

import Chart from './Chart';
import ReportListItem from './ReportListItem';
import ReportSummary from './ReportSummary';
import TodayActivity from './TodayActivity';
import Spinner from '../../ui/Spinner';

const Profile = () => {
  const { reports, isLoading, error } = useReports();

  if (isLoading) return <Spinner />;

  if (error) toast.error(error.message);

  const shownReports = reports?.slice(0, 5);
  // Calculate resolved, unresolved, rejected counts
  const resolved = reports.filter(
    (record) => record.status === 'resolved',
  ).length;
  const unresolved = reports.filter(
    (record) =>
      record.status === 'investigating' || record.status === 'pending',
  ).length;
  const rejected = reports.filter(
    (record) => record.status === 'rejected',
  ).length;

  // Data for the pie chart
  const chartData = [
    { name: 'Resolved', value: resolved },
    { name: 'Unresolved', value: unresolved },
    { name: 'Rejected', value: rejected },
  ];

  // Get today's date
  const today = new Date().toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

  // Count reports created today
  const createdToday = reports.filter(
    (record) => record.createdAt.split('T')[0] === today, // Safely access createdAt
  ).length;

  const resolvedToday = reports.filter((record) => {
    return (
      record.status === 'resolved' && record.updatedAt.split('T')[0] === today // Safely access updatedAt
    );
  }).length;

  const rejectedToday = reports.filter((record) => {
    return (
      record.updatedAt.split('T')[0] === today && record.status === 'rejected'
    );
  }).length;

  return (
    <div className="mx-auto max-w-7xl space-y-8 pl-4 pr-4 pt-5 md:pt-0">
      <div className="grid grid-cols-1 content-stretch gap-8 lg:grid-cols-2">
        {/* Profile Summary */}
        <div className="flex flex-col space-y-6">
          <ReportSummary reports={reports} />
          <TodayActivity
            createdToday={createdToday}
            resolvedToday={resolvedToday}
            rejectedToday={rejectedToday}
          />
        </div>
        {reports.length > 0 && <Chart chartData={chartData} />}
      </div>

      <div className="mt-8">
        <ReportListItem reports={shownReports} />
      </div>
    </div>
  );
};

export default Profile;
