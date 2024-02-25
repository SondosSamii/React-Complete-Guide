import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ModalOverlay = ({ error, onClick, action }) => {
  return (
    <div className={classes.overlay}>
      <Card className={classes.modal}>
        <header>
          <h2>{error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{error.message}</p>
        </div>
        <footer>
          <Button onClick={onClick}>{action}</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = ({ error, onClick, action }) => {
  return ReactDOM.createPortal(
    <ModalOverlay error={error} onClick={onClick} action={action} />,
    document.getElementById("modal-root")
  );
};

export default ErrorModal;
