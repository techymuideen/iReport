export const handleFileUpload = (
  files,
  type,
  setImageError,
  setVideoError,
  images,
  videos,
  setImages,
  setVideos,
) => {
  const existingFiles = type === 'image' ? images : videos;

  // Check if adding the new files would exceed the limit
  if (existingFiles.length + files.length > 4) {
    if (type === 'image') {
      setImageError('You can only upload a maximum of 4 images.');
    } else {
      setVideoError('You can only upload a maximum of 4 videos.');
    }
    return;
  }

  const filteredFiles = files.filter(file => {
    // Check if file type matches the required format (image or video)
    const isValidType =
      (type === 'image' && file.type.startsWith('image/')) ||
      (type === 'video' && file.type.startsWith('video/'));

    if (!isValidType) {
      return false; // Reject invalid file types
    }

    // Check for duplicates based on file name and size
    return !existingFiles.some(
      existingFile =>
        existingFile.name === file.name && existingFile.size === file.size,
    );
  });

  if (filteredFiles.length > 0) {
    // Add valid files to the appropriate state (images or videos)
    if (type === 'image') {
      setImages(prevImages => [...prevImages, ...filteredFiles]);
      setImageError('');
    } else {
      setVideos(prevVideos => [...prevVideos, ...filteredFiles]);
      setVideoError('');
    }
  } else {
    // Handle the case where all files are either invalid or duplicates
    if (type === 'image') {
      setImageError('Invalid file format or duplicate file.');
    } else {
      setVideoError('Invalid file format or duplicate file.');
    }
  }
};
