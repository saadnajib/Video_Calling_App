import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                        LikeMind<span>.</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-11 text-right menu-1">
                    <ul>
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Events">Events</Link>
                      </li>
                      <li>
                        <Link to="/Gallery">Gallery</Link>
                      </li>

                      <li>
                        <Link to="/Love">Its Love</Link>
                      </li>
                      <li>
                        <Link to="/Info">Info</Link>
                      </li>
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li className="btn-cta">
                        <Link to="/Register">
                          <span>Register</span>
                        </Link>
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
            style={{ backgroundImage: 'url("assets/images/bglikemind.jpeg")' }}
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
