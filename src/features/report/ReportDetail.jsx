import { useParams, useNavigate, Link } from 'react-router-dom';
import MapBox from '../report/MapBox';

const mockReports = [
  {
    id: '1',
    title: 'Flooding in the Park',
    description: 'Heavy flooding occurred due to blocked drainage.',
    recordType: 'red-flag',
    images: ['image1.jpg', 'image2.jpg'],
    videos: ['video1.mp4'],
    location: { lat: 12.9716, long: 77.5946 },
  },
  {
    id: '2',
    title: 'Broken Streetlights',
    description: 'Streetlights have been broken for over a week.',
    recordType: 'intervention',
    images: ['image3.jpg'],
    videos: [],
    location: { lat: 13.0827, long: 80.2707 },
  },
];

const ReportDetail = () => {
  const { reportId } = useParams(); // Simulated route params
  const navigate = useNavigate();
  const report = mockReports.find(r => r.id === reportId);

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this report?',
    );
    if (!confirmed) return;

    alert('Simulating deletion...');
    navigate('/reports');
  };

  if (!report) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Report not found.
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow rounded-lg p-6'>
        <h1 className='text-3xl font-semibold mb-4'>{report.title}</h1>

        <p className='text-gray-500 mb-2'>
          <strong>Description:</strong> {report.description}
        </p>

        <p className='text-gray-500 mb-2'>
          <strong>Record Type:</strong>{' '}
          <span
            className={`px-2 py-1 rounded ${
              report.recordType === 'red-flag'
                ? 'bg-red-100 text-red-700'
                : 'bg-green-100 text-green-700'
            }`}>
            {report.recordType === 'red-flag' ? 'Red-Flag' : 'Intervention'}
          </span>
        </p>

        <div className='mb-4'>
          <strong>Images:</strong>
          <div className='grid grid-cols-3 gap-4 mt-2'>
            {report.images.length > 0 ? (
              report.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Report Image ${index + 1}`}
                  className='w-full h-32 object-cover rounded'
                />
              ))
            ) : (
              <p>No images available.</p>
            )}
          </div>
        </div>

        <div className='mb-4'>
          <strong>Videos:</strong>
          <div className='mt-2'>
            {report.videos.length > 0 ? (
              report.videos.map((video, index) => (
                <video key={index} controls className='w-full h-40 rounded'>
                  <source src={video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        </div>

        <div className='mb-4'>
          <strong>Location:</strong>
          {report.location.lat && report.location.long ? (
            <div>
              <p>
                Latitude: {report.location.lat}, Longitude:{' '}
                {report.location.long}
              </p>
              <MapBox
                location={{
                  lat: report.location.lat,
                  long: report.location.long,
                }}
              />
            </div>
          ) : (
            <p>No location available.</p>
          )}
        </div>

        <div className='flex justify-end space-x-4 mt-4'>
          <Link to={`/report/edit/${reportId}`}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            Edit
          </Link>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
