import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import userImg from '../user.png';
import { useLocation } from "react-router-dom";
import CustomNavbar from "./Navbar";

const Profile = () => {

    const location = useLocation();
    const user = location.state;

    return (
        <div>
            <CustomNavbar />
            <Card style={{ width: '20%' }}>
                <Card.Img variant="top" src={userImg} />
                <Card.Body>
                    <Card.Title><strong>{user['firstName']} {user['lastName']}</strong></Card.Title>
                    <div>
                        <div><span style={{ fontWeight: "600" }}>User Name: </span>{user['username']}</div>
                        <div><span style={{ fontWeight: "600" }}>Age: </span>{user['age']}</div>
                        <div><span style={{ fontWeight: "600" }}>Gender: </span>{user['gender']}</div>
                    </div>
                </Card.Body>
            </Card>
            <div>

            </div>
        </div>
    );
};

export default Profile;