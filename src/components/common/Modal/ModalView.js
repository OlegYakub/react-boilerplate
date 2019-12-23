import React from "react";
import Modal from 'react-modal';
import PropTypes from "prop-types";
import styles from './ModalStyles.scss';

Modal.setAppElement('#root');

const ModalView = ({title, isOpen, children, closeModal, customStyles}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        style={customStyles}
      >
        <div className={styles.header}>
          <h2>{title}</h2>
          <button onClick={closeModal} className={styles.closeBtn}>Close</button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </Modal>
    </>
  );
};

ModalView.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.object,
};

ModalView.defaultProps = {
  customStyles: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      maxWidth: 560,
      borderRadius: 0,
      border: 'none',
      padding: 0,
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 9999,
    },
  },
};

export default ModalView;
