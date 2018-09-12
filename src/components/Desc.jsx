import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Categories from "./Categories";

class Desc extends Component {
  constructor(props) {
    super(props);
    console.log("props:" + JSON.stringify(this.props));
    this.state = {
      productId: 0,
      details: "",
      detail: [],
      name: "",
      description: "",
      createDate: "",
      pic: ""
    };
  }
  componentWillMount() {
    console.log("did mount");
    console.log("props:" + this.props.match.params.name);
    this.setState({
      productId: this.props.match.params.name
    });
  }

  get() {
    var name = this.state.productId;
    var formBody = [];
    formBody.push("name=" + encodeURIComponent(name));
    formBody = formBody.join("&");
    console.log(formBody);
    fetch("/api/getProduct", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    })
      .then(response => response.json())
      .then(adds => {
        console.log(JSON.stringify(adds));
        this.setState({
          details: adds
        });
        var product = this.state.details[0];
        this.setState({
          name: product.name,
          description: product.description,
          createDate: product.createDate,
          pic: product.pic
        });
        this.setState({
          detail: product
        });
        console.log(this.state.pic);
        console.log(this.state.detail);
      });
  }

  componentDidMount() {
    this.get();
  }

  buy() {
    var info = this.state.detail;
    console.log(JSON.stringify(info));
    fetch("https://api.sandbox.paypal.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => {
      return res.json().then(body => {
        if (!res.ok) throw new Error(body);

        if (body.messages && body.messages.resultCode === "Error") {
          throw new Error("Invalid credit card info");
        }
      });
    });
  }
  render() {
    return (
      <div className="container top">
        <div className="col-md-12 content ">
          <div className="text-center">
            <Categories />
          </div>
          <div className="col-md-8  mb-4">
            <div class="list-group">
              <a href="#" className="list-group-item">
                <h3>
                  <b style={{ color: "black" }}>Name:</b>
                  {this.state.name}
                </h3>
              </a>
              <div className="text-center">
                <a href="#" class="list-group-item">
                  <img src={"../" + this.state.pic} alt="" width={250} />
                </a>
              </div>
              <a href="#" className="list-group-item">
                <span>
                  <h3>
                    <b style={{ color: "black" }}>About:</b>{" "}
                    {this.state.description}
                  </h3>
                </span>
              </a>
              <a href="#" className="list-group-item">
                <h4>
                  Posted on:
                  {new Date(this.state.createDate).toDateString().substring(3)}
                </h4>
              </a>
              <div className="col-md-10 " />
              <div className="col-md-2 buy">
                <button
                  className="btn btn-primary"
                  onClick={this.buy.bind(this)}
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Desc);
