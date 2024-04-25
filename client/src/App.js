import React from "react";

import Tasks from "./components/Tasks/Tasks";
import Auth from "./components/Auth/Auth";
import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const storedJwt = localStorage.getItem("token");
  const storedUsername = localStorage.getItem("username");
  const [username, setUsername] = useState(storedUsername || null);
  const [token, setToken] = useState(storedJwt || null);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const updateUsername = (newUsername) => {
    localStorage.setItem("username", newUsername);
    setUsername(newUsername);
  };

  return (
    <div className="App">
      {token ? (
        <Tasks token={token} username={username} />
      ) : (
        <Auth updateToken={updateToken} updateUsername={updateUsername} />
      )}
    </div>
  );
}

export default App;
