import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TableContext = createContext(undefined);

const Table = ({ children }) => {
  return (
    <TableContext.Provider value={1}>
      <div className='border border-gray-200 text-sm bg-white rounded-lg gap-8 overflow-hidden'>
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
    <div className='grid grid-cols-[minmax(100px,_1fr)_100px_100px]  gap-6 items-center px-6 py-4 bg-gray-50 mb-2 border-b border-gray-100 uppercase text-gray-600 font-semibold'>
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
      className='grid grid-cols-[minmax(100px,_1fr)_100px_100px]  gap-6 items-center px-6 py-4 mx-4 rounded-3xl uppercase text-gray-600 font-semibold hover:bg-gray-100'>
      {children}
    </Link>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number,
};

const Body = ({ data, render }) => {
  if (!data.length) {
    return (
      <p className='text-center font-medium text-gray-500 py-6'>
        No data found!
      </p>
    );
  }

  return <div className='space-y-2'>{data.map(render)}</div>;
};

Body.propTypes = {
  data: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
};

const Footer = ({ children }) => {
  return (
    children && (
      <div className='bg-gray-50 flex justify-center px-6 py-3'>{children}</div>
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
