import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import MiniSpinner from '../../ui/MiniSpinner';

const ButtonStatus = ({ variation, isPending, changeStatus, reportId }) => {
  return (
    <Button
      variation={variation}
      onClick={() => changeStatus({ reportId, value: 'investigating' })}
    >
      {isPending ? <MiniSpinner /> : variation}
    </Button>
  );
};

ButtonStatus.propTypes = {
  reportId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
  variation: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default ButtonStatus;
