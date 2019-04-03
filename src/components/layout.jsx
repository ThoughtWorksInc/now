import React from "react";
import SiteHeader from "./header/header";
import "./layout.css";

const Layout = ({ children, menuEntries }) => (
  <div>
    <SiteHeader
      title="N.O.W. Germany"
      campaignDate="9.May.2019"
      links={menuEntries}
    />
    <div className="container">{children}</div>
  </div>
);

export default Layout;
