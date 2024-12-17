import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SelectVideo from './SelectVideo';
import SelectImage from './SelectImage';
import SelectLocation from './SelectLocation';
import Button from '../../ui/Button';
import MapBox from './MapBox';
import { useCreateReport } from './useCreateReport';
import MiniSpinner from '../../ui/MiniSpinner';

const ReportForm = ({ title }) => {
  const { createReport, isLoading } = useCreateReport();
  const [recordType, setRecordType] = useState('red-flag');
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [existingVideos, setExistingVideos] = useState([]);
  const [newVideos, setNewVideos] = useState([]);
  const [location, setLocation] = useState({ lat: null, long: null });
  const [imageError, setImageError] = useState('');
  const [videoError, setVideoError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    const payload = new FormData();

    // Append form fields
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    payload.append('type', recordType);

    if (location.lat !== null && location.long !== null) {
      console.log(location);
      payload.append('location', JSON.stringify(location));
    }

    if (images) {
      images.forEach((image) => {
        payload.append('images', image); // Appends each file as binary
      });
    }

    if (videos) {
      videos.forEach((video) => {
        payload.append('videos', video); // Appends each file as binary
      });
    }

    createReport(
      { payload },
      {
        onSuccess: () => {
          setExistingImages([]);
          setExistingVideos([]);
          setNewImages([]);
          setNewVideos([]);
          setImages([]);
          setVideos([]);
          setLocation({ lat: null, long: null });
          reset();
        },
      },
    );
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
          existingVideos={existingVideos}
          setNewVideos={setNewVideos}
          setVideoError={setVideoError}
          setExistingVideos={setExistingVideos}
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
          {isLoading ? <MiniSpinner /> : 'Submit Report'}
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
