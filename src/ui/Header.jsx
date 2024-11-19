import { Link } from 'react-router-dom';

import Logo from './Logo';
import Profile from '../../public/img/user-6.jpg';

const Header = () => {
  return (
    <header className='flex items-center shadow-md justify-between z-10 bg-slate-700 py-3 px-3 sm:px-6'>
      <Logo />
      <nav className='flex items-center gap-4'>
        <button className='bg-blue-600 uppercase transition text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
          <Link to='/login'> Log in</Link>
        </button>

        {/* <button className='bg-blue-600 uppercase transition text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
          <Link to='/login'> Log out</Link>
        </button> */}
        <Link to='/profile' className='flex items-center gap-2'>
          <img
            className='w-12 h-12 rounded-full'
            src={Profile}
            alt='Profile picture'
          />
          <span className='hidden sm:inline text-white text-base uppercase font-thin'>
            Jessica
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
