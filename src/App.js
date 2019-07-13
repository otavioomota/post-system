import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <PostList />
      </div>
    </div>
  );
}

export default App;
