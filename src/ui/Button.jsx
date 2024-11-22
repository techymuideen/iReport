import PropTypes from 'prop-types';

const Button = props => {
  let variation = 'bg-sky-600';
  if (props.variation === 'danger') variation = 'bg-red-600';
  if (props.variation === 'reject') variation = 'bg-[#FF8042]';
  if (props.variation === 'resolve') variation = 'bg-[#0088FE]';
  if (props.variation === 'investigate') variation = 'bg-[#FFBB28]';

  return (
    <button
      onClick={props.onClick}
      type={props.type ? props.type : 'button'}
      className={` hover:bg-opacity-80 transition-all rounded-sm  w-full py-2 text-white px-4 ${variation} ${props.className} `}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  variation: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
