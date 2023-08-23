import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const ErrorModal = ({ error, onHideError }) => {
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
          <Button onClick={onHideError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
