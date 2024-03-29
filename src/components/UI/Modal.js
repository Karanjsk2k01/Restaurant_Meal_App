import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalItem = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const OverlayElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, OverlayElement)}
      {ReactDOM.createPortal(<ModalItem>{props.children}</ModalItem>, OverlayElement)}
    </Fragment>
  );
};

export default Modal;
