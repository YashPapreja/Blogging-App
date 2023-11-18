import React, { useState } from "react";
import Post from "./Post";

const Posts = () => {

    const posts = [
        {
            username: "abcd",
            title: 'Title',
            content: "a message",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },
        {
            username: "abcdee",
            title: 'Title',

            content: "a message 1",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },{
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },{
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },
        {
            title: 'Title',
            username: "abcdee",
            content: "a message 1",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },{
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },{
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },
        {
            title: 'Title',
            username: "abcdee",
            content: "a message 1",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },{
            title: 'Title',
            username: "abcdff",
            content: "a message 2",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        },{
            title: 'Title',
            username: "abcdjjj",
            content: "a message 3",
            createdAt: Date(2023, 11, 1),
            modifiedAt: Date(2023, 11, 1)
        }
    
    ];
    
      return (
        <div className="users">
          {posts.map((post) => (
            <Post post={post}/>
          ))}
        </div>
      );
};

export default Posts;