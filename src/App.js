import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.email}>
          <p>{user.email}</p>
          <p>{user.full_name}</p>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
