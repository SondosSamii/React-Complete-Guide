import React from "react";
import globalClasses from "../../Global.module.css";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = ({ users }) => {
  return (
    <Card>
      <ul className={classes.list}>
        {users.map((user, index) => {
          return (
            <li
              key={index}
              className={`${globalClasses.bordered} ${classes.user}`}
            >
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
