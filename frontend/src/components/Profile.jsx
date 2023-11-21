import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import userImg from '../user.png';
import { useLocation } from "react-router-dom";
import CustomNavbar from "./Navbar";
import PostsTable from "./PostsTable";

const Profile = () => {

    const location = useLocation();
    const user = location.state;

    return (
        <div className="container">
            <CustomNavbar />
            <div className="row m-0" style={{ backgroundColor: "lightgray" }}>
                <div className="col-md-3" style={{ padding: "15px" }}>
                    <Card style={{ width: '100%' }}>
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
                </div>
                <div className="col-md-9" style={{ padding: "15px" }}>
                    <div style={{
                        backgroundColor: "lightcyan", width: "100%", height: "100%"
                    }}>
                        <h4>Posts</h4>
                        <PostsTable username={user['username']}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;