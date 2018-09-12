import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-area-top s-space-equal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-box">
                  <h3 className="title-bar-left size-lg">
                    <b>About us</b>
                  </h3>
                  <ul className="useful-link list-unstyled">
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-box">
                  <h3 className="title-medium-light title-bar-left size-lg">
                    <b> How to sell fast</b>
                  </h3>
                  <ul className="useful-link list-unstyled">
                    <li>
                      <a href="#">How to sell fast</a>
                    </li>
                    <li>
                      <a href="#">Buy Now on Classipost</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Banner Advertising</a>
                    </li>
                    <li>
                      <a href="#">Promote your ad</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-box">
                  <h3 className="title-medium-light title-bar-left size-lg">
                    <b> Help &amp; Support</b>
                  </h3>
                  <ul className="useful-link list-unstyled">
                    <li>
                      <a href="#">Live Chat</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Stay safe on classipost</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-box">
                  <h3 className="title-medium-light title-bar-left size-lg">
                    <b> Follow Us On</b>
                  </h3>
                  <ul className="folow-us list-unstyled">
                    <li>
                      <a href="#">
                        <img src="../images/footer/follow1.jpg" alt="follow" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="../images/footer/follow2.jpg" alt="follow" />
                      </a>
                    </li>
                  </ul>
                  <ul className="social-link list-unstyled">
                    <li className="fa-classipost">
                      <a href="#">
                        <img src="../images/footer/facebook.jpg" alt="social" />
                      </a>
                    </li>
                    <li className="tw-classipost">
                      <a href="#">
                        <img src="../images/footer/twitter.jpg" alt="social" />
                      </a>
                    </li>
                    <li className="yo-classipost">
                      <a href="#">
                        <img src="../images/footer/youtube.jpg" alt="social" />
                      </a>
                    </li>
                    <li className="pi-classipost">
                      <a href="#">
                        <img
                          src="../images/footer/pinterest.jpg"
                          alt="social"
                        />
                      </a>
                    </li>
                    <li className="li-classipost">
                      <a href="#">
                        <img src="../images/footer/linkedin.jpg" alt="social" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container ">
            <div className="row footer-box">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-center-mb">
                <p>Copyright © classipost</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-right text-center-mb">
                <ul className="list-unstyled social-link">
                  <li>
                    <img src="../images/footer/card1.jpg" alt="card" />
                  </li>
                  <li>
                    <img src="../images/footer/card2.jpg" alt="card" />
                  </li>
                  <li>
                    <img src="../images/footer/card3.jpg" alt="card" />
                  </li>
                  <li>
                    <img src="../images/footer/card4.jpg" alt="card" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
