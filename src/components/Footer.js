import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          style={{ backgroundColor: "rgb(104 24 9)" }}
          id="fh5co-footer"
          role="contentinfo"
          b
        >
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-3 fh5co-widget">
                <h4 style={{ color: "white" }}>About Us</h4>
                <p style={{ color: "white" }}>
                  lorem ipsum dummy text this is unreal text but itss like real
                  text when we have real text we will just replace it
                </p>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                <h4 style={{ color: "white" }}>Quick Links</h4>
                <ul className="fh5co-footer-links">
                  <li>
                    <a style={{ color: "white" }} href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "white" }} href="#">
                      Events
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "white" }} href="#">
                      Its Love
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "white" }} href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "white" }} href="#">
                      Register
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-6 col-md-push-1">
                <h4 style={{ color: "white" }}> JOIN US ON SOCIAL MEDIA</h4>
                <ul className="fh5co-social-icons">
                  <li>
                    <a href="#">
                      <i
                        style={{ color: "white" }}
                        className="icon-twitter"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        style={{ color: "white" }}
                        className="icon-facebook"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        style={{ color: "white" }}
                        className="icon-linkedin"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        style={{ color: "white" }}
                        className="icon-dribbble"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small style={{ color: "white" }} className="block">
                    &copy; LikeMind. All Rights Reserved.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
