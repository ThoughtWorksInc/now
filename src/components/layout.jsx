import React from "react";
import SiteHeader from "./header/header";
import Helmet from "react-helmet";
import "./layout.css";

const Layout = ({ title, subTitle, description, children, menuEntries }) => (
  <div>
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" content={description} />
    </Helmet>
    <SiteHeader title={title} campaignDate={subTitle} links={menuEntries} />
    <div className="container">{children}</div>
  </div>
);

export default Layout;
