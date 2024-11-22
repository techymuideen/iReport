import PropTypes from 'prop-types';
import Button from './Button';

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className='max-w-96 flex flex-col gap-3'>
      <h2 className='text-2xl font-bold'>Delete {resourceName}</h2>
      <p className='text-gray-500 mb-3'>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className='flex justify-start gap-3'>
        <Button disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation='danger' disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmDelete;
