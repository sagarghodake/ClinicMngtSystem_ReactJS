import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import profile from "../../assets/img/Profile.png";
import background from "../../assets/img/background.jpg";
import "../../assets/CSS/SignedInLinks.css";

export default class SignedInLinks extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var sidenav = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(sidenav, { inDuration: 350 });
      var sidecont = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(sidecont, { inDuration: 350 });
    });
  }
  render() {
    return (
      <div>
        <Link to="" data-target="slide-out" className="sidenav-trigger ">
          <i className="material-icons grey-text">menu</i>
        </Link>
        {/**
         * This side bar will be shown when responsive
         */}
        <ul id="slide-out" className="sidenav white-text">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={background} />
              </div>
              <Link to="">
                <img className="circle" src={profile} />
              </Link>
              <Link to="">
                <span className="white-text name">Taki</span>
              </Link>
              <Link to="">
                <span className="white-text email">Email@gmail.com</span>
              </Link>
            </div>
          </li>
          <li>
            <Link to="" className="subheader">
              Home
            </Link>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                dashboard
              </i>
              Dashboard
            </Link>
          </li>
          <Link to="" className="subheader">
            Manage the patients
          </Link>
          <li className="divider"></li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                tag_faces
              </i>
              Patients
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                date_range
              </i>
              Appointments
            </Link>
          </li>
          <Link to="" className="subheader">
            Finance
          </Link>
          <li className="divider"></li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                view_list
              </i>
              Inventory
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                insert_chart
              </i>
              Expenses
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                print
              </i>
              Medical Certificate
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                credit_card
              </i>
              Finance Reports
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                build
              </i>
              Backup and table setup
            </Link>
          </li>
        </ul>
        {/**
         * This side bar will be shown when active and hidden when mobile
         */}
        <ul className="sidenav sidenav-show white-text">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={background} />
              </div>
              <Link to="">
                <img className="circle" src={profile} />
              </Link>
              <Link to="">
                <span className="white-text name">Taki</span>
              </Link>
              <Link to="">
                <span className="white-text email">Email@gmail.com</span>
              </Link>
            </div>
          </li>
          <li>
            <Link to="" className="subheader">
              Home
            </Link>
            <Link>
              <i style={{ fontSize: "35px" }} className="material-icons">
                dashboard
              </i>
              Dashboard
            </Link>
          </li>
          <Link to="" className="subheader">
            Manage the patients
          </Link>
          <li className="divider"></li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                tag_faces
              </i>
              Patients
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                date_range
              </i>
              Appointments
            </Link>
          </li>
          <Link to="" className="subheader">
            Finance
          </Link>
          <li className="divider"></li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                view_list
              </i>
              Inventory
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                insert_chart
              </i>
              Expenses
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                print
              </i>
              Medical Certificate
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                credit_card
              </i>
              Finance Reports
            </Link>
          </li>
          <li>
            <Link to="">
              <i style={{ fontSize: "35px" }} className="material-icons">
                build
              </i>
              Backup and table setup
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
