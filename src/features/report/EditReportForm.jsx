import ReportForm from './ReportForm';

const initialData = {
  title: 'Sample Report Title',
  description: 'Sample description text for the report.',
  recordType: 'intervention',
  images: [
    'https://media.istockphoto.com/id/1497485073/photo/house-exterior-flood-disaster.webp?a=1&b=1&s=612x612&w=0&k=20&c=nDbs3_TUZAsy_lyM5c8-M_ciNdnq9G0NSh7PenUZSkQ=',
    'https://images.unsplash.com/photo-1580974511812-4b7196fa5098?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2R8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1600336153113-d66c79de3e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvb2R8ZW58MHx8MHx8fDA%3D',
  ],
  videos: ['video1.mp4'],
  location: { lat: 40.7128, long: -74.006 },
};

const EditReport = () => {
  return <ReportForm initialData={initialData} title='Edit Report' />;
};

export default EditReport;
