import ReportForm from './ReportForm';

const initialData = {
  title: 'Sample Report Title',
  description: 'Sample description text for the report.',
  recordType: 'intervention',
  images: ['image1.jpg', 'image2.jpg'],
  videos: ['video1.mp4'],
  location: { lat: 40.7128, long: -74.006 },
};

const EditReport = () => {
  return <ReportForm initialData={initialData} title='Edit Report' />;
};

export default EditReport;
