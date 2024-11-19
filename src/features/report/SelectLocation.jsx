import PropTypes from 'prop-types';
import { BsFillGeoAltFill } from 'react-icons/bs';

const SelectLocation = ({ location, setLocation }) => {
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          zoom: 8,
          scrollZoom: false,
        });
      });
    }
  };

  return (
    <div className='mb-4'>
      <label className='block text-gray-700'>Geolocation</label>
      <button
        type='button'
        onClick={handleLocation}
        className='bg-sky-600 text-white py-2 px-4 rounded-md'>
        Add a Location <BsFillGeoAltFill className='inline ml-2' />
      </button>
      {location.lat && location.long && (
        <p className='mt-2'>
          Latitude: {location.lat}, Longitude: {location.long}
        </p>
      )}
    </div>
  );
};

SelectLocation.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number,
  }).isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default SelectLocation;
