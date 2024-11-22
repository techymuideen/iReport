import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { AppProvider } from '../context/AppContext';

const AppLayout = () => {
  return (
    <AppProvider>
      <div className='bg-slate-100'>
        <Header />
        <main className='md:py-10'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default AppLayout;
