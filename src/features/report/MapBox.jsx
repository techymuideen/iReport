import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';
import { FaLocationDot } from 'react-icons/fa6';
import GeoCoder from './GeoCoder';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = ({ location, setLocation }) => {
  const handleViewChange = (evt) => {
    setLocation(() => ({
      lat: evt.lngLat.lat,
      long: evt.lngLat.lng,
    }));
  };

  const mapRef = useRef();

  useEffect(() => {
    if (!location.long && !location.lat) {
      fetch('https://ipapi.co/json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });

          setLocation(() => ({
            lat: data.latitude,
            long: data.longitude,
          }));
        });
    }
  }, [location.lat, location.long, setLocation]);

  return (
    <ReactMapGL
      ref={mapRef}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        latitude: location.lat,
        longitude: location.long,
        zoom: 8,
      }}
      interactive={Boolean(setLocation)}
      style={{ height: 400, width: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      scrollZoom={false}
      onClick={handleViewChange}
    >
      <Marker
        draggable={Boolean(setLocation)}
        onDragEnd={handleViewChange}
        latitude={location.lat}
        longitude={location.long}
        anchor="top"
      >
        <div>
          <FaLocationDot size={20} fill="red" />
        </div>
      </Marker>
      {Boolean(setLocation) && <NavigationControl position="bottom-right" />}
      {Boolean(setLocation) && (
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) =>
            setLocation(() => ({
              lat: e.coords.latitude,
              long: e.coords.longitude,
            }))
          }
        />
      )}
      {Boolean(setLocation) && <GeoCoder setLocation={setLocation} />}
    </ReactMapGL>
  );
};

MapBox.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
  }).isRequired,
  setLocation: PropTypes.func,
};

export default MapBox;
