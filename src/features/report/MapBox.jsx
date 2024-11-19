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
  const handleViewChange = evt => {
    setLocation(prevLocation => ({
      ...prevLocation,
      lat: evt.lngLat.lat,
      long: evt.lngLat.lng,
    }));
  };

  const mapRef = useRef();

  useEffect(() => {
    if (!location.long && !location.lat) {
      fetch('https://ipapi.co/json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });

          setLocation(prevLocation => ({
            ...prevLocation,
            lat: data.latitude,
            long: data.longitude,
          }));
        });
    }
  }, [location.lat, location.long, setLocation]);

  return (
    <ReactMapGL
      ref={mapRef}
      mapboxAccessToken='pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A'
      initialViewState={{
        latitude: location.lat,
        longitude: location.long,
        zoom: location.zoom,
      }}
      style={{ height: 400, width: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      scrollZoom={location.scrollZoom}
      onClick={handleViewChange}>
      <Marker
        draggable
        onDragEnd={handleViewChange}
        latitude={location.lat}
        longitude={location.long}
        anchor='top'>
        <div>
          <FaLocationDot size={20} fill='red' />
        </div>
      </Marker>
      <NavigationControl position='bottom-right' />
      <GeolocateControl
        position='top-left'
        trackUserLocation
        onGeolocate={e =>
          setLocation(prevLocation => ({
            ...prevLocation,
            lat: e.coords.latitude,
            long: e.coords.longitude,
          }))
        }
      />
      <GeoCoder setLocation={setLocation} />
    </ReactMapGL>
  );
};

MapBox.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    scrollZoom: PropTypes.bool,
  }).isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default MapBox;
