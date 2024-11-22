import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = props => {
  return (
    <li>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive
            ? 'flex gap-3 items-center text-xl px-4 py-2 font-normal uppercase  text-white hover:text-gray-200 hover:bg-slate-500 transition-all bg-slate-500'
            : 'flex gap-3 items-center text-xl px-4 py-2 font-normal uppercase text-white  hover:text-gray-200 hover:bg-slate-500 transition-all '
        }>
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
};

export default NavItem;
