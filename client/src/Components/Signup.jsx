import React, { useState } from "react";
import "../App.css";
import Axios from "axios";

const Signup = () => {
  // use states for signup
  // a hook
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to handle the submit button
  const handleSubmit = () => {
    e.preventDefault(); // prevents the default submissions. If not written there will be errors
    // server side app url
    // post method sending in the username, email and password values to the server side. The values are from our usestates variables
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    }).then(res => {
      console.log(res)
    }).catch(err=> {
      console.log(err)
    })
  };

  return (
    <div className="sign-up-container">
      {/* Added onSubmit and it will call the handleSubmit function that i created */}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        {/* when something is typed in the username input call the setUserName method 
          from the usestate and update the username variable (usestate) */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        >
          {/* when something is typed in the email input call the setEmail method 
          from the usestate and update the email variable (usestate) */}
        </input>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        >
          {/* when something is typed in the password input call the setPassword method 
          from the usestate and update the password variable (usestate) */}
        </input>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
