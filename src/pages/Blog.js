import React, { Component } from "react";
import Navbar from "../components/Navbar";

class Blog extends Component {
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
        <h1>Blog</h1>
      </div>
    );
  }
}

export default Blog;
