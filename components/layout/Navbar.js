import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import clinicare from "../../assets/img/heading.png";
import "../../assets/CSS/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <div className="nav-content">
            <Link to="/" className="brand-picture left ">
              <img className="" src={clinicare} />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
