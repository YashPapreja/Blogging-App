import React, { useState } from "react";
import Post from "./Post";

const Posts = () => {

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const posts = [
        {
            id: 1,
            username: "abcd",
            title: 'Title',
            content: "a message",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        },
        {
            id: 2,
            username: "abcdee",
            title: 'Title',

            content: "a message 1",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            id: 3,
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            id: 4,
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        },
        {
            id: 5,
            title: 'Title',
            username: "abcdee",
            content: "a message 1",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            id: 6,
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            id: 7,
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        },
        {
            id: 8,
            title: 'Title',
            username: "abcdee",
            content: "a message 1",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            id: 9,
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            id: 10,
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }

    ];

    return (
        <div className="users">
            {posts.map((post) => (
                <Post key={post['id']} post={post} />
            ))}
        </div>
    );
};

export default Posts;