import React, { Component } from "react";
import Post from "../components/Post.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

class PostPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default PostPage;
