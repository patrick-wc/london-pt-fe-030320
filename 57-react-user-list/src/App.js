import React, { useState } from "react";

/**
 * Create a User List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 *
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 */

function App() {
  const [users, setUsers] = useState([]);

  const getUser = async () =>
    await fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((response) => response);

  const newUser = async () => {
    const randomUser = await getUser();
    setUsers([...users, randomUser]);
  };

  const removeUser = (user) => setUsers(users.filter((u) => u !== user));

  return (
    <div>
      <button className="newUser" onClick={() => newUser()}>
        Add User
      </button>
      {users.map((user) => (
        <div>
          <ul>
            <li key={user.results[0].id.name}>
              {user.results[0].name.first} {user.results[0].name.last}
              <button className="remove" onClick={() => removeUser(user)}>
                Remove
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
