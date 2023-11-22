import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myGif from "../yp.gif";
import "../styles/signup.css";

const SignUp = () => {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", age: "", gender: "", username: "", password: "", rePassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault();

    let isUsernamePresent = false;

    await fetch(`http://localhost:5000/user/${formData.username}`, {
      method: "GET",
    }).then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }).then((data) => {
      isUsernamePresent = data;
    });

    if (!isUsernamePresent) {
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
        .then((data) => {
          console.log("DATA STORED");
          console.log(data);
        })
        .then(
          navigate("/")
        )
        .catch((error) => {
          console.log('error: ' + error);
        });
    }
    else {
      alert("Username already exists! Please enter different username.")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="signupbox">
      <img src={myGif} title="POPS CODER (Yash Papreja)" className="avatar" />
      <a href="/" style={{ fontSize: "15px" }}>Already have an account? Login here</a>
      <br />
      <br />
      <h1>SignUp Here</h1>

      <form onSubmit={handleSubmit}>
        
        <p>First Name</p>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          required
          value={formData.firstName} onChange={handleChange}
        />

        <p>Last Name</p>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          required
          value={formData.lastName} onChange={handleChange}
        />

        <p>Age</p>
        <input type="text" name="age" placeholder="Enter Age" required value={formData.age} onChange={handleChange} />

        <p>Gender</p>
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="" style={{ display: "none" }} >--Please choose an option--</option>
          <option value="Male" >Male</option>
          <option value="Female" >Female</option>
          <option value="Other" >Other</option>
        </select>

        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
          value={formData.username} onChange={handleChange}
        />

        <p>Enter Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          value={formData.password} onChange={handleChange}
        />

        <p>Re Enter Password</p>
        <input
          type="password"
          name="rePassword"
          placeholder="Enter Password"
          required
          value={formData.rePassword} onChange={handleChange}
        />
        {
          formData.password == formData.rePassword ?
            formData.password != "" ?
              <div style={{ color: "green", marginBottom: "10px" }}>Password matches.</div>
              : ""
            :
            <div style={{ color: "red", marginBottom: "10px" }}>Password doesn't match. Please verify.</div>
        }

        <input type="submit" name="submit" value="SignUp" />

      </form>
    </div>
  );
};

export default SignUp;
