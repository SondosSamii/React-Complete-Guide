import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const ErrorModal = ({ error, onHideError }) => {
  return (
    <div className={classes.overlay}>
      <Card>
        <h1>Invalid Input</h1>
        <div className={classes.errorContainer}>
          <p>{error}</p>
          <p style={{ textAlign: "end" }}>
            <Button onClick={onHideError}>Okay</Button>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
