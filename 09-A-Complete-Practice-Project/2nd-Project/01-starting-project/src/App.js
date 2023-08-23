import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [error, setError] = useState(null);
  const [usersList, setUsersList] = useState([]);

  const showErrorModal = (error) => {
    setError(error);
  };

  const hideErrorModal = () => {
    setError(null);
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
    <Wrapper>
      <AddUser onAddUser={addUserHandler} onError={showErrorModal} />
      {error && (
        <ErrorModal error={error} onClick={hideErrorModal} action="Okay" />
      )}
      {usersList.length > 0 ? (
        <UsersList users={usersList} />
      ) : (
        <h1 style={{ textAlign: "center", color: "#fff" }}>No Users Added</h1>
      )}
    </Wrapper>
  );
}

export default App;
