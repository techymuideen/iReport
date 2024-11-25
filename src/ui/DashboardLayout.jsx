import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

const DashboardLayout = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col justify-stretch shadow-md md:flex-row">
      {/* Sidebar */}
      <NavBar />
      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
