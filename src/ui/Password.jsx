import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const PasswordInput = forwardRef(({ placeholder, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex w-full items-center">
      <input
        id={props.id}
        ref={ref}
        className="w-full rounded-md border-[1px] bg-none px-4 py-2 outline-none"
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <span
        className="absolute right-2 cursor-pointer"
        onClick={() => setShowPassword((prevState) => !prevState)}
      >
        {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
      </span>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default PasswordInput;
