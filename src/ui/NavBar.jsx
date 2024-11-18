import { CiSettings } from 'react-icons/ci';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { LuFolderEdit } from 'react-icons/lu';

import NavItem from './NavItem';

const NavBar = () => {
  return (
    <aside className='bg-sky-600 w-full md:w-64  md:min-h-full  py-12  flex-shrink-0'>
      <nav>
        <ul className='space-y-1'>
          <NavItem to='/' text='Overview'>
            <RxDashboard size={20} />
          </NavItem>
          <NavItem to='/create-report' text='Create Report'>
            <MdOutlineCreateNewFolder size={20} />
          </NavItem>
          <NavItem to='/manage-report' text='Manage Report'>
            <LuFolderEdit size={20} />
          </NavItem>
          <NavItem to='/settings' text='Settings'>
            <CiSettings size={20} />
          </NavItem>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
