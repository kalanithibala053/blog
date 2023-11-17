import React, { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Here, you can add logic to validate the username and password, e.g., by checking against a database.

    // Simulate a successful login for this example
    if (username === "your_username" && password === "your_password") {
      setMessage("Login successful!");
    } else {
      setMessage("Login failed. Please check your credentials.");
    }

    // Clear form fields
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <h1>Login to our Blog</h1>
      <form onSubmit={handleLogin}>
        <table>
          <tr>
            <td>
              <label htmlFor="username">Username:</label>
            </td>
            <td>
              <input
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password:</label>
            </td>
            <td>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <button type="submit">Login</button>
      </form>
      <p id="message">{message}</p>
    </div>
  );
}

export default Login;
