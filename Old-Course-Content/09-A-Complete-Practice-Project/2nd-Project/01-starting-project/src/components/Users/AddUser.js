import React, { useRef } from "react";
import globalClasses from "../../Global.module.css";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = ({ onAddUser, onError }) => {
  const nameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      onError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (+enteredAge <= 0) {
      onError({
        title: "Invalid Age!",
        message: "Please enter a valid age (Greater than 0).",
      });
    } else {
      onAddUser(enteredUsername, enteredAge);
      nameRef.current.value = "";
      ageRef.current.value = "";
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
            ref={nameRef}
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            className={globalClasses.bordered}
            ref={ageRef}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
