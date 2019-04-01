import React from "react";
import Header from "./header/header";
import "./layout.css";

const links = [
  { target: "about", name: "About" },
  { target: "schedule", name: "Schedule" },
  { target: "speakers", name: "Speakers" },
  { target: "Register", name: "Register" },
  { target: "venue", name: "Venue" }
];

const Layout = ({ children }) => (
  <div className="site-layout">
    <Header title="NOW Germany" campaignDate="21 May 2019" links={links} />
    <div className="container">
      <h1>This is my section</h1>
      {children}
    </div>
    <footer>This is my footer</footer>
  </div>
);

export default Layout;
