import { useReport } from '../report/useReport';
import { useEffect, useState } from 'react';
import Spinner from '../../ui/Spinner';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import SelectVideo from './SelectVideo';
import SelectImage from './SelectImage';
import SelectLocation from './SelectLocation';
import Button from '../../ui/Button';
import MapBox from './MapBox';
import { useUpdateReport } from '../../features/report/useUpdateReport';
import MiniSpinner from '../../ui/MiniSpinner';

const EditReport = () => {
  const { report, isLoading, error } = useReport();

  if (error) toast.error(error.message);
  const { updateReport, isPending } = useUpdateReport();
  const [recordType, setRecordType] = useState(report?.type);
  const [images, setImages] = useState(report?.images || []);
  const [existingImages, setExistingImages] = useState(report?.images || []);
  const [newImages, setNewImages] = useState([]);
  const [videos, setVideos] = useState(report?.videos || []);
  const [existingVideos, setExistingVideos] = useState(report?.videos || []);
  const [newVideos, setNewVideos] = useState([]);
  const [location, setLocation] = useState(
    report?.location || { lat: null, long: null },
  );
  const [imageError, setImageError] = useState('');
  const [videoError, setVideoError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: report?.title || '',
      description: report?.description || '',
    },
  });

  useEffect(() => {
    setValue('title', report?.title);
    setValue('description', report?.description);
    setRecordType(report?.type);
    setImages(report?.images || []);
    setVideos(report?.videos || []);
    setExistingImages(report?.images || []);
    setExistingVideos(report?.videos || []);
    if (report?.location) {
      try {
        const parsedLocation = JSON.parse(report?.location);
        setLocation(parsedLocation); // Set the location if valid
      } catch (error) {
        console.log(error);
        setLocation({ lat: null, long: null });
      }
    }
  }, [report, report?.id, setValue]);

  console.log(location);

  const onSubmit = (formData) => {
    const payload = new FormData();

    // Append form fields
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    payload.append('type', recordType);

    if (location.lat && location.long) {
      payload.append('location', JSON.stringify(location));
    }

    payload.append('existingImages', JSON.stringify(existingImages));

    newImages.forEach((image) => {
      payload.append('images', image); // Appends each file as binary
    });

    payload.append('existingVideos', JSON.stringify(existingVideos));

    if (videos) {
      newVideos.forEach((video) => {
        payload.append('videos', video); // Appends each file as binary
      });
    }

    console.log(location);

    updateReport({ payload });
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="rounded-md bg-white px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-semibold">Edit Report</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Buttons for Record Type */}
        <div className="mb-6 flex justify-center">
          <button
            type="button"
            className={`px-6 py-2 ${
              recordType === 'red-flag'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => setRecordType('red-flag')}
          >
            Red-Flag
          </button>
          <button
            type="button"
            className={`px-6 py-2 ${
              recordType === 'intervention'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => setRecordType('intervention')}
          >
            Intervention
          </button>
        </div>
        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="w-full rounded-md border px-4 py-2"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register('description', {
              required: 'Description is required',
            })}
            className="h-40 w-full resize-none rounded-md border px-4 py-2"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        {/* Media and Location Selectors */}
        <SelectImage
          images={images}
          setImages={setImages}
          setImageError={setImageError}
          newImages={newImages}
          setNewImages={setNewImages}
          existingImages={existingImages}
          setExistingImages={setExistingImages}
        />
        {imageError && <span className="text-red-500">{imageError}</span>}
        <SelectVideo
          videos={videos}
          setVideos={setVideos}
          newVideos={newVideos}
          setNewVideos={setNewVideos}
          setVideoError={setVideoError}
        />
        {videoError && <span className="text-red-500">{videoError}</span>}
        <SelectLocation location={location} setLocation={setLocation} />
        <div className="py-8">
          {location.lat && location.long && (
            <MapBox location={location} setLocation={setLocation} />
          )}
        </div>
        {/* Submit Button */}
        <Button type="submit">
          {isLoading || isPending ? <MiniSpinner /> : 'Edit Report'}
        </Button>
      </form>
    </div>
  );
};

export default EditReport;
