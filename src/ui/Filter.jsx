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
    <div className="flex gap-1 rounded-sm border border-gray-100 bg-gray-50 p-1 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={`rounded-sm px-3 py-[0.44rem] text-sm font-medium transition ${
            option.value === currentFilter
              ? 'cursor-not-allowed bg-gray-800 text-white'
              : ''
          }`}
        >
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
