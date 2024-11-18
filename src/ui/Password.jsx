import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const PasswordInput = forwardRef(({ placeholder, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex items-center w-full relative'>
      <input
        ref={ref}
        className='py-2 border-[1px] bg-none w-full outline-none px-4 rounded-md'
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <span
        className='absolute right-2 cursor-pointer'
        onClick={() => setShowPassword(prevState => !prevState)}>
        {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
      </span>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default PasswordInput;
