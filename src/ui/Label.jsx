import PropTypes from 'prop-types';

const Label = props => {
  return <label className='text-red-500 text-sm'>{props.children}</label>;
};

Label.propTypes = {
  children: PropTypes.string,
};

export default Label;
