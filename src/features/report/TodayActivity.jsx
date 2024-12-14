import PropTypes from 'prop-types';

const TodayActivity = ({ createdToday, resolvedToday, rejectedToday }) => {
  return (
    <div className="flex-1 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Today Activity</h2>
      <div className="space-y-3">
        <div className="flex flex-col justify-between">
          <div className="font-medium">
            {createdToday === 0 && resolvedToday === 0
              ? 'No activity today'
              : ''}
          </div>
          <div className="font-medium text-green-500">
            {createdToday > 0
              ? `${createdToday} reports has been created today.`
              : ''}
          </div>
          <div className="font-medium text-[#0088FE]">
            {resolvedToday > 0
              ? `${resolvedToday} reports has been resolved today`
              : ''}
          </div>
          <div className="font-medium text-[#FF8042]">
            {rejectedToday > 0
              ? `${rejectedToday} reports has been rejected today`
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

TodayActivity.propTypes = {
  createdToday: PropTypes.number.isRequired,
  resolvedToday: PropTypes.number.isRequired,
  rejectedToday: PropTypes.number.isRequired,
};

export default TodayActivity;
