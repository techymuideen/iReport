import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SelectVideo from './SelectVideo';
import SelectImage from './SelectImage';
import SelectLocation from './SelectLocation';
import Button from '../../ui/Button';
import MapBox from './MapBox';
import { useCreateReport } from './useCreateReport';
import { useUpdateReport } from '../../features/report/useUpdateReport';
import MiniSpinner from '../../ui/MiniSpinner';

const ReportForm = ({ initialData, title }) => {
  const { createReport, isLoading } = useCreateReport();
  const { updateReport, isPending } = useUpdateReport();
  const [recordType, setRecordType] = useState(
    initialData.recordType || 'red-flag',
  );
  const [images, setImages] = useState(initialData.images || []);
  const [videos, setVideos] = useState(initialData.videos || []);
  const [location, setLocation] = useState(
    initialData.location || { lat: null, long: null },
  );
  const [imageError, setImageError] = useState('');
  const [videoError, setVideoError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: initialData.title || '',
      description: initialData.description || '',
    },
  });

  useEffect(() => {
    setValue('title', initialData.title);
    setValue('description', initialData.description);
  }, [initialData, setValue]);

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

    if (images) {
      payload.append('images', images);
    }

    if (videos) {
      payload.append('videos', videos);
    }

    if (initialData.id) {
      updateReport(initialData.id, payload);
    }
    createReport(payload, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="rounded-md bg-white px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-semibold">{title}</h1>

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
        />
        {imageError && <span className="text-red-500">{imageError}</span>}
        <SelectVideo
          videos={videos}
          setVideos={setVideos}
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
          {isLoading || isPending ? <MiniSpinner /> : 'Submit Report'}
        </Button>
      </form>
    </div>
  );
};

// Define PropTypes
ReportForm.propTypes = {
  title: PropTypes.string.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    recordType: PropTypes.oneOf(['red-flag', 'intervention']),
    images: PropTypes.arrayOf(PropTypes.string),
    videos: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.shape({
      lat: PropTypes.number,
      long: PropTypes.number,
    }),
  }),
};

export default ReportForm;
