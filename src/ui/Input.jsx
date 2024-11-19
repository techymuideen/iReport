import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ placeholder, className, type, ...props }, ref) => {
  return (
    <input
      id={placeholder}
      ref={ref} // Allow ref forwarding
      className={`${className} py-2 w-full border-[1px] bg-none outline-none px-4 rounded-md`}
      placeholder={placeholder}
      type={type}
      {...props} // Spread additional props like `value`, `onChange`, etc.
    />
  );
});

// Set a displayName for better debugging
Input.displayName = 'Input';

// Define PropTypes
Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
