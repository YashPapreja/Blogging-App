import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import Posts from "./Posts";

const Home = () => {
  const userProfile = JSON.parse(localStorage.getItem("UserProfile"))

    return (
        <div className="container">
            {
                userProfile != null ?
                    <div>
                        <h1 style={{ color: "white", marginTop: "10px" }}>WELCOME TO BLOG-FORGE!</h1>
                        <CustomNavbar />
                        <Posts />
                    </div>

                    : <div>
                        <p style={{fontSize: "20px", color:"white", marginTop: "20px"}}>User not logged in. Please <a href="/" style={{color:"yellow"}}>login</a>.</p>
                    </div>
            }
        </div>
    );
};

export default Home;