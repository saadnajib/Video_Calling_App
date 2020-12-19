import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="fh5co-loader"></div>

        <div id="page">
          <nav class="fh5co-nav" role="navigation">
            <div class="top-menu">
              <div class="container">
                <div class="row">
                  <div class="col-xs-1">
                    <div id="fh5co-logo">
                      <a href="index.html">
                        Learn<span>.</span>
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-11 text-right menu-1">
                    <ul>
                      <li class="active">
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
                      <li class="btn-cta">
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
            class="fh5co-cover"
            style={{ marginBottom: "0px!important" }}
            role="banner"
            style={{ backgroundImage: 'url("assets/images/img_bg_1.jpg")' }}
            data-stellar-background-ratio="0.5"
          >
            <div class="overlay"></div>
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center">
                  <div class="display-t">
                    <div
                      class="display-tc animate-box"
                      data-animate-effect="fadeIn"
                    >
                      <h3 style={{ color: "#fff" }}>
                        Find your{" "}
                        <span style={{ color: "rgb(255, 54, 54)" }}>
                          SOULMATE{" "}
                        </span>{" "}
                        with ease with us
                      </h3>

                      <div class="row">
                        <div class="col-md-4">
                          <input
                            style={{
                              marginTop: "7px",
                              backgroundColor: "#fff",
                              borderRadius: "20px"
                            }}
                            placeholder="Location"
                            type="text"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            style={{
                              marginTop: "7px",
                              backgroundColor: "#fff",
                              borderRadius: "20px"
                            }}
                            placeholder="Age"
                            type="text"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            style={{
                              marginTop: "7px",
                              backgroundColor: "#fff",
                              borderRadius: "20px"
                            }}
                            placeholder="Date"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <br />
                      <p>
                        <a
                          style={{ backgroundColor: "rgb(255, 54, 54)" }}
                          class="btn btn-primary btn-lg popup-vimeo "
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
