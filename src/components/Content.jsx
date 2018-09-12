import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adds: [],
      selectedId: 0,
      redirectTo: false
    };
    this.getAds = this.getAds.bind(this);
  }
  getAds() {
    fetch("/api/getallads")
      .then(response => response.json())
      .then(adds => {
        console.log(JSON.stringify(adds));
        this.setState({
          adds: adds,
          selectedId: 0,
          redirectTo: false
        });
      });
  }
  click(name) {
    console.log("name" + name);
    this.setState({
      redirectTo: true,
      selectedId: name
    });
  }

  componentWillMount() {
    this.getAds();
  }

  render() {
    if (this.state.redirectTo == true) {
      console.log("Redirecting..");
      return <Redirect to={"/products/" + this.state.selectedId} />;
    }
    return (
      <div className="container">
        <div className="col-lg-8">
          <div className="row">
            <div>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h4> All Ads</h4>
                </div>

                <div className="panel-body">
                  {this.state.adds.map(add => (
                    <div className="crd col-lg-3">
                      <div
                        className="cards"
                        onClick={this.click.bind(this, add.name)}
                      >
                        <div className="card">
                          <img
                            src={add.pic}
                            className="card-img-top"
                            alt="image"
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">
                            {add.name.slice(0, 12)}...
                          </h4>
                          <h3 className="card-text">
                            {add.description.slice(0, 10)}...
                          </h3>
                          {/* <h2>{add.type}</h2> */}
                        </div>
                      </div>
                      <br />
                    </div>
                  ))}
                </div>

                <div className="gradient-wrapper  text-center">
                  <ul class="pagination ">
                    <li className="disabled">
                      <a href="#">
                        <i
                          className="fa fa-angle-double-left"
                          aria-hidden="true"
                        />Previous
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li className="next">
                      <a href="#">
                        Next{" "}
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
