import React from "react";
import Comment from "../Comment/Comment";
import PostHeader from "../PostHeader/PostHeader";

import "../PostList/PostList.css";

const post = ({
  authorPostName,
  authorPostAvatar,
  postDate,
  content,
  comments
}) => {
  return (
    <>
      <div className="post">
        <PostHeader
          authorPostName={authorPostName}
          authorPostAvatar={authorPostAvatar}
          postDate={postDate}
          content={content}
        />
        <div className="comments-box">
          {comments.map(comment => (
            <Comment
              commentAuthorName={comment.author.name}
              commentAuthorAvatar={comment.author.avatar}
              comment={comment.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default post;
