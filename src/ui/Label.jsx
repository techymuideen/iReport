import PropTypes from 'prop-types';

const Label = props => {
  return (
    <label
      htmlFor={props.id}
      className={`${
        props.type === 'primary' ? 'text-black' : 'text-red-500'
      }  text-base`}>
      {props.children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'danger']),
  id: PropTypes.string,
};

export default Label;
