import { SvgIcon } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Signin.css";
export class Signin extends Component {
  render() {
    const handleClick = (e) => {
      e.target.Component = { VisibilityOff };
    };
    return (
      <div className="container signin">
        <div className="row center ">
          <form className="col s12 center">
            <h5 className="grey-text text-darken-3 center">Member Login</h5>
            <div className="signin-content">
              <div className="row">
                <div className="icon col s1">
                  <i className="material-icons grey-text  small input-icon">
                    person
                  </i>
                </div>
                <div className="input-field col s10">
                  <input placeholder="Username" id="username" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="icon col s1">
                  <i className="material-icons grey-text small input-icon">
                    lock
                  </i>
                </div>
                <div className="input-field col s10">
                  <input placeholder="Password" id="password" type="password" />
                </div>
                <div className="input-field col s1">
                  <SvgIcon
                    onClick={handleClick}
                    component={Visibility}
                    style={{ fontSize: "20px" }}
                    className="visibility grey-text "
                  />
                  <SvgIcon
                    onClick={handleClick}
                    component={VisibilityOff}
                    style={{ fontSize: "20px" }}
                    className="visibility grey-text "
                  />
                </div>
              </div>
              <div className="row">
                <p className="col s12 center">
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span className="label-override-default-materialize">
                      Remember me
                    </span>
                  </label>
                </p>
              </div>
              <div className="center">
                <button className="signin-btn btn grey darken-3 z-depth-0">
                  Login
                </button>
              </div>
              <div className="row signin-links">
                <div className="center col s12">
                  Forgot password? <Link to=""> Click here!</Link>
                </div>
              </div>
              <div className="row">
                <div className="col s12 center signin-links">
                  Don't have an account? <Link to=""> Click here!</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Signin;
