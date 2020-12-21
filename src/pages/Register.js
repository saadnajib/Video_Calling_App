import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

class Register extends Component {
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
              <div className="col-md-8 col-md-push-5 animate-box">
                <img
                  className="img-responsive"
                  src="assets/images/work.png"
                  alt="work"
                />
              </div>
              <div className="col-md-4 col-md-pull-8 animate-box">
                <div className="">
                  <p>Meet, Chat And Fall In Love</p>
                  <h5>Please fill in this form to create an account.</h5>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    style={{
                      borderRadius: "10px"
                    }}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="psw"
                    style={{
                      borderRadius: "10px"
                    }}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    id="psw-repeat"
                    style={{
                      borderRadius: "10px"
                    }}
                    required
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <select
                        name="gender"
                        id="gender"
                        style={{
                          background: "#f1f1f1",
                          border: "solid #f1f1f1",
                          padding: "10px",
                          borderRadius: "10px"
                        }}
                      >
                        <option value="default">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="col-md-9" style={{ textAlign: "center" }}>
                      <div className="">
                        <label for="looking-for">
                          <b>Looking for</b>
                        </label>
                        <br />
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label
                          for="male"
                          style={{ paddingLeft: "4px", paddingRight: "15px" }}
                        >
                          Male
                        </label>

                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label
                          for="female"
                          style={{ paddingLeft: "4px", paddingRight: "15px" }}
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <p>
                    <a
                      className="btn btn-primary btn-lg popup-vimeo btn-video"
                      href="#"
                    >
                      <i class="icon-play"></i> Start Now
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

export default Register;
