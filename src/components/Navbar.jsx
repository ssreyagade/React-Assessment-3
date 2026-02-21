import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", isSignedIn: false };
  }

  handleChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  goToHome = () => {
    window.location.href = "/";
  };

  handleSignIn = () => {
    this.setState({ isSignedIn: true });
    alert("Signed In Successfully!");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <h2 className="me-3">Student Course Portal</h2>

          <NavLink
            to="/"
            className={({ isActive }) =>
              "btn btn-primary me-2" + (isActive ? " active" : "")
            }
            style={{ minWidth: "100px" }} // ensures consistent width
          >
            <i className="bi bi-house-door-fill me-1"></i> Home
          </NavLink>

          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchText}
            onChange={this.handleChange}
            className="form-control me-2"
            style={{ maxWidth: "200px" }}
          />

          <button
            className="btn btn-secondary me-2"
            onClick={this.goToHome}
            style={{ minWidth: "120px" }}
          >
            <i className="bi bi-arrow-left-circle me-1"></i> Go To Home
          </button>

          {!this.state.isSignedIn ? (
            <button
              className="btn btn-success"
              onClick={this.handleSignIn}
              style={{ minWidth: "120px" }}
            >
              <i className="bi bi-person-check-fill me-1"></i> Sign In
            </button>
          ) : (
            <span
              className="text-success fw-bold ms-2"
              style={{ minWidth: "120px", display: "inline-block" }}
            >
              Welcome, Student!
            </span>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
