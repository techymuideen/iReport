import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className='bg-slate-100'>
      <Header />
      <main className='py-10'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
