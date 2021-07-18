import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [userslist, setUserslist] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserslist((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userslist} />
    </div>
  );
}

export default App;
