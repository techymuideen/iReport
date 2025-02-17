import PropTypes from 'prop-types';
import Button from './Button';
import MiniSpinner from './MiniSpinner';

function ConfirmLogout({ onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex max-w-96 flex-col gap-3">
      <h2 className="text-2xl font-bold">Log out</h2>
      <p className="mb-3 text-gray-500">Are you sure you want to Logout</p>

      <div className="flex justify-start gap-3">
        <Button disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          {disabled ? <MiniSpinner /> : 'Log out'}
        </Button>
      </div>
    </div>
  );
}

ConfirmLogout.propTypes = {
  resourceName: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

export default ConfirmLogout;
