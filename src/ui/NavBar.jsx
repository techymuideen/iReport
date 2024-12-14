import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { LuFolderEdit } from 'react-icons/lu';
import { IoPersonOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';

import NavItem from './NavItem';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import { useUser } from '../features/authentication/useUser';
import { useLogout } from '../features/authentication/useLogout';

import Modal from './Modal';
import ConfirmLogout from './ConfirmLogout';

const NavBar = () => {
  const { showNavMobile, setShowNavMobile } = useContext(AppContext);
  const { user, isAuthenticated } = useUser();
  const { logout, isLoading } = useLogout();

  const handleChange = () => {
    // Check if screen width is less than the 'md' breakpoint
    if (window.matchMedia('(max-width: 768px)').matches) {
      setShowNavMobile((prev) => !prev);
    }
  };

  return (
    <aside
      className={`bg-slate-700 ${
        showNavMobile ? 'block' : 'hidden md:inline'
      } w-full flex-shrink-0 py-4 sm:pt-12 md:min-h-full md:w-[fit-content]`}
    >
      <nav className="h-full">
        <ul
          onClick={handleChange}
          className="flex h-full flex-col justify-between space-y-1"
        >
          <div>
            <NavItem to="/" text="Overview">
              <RxDashboard size={20} />
            </NavItem>
            {!user?.isAdmin && (
              <NavItem to="/report/create" text="Create Report">
                <MdOutlineCreateNewFolder size={20} />
              </NavItem>
            )}
            <NavItem to="/manage-report" text="Manage Report">
              <LuFolderEdit size={20} />
            </NavItem>
            <NavItem to="/profile" text="Profile">
              <IoPersonOutline size={20} />
            </NavItem>
          </div>

          {isAuthenticated && (
            <Modal>
              <Modal.Open opens="logout">
                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-2 text-base font-normal text-white transition-all hover:bg-slate-500 hover:text-gray-200"
                >
                  <TbLogout size={20} /> Log out
                </button>
              </Modal.Open>
              <Modal.Window name="logout">
                <ConfirmLogout disabled={isLoading} onConfirm={logout} />
              </Modal.Window>
            </Modal>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
