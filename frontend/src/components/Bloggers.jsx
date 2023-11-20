import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import Users from "./Users";

const Bloggers = () => {

    const userProfile = JSON.parse(localStorage.getItem("UserProfile"))

    return (
        <div className="container">
            {
                userProfile != null ?
                    <div>
                        <h1 style={{ color: "white", marginTop: "10px" }}>BLOGGERS!</h1>
                        <CustomNavbar />
                        <Users />
                    </div>

                    : <div>
                        <p style={{ fontSize: "20px", color: "white", marginTop: "20px" }}>User not logged in. Please <a href="/" style={{ color: "yellow" }}>login</a>.</p>
                    </div>
            }
        </div>
    );
};

export default Bloggers;