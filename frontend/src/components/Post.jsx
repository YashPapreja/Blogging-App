import React, { useState } from "react";

const Post = ({ post }) => {

  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "16px", marginBottom: "0" }}><strong>UserName: </strong>{post['username']}</p>
        <p style={{ fontSize: "16px", marginBottom: "0" }}><strong>Date Posted: </strong>{post['createdAt']}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title"><strong>{post['title']}</strong></h5>
        <p className="card-text">
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