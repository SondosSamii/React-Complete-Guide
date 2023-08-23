import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [error, setError] = useState("");
  const [usersList, setUsersList] = useState([]);

  const showErrorModal = (error) => {
    setError(error);
  };

  const hideErrorModal = () => {
    setError("");
  };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), username: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} onError={showErrorModal} />
      {error && (
        <ErrorModal error={error} onHideError={hideErrorModal} action="Okay" />
      )}
      {usersList.length > 0 ? (
        <UsersList users={usersList} />
      ) : (
        <h1 style={{ textAlign: "center", color: "#fff" }}>No Users Added</h1>
      )}
    </div>
  );
}

export default App;
