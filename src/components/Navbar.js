import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Navbar;
