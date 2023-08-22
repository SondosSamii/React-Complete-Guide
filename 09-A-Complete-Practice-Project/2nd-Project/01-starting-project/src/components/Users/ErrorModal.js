import globalClasses from "../../Global.module.css";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";

const ErrorModal = ({ error, onHideError }) => {
  return (
    <div className={classes.overlay}>
      <Card>
        <h1>Invalid Input</h1>
        <div className={classes.errorContainer}>
          <p>{error}</p>
          <p style={{ textAlign: "end" }}>
            <button
              type="button"
              className={globalClasses.mainBtn}
              onClick={onHideError}
            >
              Okay
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
