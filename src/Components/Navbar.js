import React, { Component } from "react";
import Link from "./link";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link id="section1" name="Section1" />
            </li>
            <li className="nav-item">
              <Link id="section2" name="Section2" />
            </li>
            <li className="nav-item">
              <Link id="section3" name="Section3" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
