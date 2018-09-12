import React, { Component } from "react";
import Home2 from "../components/Home2.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

class ContentPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home2 />
        <Footer />
      </div>
    );
  }
}

export default ContentPage;
