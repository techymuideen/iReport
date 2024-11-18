import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      className={`bg-sky-600 hover:bg-sky-500 transition-all rounded-sm  w-full py-2 text-white px-4 ${props.className}`}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
