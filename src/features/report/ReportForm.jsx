import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SelectVideo from './SelectVideo';
import SelectImage from './SelectImage';
import SelectLocation from './SelectLocation';
import Button from '../../ui/Button';

const ReportForm = () => {
  const [recordType, setRecordType] = useState('red-flag');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [location, setLocation] = useState({ lat: null, long: null });
  const [imageError, setImageError] = useState('');
  const [videoError, setVideoError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
    console.log('Images:', images);
    console.log('Videos:', videos);
    console.log('Geolocation:', location);
    console.log('Record Type:', recordType);
  };

  return (
    <div className='py-12 px-4 bg-white rounded-md'>
      <h1 className='text-3xl font-semibold text-center mb-6'>Create Report</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type='submit'>Submit Report</Button>
      </form>
    </div>
  );
};

export default ReportForm;
