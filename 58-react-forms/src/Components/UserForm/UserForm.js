import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  const postUser = async (newUser) => {
    console.log("something");

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };
    return fetch("http://localhost:3000/users", configObj)
      .then((response) => {
        if (response.ok) {
          console.log("ok");
          return response.json();
        } else {
          throw "Oops something went wrong!";
        }
      })
      .catch((error) => error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, age, gender } = user;

    if (firstName && lastName && gender) {
      postUser(user);
    }

    setUser({
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
    });
  };

  return (
    <div className="state">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className="firstName"
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        ></input>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="lastName"
          value={user.lastName}
          onChange={handleChange}
        ></input>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          className="age"
          value={user.age}
          onChange={handleChange}
        ></input>
        <label htmlFor="gender">Gender:</label>
        <select
          className="gender"
          name="gender"
          id="gender"
          value={user.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
