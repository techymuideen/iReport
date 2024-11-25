import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

import Logo from './Logo';
import Profile from '../../public/img/user-6.jpg';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

const Header = () => {
  const { showNavMobile, setShowNavMobile } = useContext(AppContext);

  const handleChange = () => {
    setShowNavMobile((prev) => !prev);
  };

  return (
    <header className="z-10 flex items-center justify-between bg-slate-700 px-3 py-3 shadow-md sm:px-6">
      <Logo />
      <nav className="flex items-center gap-4">
        {/* <button className='bg-blue-600 uppercase transition text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
          <Link to='/login'> Log in</Link>
        </button> */}

        {/* <button className='bg-blue-600 uppercase transition text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
          <Link to='/login'> Log out</Link>
        </button> */}
        <Link to="/settings" className="flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full"
            src={Profile}
            alt="Profile picture"
          />
          <span className="hidden text-base font-thin uppercase text-white sm:inline">
            Jessica
          </span>
        </Link>
        <div onClick={handleChange} className="inline md:hidden">
          {showNavMobile ? (
            <IoClose color="#fff" size={30} />
          ) : (
            <GiHamburgerMenu size={30} color="#fff" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
