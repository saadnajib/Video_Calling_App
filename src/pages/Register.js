import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <div>
        <form action="action_page.php">
          <div className="container">
            <h1>Meet, Chat And Fall In Love</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="email">
              <b>Email</b>
            </label>
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

            <label for="psw">
              <b>Password</b>
            </label>
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

            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
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

            <div className="">
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

            <br />

            <div className="">
              <label for="looking-for">
                <b>Looking for</b>
              </label>
              <br />
              <input type="radio" id="male" name="gender" value="male" />
              <label
                for="male"
                style={{ paddingLeft: "4px", paddingRight: "15px" }}
              >
                Male
              </label>

              <input type="radio" id="female" name="gender" value="female" />
              <label
                for="female"
                style={{ paddingLeft: "4px", paddingRight: "15px" }}
              >
                Female
              </label>
            </div>
            <hr />

            <button type="submit" className="registerbtn">
              START NOW
            </button>
          </div>

          <div className="container signin">
            <p>
              Already have an account? <a href="#">Sign in</a>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
