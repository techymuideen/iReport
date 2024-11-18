import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

const DashboardLayout = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-6xl mx-auto justify-stretch shadow-md'>
      {/* Sidebar */}
      <NavBar />
      {/* Main Content */}
      <div className='flex-1 '>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
