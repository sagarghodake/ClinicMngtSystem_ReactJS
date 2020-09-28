import React, { Component } from "react";
import { SvgIcon } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";
import clinicare from "../../assets/img/heading.png";
import "../../assets/CSS/SignedOutLinks.css";
export class SignedOutLinks extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <Link to="/" className="brand-picture left ">
          <img className="" src={clinicare} />
        </Link>
        <ul className="right">
          <li className="socials-icon">
            <Link to="" className="grey-text text-darken-4">
              <SvgIcon
                className="nav__left__icon"
                component={Facebook}
                style={{ fontSize: "50px" }}
              />
            </Link>
          </li>
          <li className="socials-icon">
            <Link to="" className="grey-text text-darken-4">
              <SvgIcon
                className="nav__left__icon"
                component={Instagram}
                style={{ fontSize: "50px" }}
              />
            </Link>
          </li>
          <li className="socials-icon">
            <Link to="" className="grey-text text-darken-4">
              <SvgIcon
                className="nav__left__icon"
                component={Twitter}
                style={{ fontSize: "50px" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SignedOutLinks;
