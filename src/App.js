import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPage from "./containers/PostPage.jsx";
import HomePage from "./containers/HomePage.jsx";
import LoginPage from "./containers/LoginPage.jsx";
import SignupPage from "./containers/SignupPage.jsx";
import ContentPage from "./containers/ContentPage.jsx";
import DescPage from "./containers/DescPage.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/postAd" component={PostPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/type" component={ContentPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/products/:name" component={DescPage} />
        </div>
      </Router>
    );
  }
}

export default App;
