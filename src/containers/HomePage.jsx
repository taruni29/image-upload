import React, { Component } from "react";
import Home from "../components/Home.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

class PostPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default PostPage;
