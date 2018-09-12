import React, { Component } from "react";
import Categories from "./Categories";
import Content from "./Content";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container hm">
        <div className="col-md-12 content">
          <Categories />
          <div className="col-md-8">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
