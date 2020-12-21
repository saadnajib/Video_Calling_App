import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

class Call extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          id="fh5co-header"
          className="top-navbar"
          style={{ marginBottom: "0px!important" }}
          role="banner"
          style={{ backgroundColor: "rgb(104,24,9)" }}
          data-stellar-background-ratio="0.5"
        >
          <Navbar />
        </div>

        <div className="fh5co-explore fh5co-explore1">
          <div className="container">
            <div className="row">
              <div className="col-md-6  animate-box" style={{ float: "left" }}>
                <img
                  className="img-responsive"
                  src="assets/images/work.png"
                  alt="work"
                />
              </div>
              <div className="col-md-6  animate-box" style={{ float: "right" }}>
                <img
                  className="img-responsive"
                  src="assets/images/work.png"
                  alt="work"
                />
              </div>
              <div className="row col-md-6  animate-box">
                <div
                  className="col-md-4  animate-box"
                  style={{ float: "left", marginTop: "20px" }}
                >
                  <p>
                    <a
                      className="btn btn-primary btn-lg popup-vimeo btn-video"
                      href="#"
                    >
                      <i class="icon-video"></i> Start Call
                    </a>
                  </p>
                </div>
                <div
                  className="col-md-4  animate-box"
                  style={{ float: "left", marginTop: "20px" }}
                >
                  <p>
                    <a
                      className="btn btn-danger btn-lg popup-vimeo btn-video"
                      href="#"
                    >
                      <i class="icon-video"></i> End
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Call;
