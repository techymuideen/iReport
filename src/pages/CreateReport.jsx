import ReportForm from '../features/report/ReportForm';

const initialData = {
  title: '',
  description: '',
  recordType: 'red-flag',
  images: [],
  videos: [],
  location: { lat: null, long: null },
};

const CreateReport = () => {
  return <ReportForm initialData={initialData} title='Create Report' />;
};

export default CreateReport;
