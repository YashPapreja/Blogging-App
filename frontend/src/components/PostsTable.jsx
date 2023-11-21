import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostsTable = ({ username }) => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/post/${username}`)
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            {
                posts != null ?
                    <div className="users">
                        {posts.map((post) => (
                            <Post key={post['id']} post={post} />
                        ))}
                    </div>
                    :
                    <div>
                        <h1 style={{ color: "yellow", marginTop: "10px" }}>LOADING...</h1>
                    </div>
            }
        </div>
    );
};

export default PostsTable;