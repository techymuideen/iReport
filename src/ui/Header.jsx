import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

import { useUser } from '../features/authentication/useUser';
import { useLogout } from '../features/authentication/useLogout';

import Logo from './Logo';
import Modal from './Modal';
import ConfirmLogout from './ConfirmLogout';

const Header = () => {
  const { showNavMobile, setShowNavMobile } = useContext(AppContext);
  const { isAuthenticated, user } = useUser();
  const { logout, isLoading } = useLogout();

  const handleChange = () => {
    setShowNavMobile((prev) => !prev);
  };

  return (
    <header className="z-10 flex items-center justify-between bg-slate-700 px-3 py-3 shadow-md sm:px-6">
      <Logo />
      <nav className="flex items-center gap-4">
        {!isAuthenticated && (
          <button className="rounded-lg bg-blue-600 px-4 py-2 uppercase text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            <Link to="/login"> Log in</Link>
          </button>
        )}

        {isAuthenticated && (
          <Modal>
            <Modal.Open opens="logout">
              <button
                onClick={logout}
                className="rounded-lg bg-blue-600 px-4 py-2 uppercase text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Log out
              </button>
            </Modal.Open>
            <Modal.Window name="logout">
              <ConfirmLogout disabled={isLoading} onConfirm={logout} />
            </Modal.Window>
          </Modal>
        )}

        {isAuthenticated && (
          <Link to="/profile" className="flex items-center gap-2">
            <img
              className="h-12 w-12 rounded-full"
              src={user?.photo}
              alt="Profile picture"
            />
            <span className="hidden text-base font-thin uppercase text-white sm:inline">
              {user?.firstname}
            </span>
          </Link>
        )}

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
