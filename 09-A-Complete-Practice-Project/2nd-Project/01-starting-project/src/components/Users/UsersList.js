import React from "react";
import globalClasses from "../../Global.module.css";
import Card from "../UI/Card";

const UsersList = ({ users }) => {
  return (
    <Card>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <p className={globalClasses.bordered}>
              {user.username} ({user.age} years old)
            </p>
          </div>
        );
      })}
    </Card>
  );
};

export default UsersList;
