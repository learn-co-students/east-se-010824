import React from "react";

import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";

import blogData from "../data/blog";

const { name, image, about, posts } = blogData

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
