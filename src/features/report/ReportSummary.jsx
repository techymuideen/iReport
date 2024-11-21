import PropTypes from 'prop-types';

const ReportSummary = ({ redFlagData }) => {
  const resolved = redFlagData.filter(
    record => record.status === 'resolved',
  ).length;
  const unresolved = redFlagData.filter(
    record => record.status === 'investigation',
  ).length;
  const rejected = redFlagData.filter(
    record => record.status === 'rejected',
  ).length;

  return (
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
  );
};

ReportSummary.propTypes = {
  redFlagData: PropTypes.array.isRequired,
};

export default ReportSummary;
