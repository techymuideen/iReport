import PropTypes from 'prop-types';
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';

// Modal context to manage state
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

// Component to open the modal
function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opens) });
}

Open.propTypes = {
  children: PropTypes.element.isRequired,
  opens: PropTypes.string.isRequired,
};

// Modal window component
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
      <div
        ref={ref}
        className="relative mx-4 w-[80%] rounded-lg bg-white p-4 shadow-lg sm:mx-0 sm:w-full sm:max-w-md sm:p-8"
      >
        <button
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          onClick={close}
        >
          <HiXMark className="h-6 w-6" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Window.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

// Add subcomponents to Modal
Modal.Open = Open;
Modal.Window = Window;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
