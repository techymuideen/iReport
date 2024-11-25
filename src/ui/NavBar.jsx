import { CiSettings } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { LuFolderEdit } from "react-icons/lu";

import NavItem from "./NavItem";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const NavBar = () => {
  const { showNavMobile, setShowNavMobile } = useContext(AppContext);

  const handleChange = () => {
    // Check if screen width is less than the 'md' breakpoint
    if (window.matchMedia("(max-width: 768px)").matches) {
      setShowNavMobile((prev) => !prev);
    }
  };

  return (
    <aside
      className={`bg-slate-700 ${
        showNavMobile ? "block" : "hidden md:inline"
      } w-full flex-shrink-0 py-4 sm:py-12 md:min-h-full md:w-[fit-content]`}
    >
      <nav>
        <ul onClick={handleChange} className="space-y-1">
          <NavItem to="/" text="Overview">
            <RxDashboard size={20} />
          </NavItem>
          <NavItem to="/report/create" text="Create Report">
            <MdOutlineCreateNewFolder size={20} />
          </NavItem>
          <NavItem to="/manage-report" text="Manage Report">
            <LuFolderEdit size={20} />
          </NavItem>
          <NavItem to="/profile" text="Profile">
            <CiSettings size={20} />
          </NavItem>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
