import React, { useState } from "react";
import CustomNavbar from "./Navbar"; 
import Posts from "./Posts";

const Home = () => {
    return(
        <div className="container">
            <h1 style={{color: "white", marginTop: "10px"}}>WELCOME TO BLOG-FORGE!</h1>
            <CustomNavbar />
            <Posts />
        </div>
    );
};

export default Home;