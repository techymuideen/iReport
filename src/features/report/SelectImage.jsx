import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const SelectImage = ({ images, setImages, setImageError }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    maxFiles: 4,
    onDrop: acceptedFiles => {
      const duplicates = acceptedFiles.filter(file =>
        images.some(image => image.name === file.name),
      );

      if (duplicates.length > 0) {
        setImageError('Duplicate files detected. Please upload unique files.');
        return;
      }

      if (acceptedFiles.length + images.length > 4) {
        setImageError('You can only upload up to 4 images.');
        return;
      }

      setImages([...images, ...acceptedFiles]);
      setImageError('');
    },
  });

  const removeImage = index => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className='mb-4'>
      <label className='block text-gray-700'>Add Images</label>
      <div
        {...getRootProps({
          className:
            'border-dashed flex items-center justify-center h-32 border-2 p-4 text-center cursor-pointer',
        })}>
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select (4 Max)</p>
      </div>
      {images.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2 sm:gap-4'>
          {images.map((file, index) => (
            <div key={index} className='relative'>
              <img
                src={URL.createObjectURL(file)}
                alt='uploaded'
                className='w-24 h-24 object-cover'
              />
              <button
                type='button'
                onClick={() => removeImage(index)}
                className='absolute top-0 right-0 text-2xl font-medium text-black p-1 rounded-full'>
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  setImages: PropTypes.func.isRequired,
  setImageError: PropTypes.func.isRequired,
};

export default SelectImage;
