import React, { useState, useEffect } from "react";
import User from "./User";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Users = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            {
                users != null ?
                    <div className="users">
                        <Row xs={1} sm={2} md={2} lg={3} xl={4} xxl={4} className="g-4">
                            {users.map((user) => (
                                <Col key={user['username']}>
                                    <User user={user} />
                                </Col>
                            ))}
                        </Row>

                    </div>
                    : <div>
                        <h1 style={{ color: "yellow", marginTop: "10px" }}>LOADING...</h1>
                    </div>
            }
        </div>
    );
};

export default Users;