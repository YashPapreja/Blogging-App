import React, { useState } from "react";
import Post from "./Post";

const Posts = () => {

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const posts = [
        {
            username: "abcd",
            title: 'Title',
            content: "a message",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        },
        {
            username: "abcdee",
            title: 'Title',

            content: "a message 1",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        },
        {
            title: 'Title',
            username: "abcdee",
            content: "a message 1",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        },
        {
            title: 'Title',
            username: "abcdee",
            content: "a message 1",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options),
            modifiedAt: new Date(2023, 11, 1).toLocaleDateString("en-US", options)
        }, {
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
                <Post post={post} />
            ))}
        </div>
    );
};

export default Posts;