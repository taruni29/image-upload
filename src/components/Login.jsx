import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    var mail = this.refs.mail1.value;
    var password = this.refs.password1.value;
    var formBody = [];
    formBody.push("mail=" + encodeURIComponent(mail));
    formBody.push("password=" + encodeURIComponent(password));
    formBody = formBody.join("&");
    // var formBody = "mail=" + mail + "&password=" + password;
    console.log(formBody);
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    })
      .then(response => response.json())
      .then(status => {
        console.log(status._id);
        if (status._id != "") {
          alert("welcome");
          window.location.href = "/";
        } else {
          alert("please signup");
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  }
  render() {
    return (
      <div className="container login">
        <div className="col-md-12">
          <div className="col-md-4" />
          <div className="row text-center">
            <div className="col-md-4 well">
              <legend>
                <i className="glyphicon glyphicon-globe" />
                Login!
              </legend>
              <div className="form-horizontal">
                <div className="row">
                  <input
                    className="form-control"
                    ref="mail1"
                    name="youremail"
                    placeholder="Your Email"
                    type="email"
                  />
                  <br />
                  <input
                    className="form-control"
                    ref="password1"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />

                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={this.login}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
