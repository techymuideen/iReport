const TodayActivity = () => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 flex-1'>
      <h2 className='text-2xl font-semibold mb-4'>Today Activity</h2>
      <div className='space-y-3'>
        <div className='flex justify-between'>
          <span className='font-medium'>No activity today</span>
        </div>
      </div>
    </div>
  );
};

export default TodayActivity;
