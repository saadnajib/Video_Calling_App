import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="fh5co-loader"></div>

        <div id="page">
          <nav className="fh5co-nav" role="navigation">
            <div className="top-menu">
              <div className="container">
                <div className="row">
                  <div className="col-xs-1">
                    <div id="fh5co-logo">
                      <a href="index.html">
                        Learn<span>.</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-11 text-right menu-1">
                    <ul>
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="courses.html">Events</a>
                      </li>
                      <li>
                        <a href="pricing.html">Gallery</a>
                      </li>

                      <li>
                        <a href="contact.html">Its Love</a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Info</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Blog</span>
                        </a>
                      </li>
                      <li className="btn-cta">
                        <a href="#">
                          <span>Register</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <header
            id="fh5co-header"
            className="fh5co-cover"
            style={{ marginBottom: "0px!important" }}
            role="banner"
            style={{ backgroundImage: 'url("assets/images/img_bg_1.jpg")' }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                  <div className="display-t">
                    <div
                      className="display-tc animate-box"
                      data-animate-effect="fadeIn"
                    >
                      <h3 style={{ color: "#fff" }}>
                        Find your{" "}
                        <span style={{ color: "rgb(255, 54, 54)" }}>
                          SOULMATE{" "}
                        </span>{" "}
                        with ease with us
                      </h3>

                      <div className="row">
                        <div className="col-md-4">
                          <input
                            style={{
                              marginTop: "7px",
                              backgroundColor: "#fff",
                              borderRadius: "20px"
                            }}
                            placeholder="Location"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            style={{
                              marginTop: "7px",
                              backgroundColor: "#fff",
                              borderRadius: "20px"
                            }}
                            placeholder="Age"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            style={{
                              marginTop: "7px",
                              backgroundColor: "#fff",
                              borderRadius: "20px"
                            }}
                            placeholder="Date"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <br />
                      <p>
                        <a
                          style={{ backgroundColor: "rgb(255, 54, 54)" }}
                          className="btn btn-primary btn-lg popup-vimeo "
                        >
                          Find Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
