import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/Users/ErrorModal";

function App() {
  const [errorModal, setErrorModal] = useState("");
  const [users, setUsers] = useState([]);

  const showErrorModal = (error) => {
    if (error.length > 0) {
      setErrorModal(error);
    }
  };

  const hideErrorModal = () => {
    setErrorModal("");
  };

  const addUser = (name, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { username: name, age: age }];
    });
  };

  console.log(users);

  return (
    <div>
      <AddUser onAddUser={addUser} onError={showErrorModal} />
      {errorModal && (
        <ErrorModal error={errorModal} onHideError={hideErrorModal} />
      )}
      {users.length > 0 ? (
        <UsersList users={users} />
      ) : (
        <h1 style={{ textAlign: "center", color: "#fff" }}>No Users Added</h1>
      )}
    </div>
  );
}

export default App;
