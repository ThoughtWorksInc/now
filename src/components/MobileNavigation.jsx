import React from "react";

import styled from "@emotion/styled";
import { Link } from "gatsby";
import colors from "../themes/colors";

import CalendarIcon from "../assets/icons/calendar.svg";
import RegisterIcon from "../assets/icons/edit.svg";
import HomeIcon from "../assets/icons/home.svg";
import SpeakerIcon from "../assets/icons/woman.svg";
import LocationIcon from "../assets/icons/location.svg";
import BrokenIcon from "../assets/icons/dotted-box.svg";

const Footer = styled("footer")`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    left: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 1000;
    ::before,
    ::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      height: 1px;
      width: calc(100% - 30px);
      z-index: 1;
    }
    ::before {
      top: calc(100% - 1px);
    }
  }
`;

const Nav = styled("nav")`
  display: flex;
  grid-column-end: -1;
  font-size: 0.875rem;
  margin: 0;
  justify-content: space-evenly;
  z-index: 5;
`;

const NavLink = styled(Link)`
  border: 2px solid transparent;
  border-radius: 0;
  color: "black";
  font-weight: 900;
  font-size: x-small;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: calc(0.5rem - 2px) 0.25rem;
  text-decoration: none;
  text-transform: uppercase;
  transition-property: color;
  &.active {
    color: ${colors.primary};
  }
  &.hiddenSmall {
    display: none;
    @media (min-width: 414px) {
      display: inline-block;
    }
  }
  @media (min-width: 320px) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  :focus,
  :active,
  :hover {
    background-color: transparent;
    border-radius: 0;
    color: ${colors.primaryDark};
  }
  :focus {
    border-color: ${colors.darkest};
  }
`;

const findRelevantIcon = menuEntry => {
  switch (menuEntry.toUpperCase()) {
    case "LOCATION":
      return LocationIcon;

    case "ABOUT":
      return HomeIcon;

    case "SCHEDULE":
      return CalendarIcon;

    case "SPEAKERS":
      return SpeakerIcon;

    case "REGISTER":
      return RegisterIcon;
    default:
      return BrokenIcon;
  }
};

const MobileNavigation = ({ links }) => {
  return (
    <Footer role="banner">
      <Nav>
        {links.map(item => (
          <NavLink key={item} to={`/#${item}`} activeClassName="active">
            <img src={findRelevantIcon(item)} alt={item} />
            {item}
          </NavLink>
        ))}
      </Nav>
    </Footer>
  );
};

export default MobileNavigation;
