import React, { useState } from "react";
import "./register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [message, setMessage] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();

    // You can add validation and other checks here

    // Simulate a successful registration
    // In a real application, you'd typically send this data to a server for registration
    setMessage(
      `Registration successful for ${username} with email ${email} and Date of Birth: ${dateOfBirth}.`
    );

    // Clear form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setDateOfBirth("");
  };

  return (
    <div className="container">
      <h1>Register for our Blog</h1>
      <form onSubmit={handleRegistration}>
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
              <label htmlFor="email">Email:</label>
            </td>
            <td>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          <tr>
            <td>
              <label htmlFor="dateOfBirth">Date of Birth:</label>
            </td>
            <td>
              <input
                type="date"
                id="dateOfBirth"
                required
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </td>
          </tr>
          </table>
        <button type="submit">Register</button>
      </form>
      <p id="message">{message}</p>
    </div>
  );
}

export default Register;
