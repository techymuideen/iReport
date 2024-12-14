import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TableContext = createContext(undefined);

const Table = ({ children }) => {
  return (
    <TableContext.Provider value={1}>
      <div className="gap-8 overflow-hidden rounded-lg border border-gray-200 bg-white text-sm">
        {children}
      </div>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = ({ children }) => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('Header must be used within a Table');
  }

  return (
    <div className="ml-2 grid grid-cols-3 items-center gap-6 border-b border-gray-100 bg-gray-50 px-6 py-4 font-semibold uppercase text-gray-600 [&:not(:first-child)]:text-center">
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

const Row = ({ children, id }) => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('Row must be used within a Table');
  }

  return (
    <Link
      to={`/report/${id}`}
      className="ml-2 grid grid-cols-3 items-center gap-6 rounded-3xl px-6 py-2 font-medium uppercase text-gray-600 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.any,
};

const Body = ({ data, render }) => {
  if (!data.length) {
    return (
      <p className="py-8 text-center font-medium text-gray-500">
        No data found!
      </p>
    );
  }

  return <div className="space-y-2 py-4">{data.map(render)}</div>;
};

Body.propTypes = {
  data: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
};

const Footer = ({ children }) => {
  return (
    children && (
      <div className="flex justify-center bg-gray-50 px-6 py-3">{children}</div>
    )
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
