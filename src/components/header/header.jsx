import React from "react";
import logo from "../../images/tw-logo.png";
import "./header.css";

const constructMenu = links => {
  return (
    <>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button" />
      </label>
      <ul class="menu">
        {links.map(item => (
          <li>
            <a key={item.target} href={"#" + item.target}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Header = ({ title, campaignDate, links }) => {
  return (
    <section class="top-nav">
      <img src={logo} className="headerLogo" alt="ThoughtWorks logo" />
      {title && <h3>{title}</h3>}
      {campaignDate && <h4>{campaignDate}</h4>}
      {links && constructMenu(links)}
    </section>
  );
};

export default Header;
