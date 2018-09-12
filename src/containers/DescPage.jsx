import React, { Component } from "react";
import Nav from "../components/Nav";
import Desc from "../components/Desc.jsx";
import Footer from "../components/Footer.jsx";

class DescPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Desc />
        <Footer />
      </div>
    );
  }
}

export default DescPage;
