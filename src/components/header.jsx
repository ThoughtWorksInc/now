import React from "react";
import logo from "../images/tw-logo.png";
import { Link } from "gatsby";
import headerStyles from "./header.module.css";

const Header = props => (
  <header role="banner" className={headerStyles.header}>
    <img src={logo} />
    This is my new header
    <nav>
      <Link key="about" to="/about">
        About
      </Link>
      <Link key="schedule" to="/schedule">
        Schedule
      </Link>
      <Link key="speaker" to="/speakers">
        Speakers
      </Link>
    </nav>
  </header>
);

export default Header;
