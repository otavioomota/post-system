import React, { Component } from "react";

import "./PostList.css";
import Post from "../Post/Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Otávio Mota",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bald_Eagle_Portrait.jpg/250px-Bald_Eagle_Portrait.jpg"
        },
        date: "12 Jun 2019",
        content: "Pessoal alguem sabe se a RocketSeat está contratando ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Rocketseat",
              avatar:
                "https://www.petz.com.br/blog/wp-content/uploads/2017/06/comprar-papagaio.jpg"
            },
            content: "Está sim, venha !"
          },
          {
            id: 2,
            author: {
              name: "Claudio ",
              avatar:
                "https://abrilsuperinteressante.files.wordpress.com/2016/09/super_imggirafa.jpg"
            },
            content: "Quero tambem !!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gustavo Henrique",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bald_Eagle_Portrait.jpg/250px-Bald_Eagle_Portrait.jpg"
        },
        date: "12 Jun 2019",
        content: "Alguem ai tem uma cerveja ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Rocketseat",
              avatar:
                "https://abrilsuperinteressante.files.wordpress.com/2016/09/super_imggirafa.jpg"
            },
            content: "Tenho, quer quantas ?"
          },
          {
            id: 2,
            author: {
              name: "Tulio ",
              avatar:
                "https://www.petz.com.br/blog/wp-content/uploads/2017/06/comprar-papagaio.jpg"
            },
            content: "Quero tambem !!"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="postlist-box">
        {this.state.posts.map(post => (
          <Post
            authorPostName={post.author.name}
            authorPostAvatar={post.author.avatar}
            postDate={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
