import React from "react";
import logo from "../../images/tw-logo.png";
import "./header.css";

const constructMenu = links => {
  return (
    <>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        {links.map(item => (
          <li key={item}>
            <a href={"#" + item}>{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Header = ({ title, campaignDate, links }) => {
  return (
    <section className="top-nav">
      <img src={logo} className="headerLogo" alt="ThoughtWorks logo" />
      <div style={{ display: "inline" }}>
        {title && <h3>{title}</h3>}
        {campaignDate && <h4>{campaignDate}</h4>}
      </div>
      {links && constructMenu(links)}
    </section>
  );
};

export default Header;
