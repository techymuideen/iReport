import { useParams, useNavigate } from 'react-router-dom';
import MapBox from '../report/MapBox';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

const mockReports = [
  {
    id: '1',
    title: 'Flooding in the Park',
    description: 'Heavy flooding occurred due to blocked drainage.',
    recordType: 'red-flag',
    images: [
      'https://media.istockphoto.com/id/1497485073/photo/house-exterior-flood-disaster.webp?a=1&b=1&s=612x612&w=0&k=20&c=nDbs3_TUZAsy_lyM5c8-M_ciNdnq9G0NSh7PenUZSkQ=',
      'https://images.unsplash.com/photo-1580974511812-4b7196fa5098?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2R8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1600336153113-d66c79de3e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvb2R8ZW58MHx8MHx8fDA%3D',
    ],
    videos: [
      'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BXJT8TRDeiymbx54w/videoblocks-flood-water-flows-across-the-road-in-a-powerful-stream-natural-disaster-flooded-streets-dirty-water-strong-currents_rwmxy89hdd__4e3e045b5e2944185b3498c4b9c7e14a__P360.mp4',
    ],
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
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2'>
            {report.images.length > 0 ? (
              report.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Report Image ${index + 1}`}
                  className='w-full h-40 object-cover rounded'
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
                <video key={index} controls className='w-full h-auto rounded'>
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
          <Modal>
            {/* <Button variation='resolve'>Resolve</Button>
            <Button variation='investigate'>Investigate</Button>
            <Button variation='reject'>Reject</Button> */}
            <Button onClick={() => navigate(`/report/edit/${reportId}`)}>
              Edit
            </Button>
            <Modal.Open opens='delete'>
              <Button variation='danger' onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Open>
            <Modal.Window name='delete'>
              <ConfirmDelete
                resourceName='report'
                disabled={false}
                onConfirm={() => alert('deleted Successfully')}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
