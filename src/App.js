import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    // <div>
    // <>
    // <React.Fragment>
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/* </div> */}
      {/* </> */}
      {/* </React.Fragment> */}
    </Fragment>
  );
}

export default App;
