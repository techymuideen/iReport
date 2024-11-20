import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Profile = () => {
  // Sample data for red-flag records
  const redFlagData = [
    { id: 1, status: 'resolved', description: 'Issue 1 resolved' },
    { id: 2, status: 'resolved', description: 'Issue 2 in draft' },
    {
      id: 3,
      status: 'investigation',
      description: 'Issue 3 under investigation',
    },
    { id: 4, status: 'rejected', description: 'Issue 4 rejected' },
    { id: 5, status: 'resolved', description: 'Issue 5 resolved' },
    { id: 6, status: 'rejected', description: 'Issue 6 rejected' },
  ];

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

  // Colors for the pie chart segments
  const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

  return (
    <div className='max-w-7xl mx-auto pl-4 pt-5 pr-4 md:pr-0 md:pt-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 content-stretch'>
        {/* Profile Summary */}
        <div className='space-y-6  flex flex-col '>
          <div className='bg-white shadow-md rounded-lg p-6 '>
            <h2 className='text-2xl font-semibold mb-4'>User Profile</h2>
            <div className='space-y-3'>
              <div className='flex justify-between'>
                <span className='font-medium'>Resolved Reports:</span>
                <span className='text-gray-700'>{resolved}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Unresolved Reports:</span>
                <span className='text-gray-700'>{unresolved}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Rejected Reports:</span>
                <span className='text-gray-700'>{rejected}</span>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6 flex-1'>
            <h2 className='text-2xl font-semibold mb-4'>Today Activity</h2>
            <div className='space-y-3'>
              <div className='flex justify-between'>
                <span className='font-medium'>No activity today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center md:items-start'>
          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Report Stats
          </h2>
          <div className='w-full h-[20rem]'>
            <ResponsiveContainer width='100%'>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  innerRadius={80}
                  outerRadius={120}
                  fill='#8884d8'
                  paddingAngle={2}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      stroke={COLORS[index % COLORS.length]}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  align='right'
                  verticalAlign='bottom'
                  width='30%'
                  layout='vertical'
                  iconSize={15}
                  iconType='circle'
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Red-Flag Records List */}
      <div className='bg-white shadow-md rounded-lg p-6 mt-8'>
        <h2 className='text-2xl font-semibold mb-4'>Report Records</h2>
        <ul className='space-y-2'>
          {redFlagData.map(record => (
            <Link
              to={`/report/${record.id}`}
              key={record.id}
              className='block group'>
              <li className='flex justify-between items-center px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-100'>
                <span className='text-gray-700'>{record.description}</span>
                <span
                  className={`px-3 py-1 rounded-full ${
                    record.status === 'resolved'
                      ? 'bg-[#0088FE] text-white'
                      : record.status === 'draft' ||
                        record.status === 'investigation'
                      ? 'bg-[#FFBB28] text-white'
                      : 'bg-[#FF8042] text-white'
                  }`}>
                  {record.status.charAt(0).toUpperCase() +
                    record.status.slice(1)}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
