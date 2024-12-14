import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const MAX_TOTAL_SIZE = 1 * 1024 * 1024; // 10 MB in bytes

const SelectImage = ({
  images,
  setImages,
  newImages,
  setNewImages,
  existingImages,
  setExistingImages,
  setImageError,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    maxFiles: 4,
    onDrop: (acceptedFiles) => {
      // Check for duplicate files
      const duplicates = acceptedFiles.filter((file) =>
        images.some((image) => image.name === file.name),
      );

      if (duplicates.length > 0) {
        setImageError('Duplicate files detected. Please upload unique files.');
        return;
      }

      console.log(newImages);
      console.log(existingImages);

      // Check total number of files
      if (
        newImages?.length + existingImages?.length + acceptedFiles?.length >
        4
      ) {
        setImageError('You can only upload up to 4 images.');
        return;
      }

      // Check total file size
      const totalSize =
        existingImages.reduce((acc, image) => acc + image.size, 0) +
        acceptedFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize > MAX_TOTAL_SIZE) {
        setImageError('Total file size cannot exceed 10MB.');
        return;
      }

      // Add valid files
      setImages([...images, ...acceptedFiles]);
      setNewImages([...newImages, ...acceptedFiles]);
      setImageError('');
    },
  });

  const removeImage = (index) => {
    const isExisting = typeof images[index] === 'string'; // Check if it's an existing image (URL)

    if (isExisting) {
      setExistingImages((prev) => prev.filter((_, i) => i !== index));
    } else {
      setNewImages((prev) =>
        prev.filter((_, i) => i !== index - existingImages.length),
      );
    }

    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Add Images</label>
      <div
        {...getRootProps({
          className:
            'border-dashed flex items-center justify-center h-32 border-2 p-4 text-center cursor-pointer',
        })}
      >
        <input {...getInputProps()} />
        <p>
          Drag & drop images here, or click to select (4 Max, Total size 10MB)
        </p>
      </div>
      {images.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 sm:gap-4">
          {images.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={
                  typeof file === 'string' ? file : URL.createObjectURL(file)
                }
                alt="uploaded"
                className="h-24 w-24 object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-0 top-0 rounded-full p-1 text-2xl font-medium text-black"
              >
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
  images: PropTypes.arrayOf(PropTypes.object || PropTypes.string).isRequired,
  newImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  existingImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  setExistingImages: PropTypes.func.isRequired,
  setImages: PropTypes.func.isRequired,
  setNewImages: PropTypes.func.isRequired,
  setImageError: PropTypes.func.isRequired,
};

export default SelectImage;
