import React, { useState } from "react";

const Post = ({ post }) => {

  return (
    <div class="card" style={{ marginBottom: "10px" }}>
      <div class="card-header" style={{display:"flex", justifyContent:"space-between"}}>
        <p style={{fontSize: "16px", marginBottom:"0"}}><strong>UserName: </strong>{post['username']}</p>
        <p style={{fontSize: "16px", marginBottom:"0"}}><strong>Date Posted: </strong>{post['createdAt']}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title"><strong>{post['title']}</strong></h5>
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