import React, { Component } from "react";
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container navv">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src="../images/header/logo.png" />
            </a>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/signup">
                <span className="glyphicon glyphicon-user" /> Sign Up
              </a>
            </li>
            <li>
              <a href="/login">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
            <li>
              <a href="/postAd">
                <button className="btn btn-warning btn-block">
                  <span className="free">Submit a Free Ad</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      // <nav className="navbar navbar-inverse navbar-fixed-top">
      //   <div className="container-fluid">
      //     <div className="navbar-header">
      //       <a className="navbar-brand" href="/">
      //         <img src="images/header/logo.png" />
      //       </a>
      //     </div>

      //     <ul className="nav navbar-nav navbar-right">
      //       <li>
      //         <a href="#">
      //           <span className="glyphicon glyphicon-user" /> Sign Up
      //         </a>
      //       </li>
      //       <li>
      //         <a href="#">
      //           <span className="glyphicon glyphicon-log-in" /> Login
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/postAd">
      //           <button className="btn btn-warning btn-block">
      //             <span className="free">Submit a Free Ad</span>
      //           </button>
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}

export default Nav;
