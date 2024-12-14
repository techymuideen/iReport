import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ placeholder, className, type, ...props }, ref) => {
  return (
    <input
      id={placeholder}
      ref={ref} // Allow ref forwarding
      className={`${className} w-full rounded-md border-[1px] bg-none px-4 py-2 outline-none`}
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
