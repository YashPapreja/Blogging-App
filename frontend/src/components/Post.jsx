import React, { useState } from "react";

const Post = ({post}) => {
    
  return (
    <div class="card" style={{marginBottom: "10px"}}>
      <h5 class="card-header">UserName: {post['username']}   Date Posted: {post['createdAt']}</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Post;