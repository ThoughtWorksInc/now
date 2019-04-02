import React from "react";
import Header from "./header/header";
import "./layout.css";

const Layout = ({ children, menuEntries }) => (
  <div className="site-layout">
    <Header title="N.O.W. Germany" links={menuEntries} />
    <div className="container">{children}</div>
    <footer>This is my footer</footer>
  </div>
);

export default Layout;
