import React from "react";
import { useState,useContext } from "react";
import "../App";
import UserContext from "../context/userContext";

function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
    const formElement = e.target;
    formElement.classList.remove('fade-in');
    void formElement.offsetWidth;
    formElement.classList.add('fade-in');
  };
  return (
    <div className="body">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default login;
