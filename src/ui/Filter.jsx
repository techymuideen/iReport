import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);

    setSearchParams(searchParams);
  }

  return (
    <div className='border border-gray-100 bg-gray-50 shadow-sm rounded-sm p-1 flex gap-1'>
      {options.map(option => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={`rounded-sm font-medium text-sm px-3 py-[0.44rem] transition 
            ${
              option.value === currentFilter
                ? 'bg-gray-800 text-white cursor-not-allowed'
                : ''
            }`}>
          {option.label}
        </button>
      ))}
    </div>
  );
}

Filter.propTypes = {
  filterField: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Filter;
