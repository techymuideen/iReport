import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showNavMobile, setShowNavMobile] = useState(null);

  return (
    <AppContext.Provider value={{ showNavMobile, setShowNavMobile }}>
      {children}
    </AppContext.Provider>
  );
}

// Corrected prop types for AppProvider
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
