import { useState } from "react";
import classes from "./InvestmentCalculator.module.css";

const initialUserInput = {
  "current-savings": 1000,
  "yearly-contribution": 100,
  "expected-return": 5,
  duration: 10,
};

const InvestmentCalculator = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    onCalculate(initialUserInput);
  };

  const inputChangeHandler = (input, event) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: event.target.value,
      };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) => {
              inputChangeHandler("current-savings", event);
            }}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event);
            }}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) => {
              inputChangeHandler("expected-return", event);
            }}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => {
              inputChangeHandler("duration", event);
            }}
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentCalculator;
