import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";

/**
 * Exercise
 * 1. fetch data and store it in {users} state.
 * 2. Pass user data as {user} prop for UserCard component and render all users.
 * 3. In UserCard component, render user name, and user email.
 * Inside UserCard add class "card" to wrapper.
 *
 * NOTE: DB url - http://localhost:3000/contacts
 */

const App = () => {
  const [users, setUsers] = useState([]);
  // const [selectedContact, setSelectedContact] = useState("All");

  if (users.length === 0) {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }

  return (
    <div className="App">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default App;
