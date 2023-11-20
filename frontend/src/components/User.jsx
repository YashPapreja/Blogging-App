import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userImg from '../user.png';
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const navigation = useNavigate();
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={userImg} />
            <Card.Body>
                <Card.Title><strong>{user['firstName']} {user['lastName']}</strong></Card.Title>
                <Card.Text>
                    <span style={{ fontWeight: "600" }}>User Name: </span>{user['username']}
                </Card.Text>
                <Button variant="primary" onClick={() => {
                    navigation('/profile', { state: user });
                }}>View Profile</Button>
            </Card.Body>
        </Card>
    );
};

export default User;