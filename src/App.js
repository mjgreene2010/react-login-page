import "./styling/App.css";
import Login from "./Login";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <Login />;
}

export default App;
