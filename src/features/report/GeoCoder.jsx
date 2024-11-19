import PropTypes from 'prop-types';

import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const GeoCoder = ({ setLocation }) => {
  const ctrl = new MapBoxGeocoder({
    accessToken:
      'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A',
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on('result', e => {
    const coords = e.result.geometry.coordinates;

    setLocation(prevLocation => ({
      ...prevLocation,
      lat: coords[1],
      long: coords[0],
    }));
  });
  return null;
};

GeoCoder.propTypes = {
  setLocation: PropTypes.func.isRequired,
};

export default GeoCoder;
