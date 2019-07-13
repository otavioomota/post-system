import React from "react";

import "./PostHeader.css";

const postHeader = ({
  authorPostName,
  authorPostAvatar,
  postDate,
  content
}) => {
  return (
    <>
      <div className="post-user">
        <div className="perfil">
          <img src={authorPostAvatar} alt="perfil" />
          <div className="perfil-data">
            <strong>{authorPostName}</strong>
            <small>{postDate}</small>
          </div>
        </div>

        <p>{content}</p>
      </div>
    </>
  );
};

export default postHeader;
