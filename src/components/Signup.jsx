import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
  }

  signup() {
    var firstName = this.refs.firstName.value;
    var lastName = this.refs.lastName.value;
    var phone = this.refs.phone.value;
    var mail = this.refs.mail.value;
    var password = this.refs.password.value;
    var formBody = [];
    formBody.push("firstName=" + encodeURIComponent(firstName));
    formBody.push("lastName=" + encodeURIComponent(lastName));
    formBody.push("phone=" + encodeURIComponent(phone));
    formBody.push("mail=" + encodeURIComponent(mail));
    formBody.push("password=" + encodeURIComponent(password));
    formBody = formBody.join("&");
    console.log(formBody);
    fetch("/api/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    })
      .then(response => response.json())
      .then(status => {
        if (status.password != "") {
          window.location.href = "/login";
          alert("please login to continue");
        } else {
          alert("failed to submit" + JSON.stringify(status));
        }
      })
      .catch(err => {
        alert("error to submit" + JSON.stringify(err));
      });
  }

  render() {
    return (
      <div className="container signup">
        <div className="col-md-12">
          <div className="col-md-4" />
          <div className="row text-center">
            <div className="col-xs-12 col-sm-12 col-md-4 well well-sm">
              <legend>
                <i className="glyphicon glyphicon-globe" />
                Sign up!
              </legend>
              <div className="form-horizontal" role="form">
                <div className="row">
                  <div className="col-xs-6 col-md-6">
                    <input
                      className="form-control"
                      ref="firstName"
                      name="firstname"
                      placeholder="First Name"
                      type="text"
                      required
                    />
                  </div>

                  <div className="col-xs-6 col-md-6">
                    <input
                      className="form-control"
                      ref="lastName"
                      name="lastname"
                      placeholder="Last Name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <br />
                <input
                  className="form-control"
                  name="phone"
                  ref="phone"
                  placeholder="Your phone number"
                  type="phone"
                />
                <br />
                <input
                  className="form-control"
                  ref="mail"
                  name="youremail"
                  placeholder="Your Email"
                  type="email"
                />
                <br />

                <input
                  className="form-control"
                  ref="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />

                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  onClick={this.signup}
                >
                  Sign up
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
