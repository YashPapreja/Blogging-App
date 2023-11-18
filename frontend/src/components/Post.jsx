import React, { useState } from "react";

const Post = ({ post }) => {

  return (
    <div class="card" style={{ marginBottom: "10px" }}>
      <h5 class="card-header">UserName: {post['username']}   Date Posted: {post['createdAt']}</h5>
      <div class="card-body">
        <h5 class="card-title">{post['title']}</h5>
        <p class="card-text">
          {post['content']}
        </p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default Post;