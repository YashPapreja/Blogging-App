import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const userProfile = JSON.parse(localStorage.getItem("UserProfile"));
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const submitThis = async (event) => {

        event.preventDefault();

        fetch("http://localhost:5000/post", {
            method: "POST",
            body: JSON.stringify({ username: userProfile['username'], title: title, message: message }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <div className="container">
            {
                userProfile != null ?
                    <div>
                        <h1 style={{ color: "white", marginTop: "10px" }}>CREATE A NEW POST!</h1>
                        <CustomNavbar />
                        <div className="container" style={{
                            marginTop: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <form style={{
                                width: "100%", backgroundColor: 'black',
                                padding: '20px', borderRadius: '50px'
                            }} onSubmit={submitThis}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" style={{ color: "white", fontSize: "20px" }}>Title</label>
                                    <input type="text" className="form-control" required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" style={{ color: "white", fontSize: "20px" }}>Message</label>
                                    <textarea className="form-control" rows="4" required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>

                                <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-1">Post</button>
                            </form>
                        </div>
                    </div>

                    : <div>
                        <p style={{ fontSize: "20px", color: "white", marginTop: "20px" }}>User not logged in. Please <a href="/" style={{ color: "yellow" }}>login</a>.</p>
                    </div>
            }
        </div>
    );
};

export default CreatePost;