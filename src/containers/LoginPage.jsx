import React, { Component } from "react";
import Login from "../components/Login.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
