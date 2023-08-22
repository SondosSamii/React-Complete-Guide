import React, { useState } from "react";
import globalClasses from "../../Global.module.css";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = ({ onAddUser, onError }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.length === 0) {
      onError("Please enter a valid name and age (non-empty values).");
    } else if (age <= 0) {
      onError("Please enter a valid age (Greater than 0).");
    } else {
      onAddUser(username, age);
      setUsername("");
      setAge("");
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            className={globalClasses.bordered}
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
