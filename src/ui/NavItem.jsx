import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = (props) => {
  return (
    <li className={props.className}>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive
            ? 'flex items-center gap-3 bg-slate-500 px-4 py-2 text-base font-normal text-white transition-all hover:bg-slate-500 hover:text-gray-200'
            : `flex items-center gap-3 px-4 py-2 text-base font-normal text-white transition-all hover:bg-slate-500 hover:text-gray-200`
        }
      >
        <span>{props.children}</span>
        <span>{props.text}</span>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavItem;
