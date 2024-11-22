import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const MAX_TOTAL_SIZE = 100 * 1024 * 1024; // 100 MB in bytes

const SelectVideo = ({ videos, setVideos, setVideoError }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['.mp4'],
    },
    maxFiles: 4,
    onDrop: acceptedFiles => {
      // Check for duplicate files
      const duplicates = acceptedFiles.filter(file =>
        videos.some(video => video.name === file.name),
      );

      if (duplicates.length > 0) {
        setVideoError('Duplicate files detected. Please upload unique files.');
        return;
      }

      // Check total number of files
      if (acceptedFiles.length + videos.length > 4) {
        setVideoError('You can only upload up to 4 videos.');
        return;
      }

      // Check total file size
      const totalSize =
        videos.reduce((acc, video) => acc + video.size, 0) +
        acceptedFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize > MAX_TOTAL_SIZE) {
        setVideoError('Total file size cannot exceed 100MB.');
        return;
      }

      // Add valid files
      setVideos([...videos, ...acceptedFiles]);
      setVideoError('');
    },
  });

  const removeVideo = index => {
    setVideos(prevVideos => prevVideos.filter((_, i) => i !== index));
  };

  return (
    <div className='mb-4'>
      <label className='block text-gray-700'>Add Videos</label>
      <div
        {...getRootProps({
          className:
            'border-dashed h-32 border-2 p-4 flex items-center justify-center text-center cursor-pointer',
        })}>
        <input {...getInputProps()} />
        <p>
          Drag & drop videos here, or click to select (4 Max, Total size 100MB)
        </p>
      </div>
      {videos.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2 sm:gap-4'>
          {videos.map((file, index) => (
            <div key={index} className='relative'>
              <video controls className='w-32 h-32 mt-2'>
                <source
                  src={
                    typeof file === 'string' ? file : URL.createObjectURL(file)
                  }
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
              <button
                type='button'
                onClick={() => removeVideo(index)}
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

SelectVideo.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object || PropTypes.string).isRequired,
  setVideos: PropTypes.func.isRequired,
  setVideoError: PropTypes.func.isRequired,
};

export default SelectVideo;
