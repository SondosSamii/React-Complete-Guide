import React, { useState } from "react";
import globalClasses from "../../Global.module.css";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = ({ onAddUser, onError }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      onError("Empty Username or Age!", "Please enter a valid name and age (non-empty values).");
    } else if (+enteredAge <= 0) {
      onError("Invalid Age!", "Please enter a valid age (Greater than 0).");
    } else {
      onAddUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <div className={classes.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className={globalClasses.bordered}
            value={enteredUsername}
            onChange={(event) => setEnteredUsername(event.target.value)}
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            className={globalClasses.bordered}
            value={enteredAge}
            onChange={(event) => setEnteredAge(event.target.value)}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
