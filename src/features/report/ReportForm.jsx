import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SelectVideo from './SelectVideo';
import SelectImage from './SelectImage';
import SelectLocation from './SelectLocation';
import Button from '../../ui/Button';
import MapBox from './MapBox';

const EditReportForm = ({ initialData, title }) => {
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

  const onSubmit = data => {
    console.log('Form Data:', data);
    console.log('Images:', images);
    console.log('Videos:', videos);
    console.log('Geolocation:', location);
    console.log('Record Type:', recordType);
  };

  return (
    <div className='py-12 px-4 bg-white rounded-md'>
      <h1 className='text-3xl font-semibold text-center mb-6'>{title}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Buttons for Record Type */}
        <div className='flex justify-center mb-6'>
          <button
            type='button'
            className={`py-2 px-6 ${
              recordType === 'red-flag'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => setRecordType('red-flag')}>
            Red-Flag
          </button>
          <button
            type='button'
            className={`py-2 px-6 ${
              recordType === 'intervention'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => setRecordType('intervention')}>
            Intervention
          </button>
        </div>

        {/* Form Fields */}
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700'>
            Title
          </label>
          <input
            id='title'
            type='text'
            {...register('title', { required: 'Title is required' })}
            className='w-full px-4 py-2 border rounded-md'
          />
          {errors.title && (
            <span className='text-red-500'>{errors.title.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            {...register('description', {
              required: 'Description is required',
            })}
            className='w-full px-4 py-2 resize-none h-40 border rounded-md'
          />
          {errors.description && (
            <span className='text-red-500'>{errors.description.message}</span>
          )}
        </div>

        {/* Media and Location Selectors */}
        <SelectImage
          images={images}
          setImages={setImages}
          setImageError={setImageError}
        />
        {imageError && <span className='text-red-500'>{imageError}</span>}

        <SelectVideo
          videos={videos}
          setVideos={setVideos}
          setVideoError={setVideoError}
        />
        {videoError && <span className='text-red-500'>{videoError}</span>}

        <SelectLocation location={location} setLocation={setLocation} />
        <div className='py-8'>
          {location.lat && location.long && (
            <MapBox location={location} setLocation={setLocation} />
          )}
        </div>

        {/* Submit Button */}
        <Button type='submit'>Submit Report</Button>
      </form>
    </div>
  );
};

// Define PropTypes
EditReportForm.propTypes = {
  title: PropTypes.string.isRequired,
  initialData: PropTypes.shape({
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

export default EditReportForm;
