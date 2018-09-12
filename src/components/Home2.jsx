import React, { Component } from "react";
import Categories from "./Categories";
import Content2 from "./Content2";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container hm">
        <div className="col-md-12 content">
          <Categories />
          <div className="col-md-8">
            <Content2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
