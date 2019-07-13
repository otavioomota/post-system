import React from "react";

import "./Comment.css";

const comment = ({ commentAuthorName, commentAuthorAvatar, comment }) => {
  return (
    <>
      <div className="comment-box">
        <img src={commentAuthorAvatar} alt="perfil" />
        <div className="comment">
          <p>
            <strong>{commentAuthorName}</strong> {comment}
          </p>
        </div>
      </div>
    </>
  );
};

export default comment;
