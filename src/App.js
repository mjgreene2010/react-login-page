import "./styling/App.css";
import Login from "./Login";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (name, pass) => {
    setUsername(name);
    setPassword(pass);
  };

  return (
    <div>
      {console.log(username, password)}
      <Login loginHandler={userHandler} />
    </div>
  );
}

export default App;
