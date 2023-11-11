import React, { useState } from "react";
import myGif from "../yp.gif";
import "../styles/signup.css";

const SignUp = () => {
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

    <div className="signupbox">
      <img src={myGif} title="POPS CODER (Yash Papreja)" className="avatar" />
      <h1>SignUp Here</h1>
      <form>
        <p>First Name</p>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          required
        />

        <p>Last Name</p>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          required
        />

        <p>Age</p>
        <input type="text" name="age" placeholder="Enter Age" required />

        <p>Gender</p>
        <select id="gender" name="gender">
        <option value="" style={{display: "none"}} selected>--Please choose an option--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
        />

        <p>Enter Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />

        <p>Re Enter Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />

        <a href="./SOLACE MUSIC/Solace-The Music you need(MUSIC WEBSITE)/index.html">
          <input type="submit" name="submit" value="SignUp" />
        </a>

      </form>
    </div>
  );
};

export default SignUp;
