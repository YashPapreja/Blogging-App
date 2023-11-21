import React, { useState } from "react";
import myGif from "../yp.gif";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitThis = async (event) => {

    event.preventDefault();

    let isUsernamePresent = false;

    await fetch(`http://localhost:5000/user/${username}`, {
      method: "GET",
    }).then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }).then((data) => {
      isUsernamePresent = data;
    });

    if (isUsernamePresent) {
      fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error(response.status);
          return response.json();
        })
        .then((data) => {
          if (Object.keys(data) == 0) {
            alert("Wrong Password entered!");
            throw new Error("Wrong Password entered!");
          }

          console.log("VALID USER FOUND");
          console.log(data);
          localStorage.setItem("UserProfile", JSON.stringify(data))
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Username doesn't exists!");
    }
  };

  return (
    <div className="loginbox">
      <img src={myGif} title="POPS CODER (Yash Papreja)" className="avatar" />
      <h1>Login Here</h1>
      <form onSubmit={submitThis}>
        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" name="submit" value="Login" />

        <a href="#">Forgot your password?</a>
        <br />
        <a href="/signup">Don't have an account? Sign up here</a>
      </form>
    </div>
  );
};

export default Login;
