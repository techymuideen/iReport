import PropTypes from 'prop-types';

function Select({ options, value, onChange, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded border border-gray-200 px-6 py-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
