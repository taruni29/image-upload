import React, { Component } from "react";
import Nav from "../components/Nav.jsx";
import Signup from "../components/Signup.jsx";
import Footer from "../components/Footer.jsx";

class SignupPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default SignupPage;
