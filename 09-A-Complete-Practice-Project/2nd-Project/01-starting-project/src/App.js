import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/Users/ErrorModal";

function App() {
  const [errorModal, setErrorModal] = useState("");
  const [usersList, setUsersList] = useState([]);

  const showErrorModal = (error) => {
    if (error.length > 0) {
      setErrorModal(error);
    }
  };

  const hideErrorModal = () => {
    setErrorModal("");
  };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} onError={showErrorModal} />
      {errorModal && (
        <ErrorModal error={errorModal} onHideError={hideErrorModal} />
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
