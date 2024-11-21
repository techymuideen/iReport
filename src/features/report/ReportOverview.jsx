import Chart from './Chart';
import ReportListItem from './ReportListItem';
import ReportSummary from './ReportSummary';
import TodayActivity from './TodayActivity';

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

const Profile = () => {
  const resolved = redFlagData.filter(
    record => record.status === 'resolved',
  ).length;
  const unresolved = redFlagData.filter(
    record => record.status === 'investigation',
  ).length;
  const rejected = redFlagData.filter(
    record => record.status === 'rejected',
  ).length;

  // Data for the pie chart
  const chartData = [
    { name: 'Resolved', value: resolved },
    { name: 'Unresolved', value: unresolved },
    { name: 'Rejected', value: rejected },
  ];

  return (
    <div className='max-w-7xl mx-auto pl-4 pt-5 pr-4 md:pr-0 md:pt-0 space-y-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 content-stretch'>
        {/* Profile Summary */}
        <div className='space-y-6  flex flex-col '>
          <ReportSummary redFlagData={redFlagData} />
          <TodayActivity />
        </div>
        <Chart chartData={chartData} />
      </div>

      <div className='mt-8'>
        <ReportListItem redFlagData={redFlagData} />
      </div>
    </div>
  );
};

export default Profile;
