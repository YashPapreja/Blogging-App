import React, { useState } from "react";
import myGif from "../yp.gif";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");

  const [dataInput, setDataInput] = useState("");

  const submitThis = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };
  return (
    // <div>
    // 	<form action="" onSubmit={submitThis}>
    // 		<div>
    // 			<label htmlFor="email">Email</label>
    // 			<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    // 		</div>
    // 		<div>
    // 			<label htmlFor="passw">Password</label>
    // 		<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/>
    // 		</div>
    // 		<button type="submit">Login</button>
    // 	</form>
    // </div>

    <div className="loginbox">
      <img src={myGif} title="POPS CODER (Yash Papreja)" className="avatar" />
      <h1>Login Here</h1>
      <form>
        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <a href="./SOLACE MUSIC/Solace-The Music you need(MUSIC WEBSITE)/index.html">
          <input type="submit" name="submit" value="Login" />
        </a>

        <a href="#">Forgot your password?</a>
        <br />
        <a href="/signup">Don't have an account? Sign up here</a>
      </form>
    </div>
  );
};

export default Login;
