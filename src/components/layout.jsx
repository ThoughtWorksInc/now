import React from "react";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <div className="site-layout">
    <Header />
    <div className="container">
      <h1>This is my section</h1>
      {children}
    </div>
    <footer>This is my footer</footer>
  </div>
);

export default Layout;
