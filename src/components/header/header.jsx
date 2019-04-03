import React from "react";
import logo from "../../images/tw-logo.png";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import colors from "../../themes/colors";

const Header = styled("header")`
  background-color: white;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  display: grid;
  align-items: center;
  align-contents: center;
  grid-template-columns: repeat(3, 1fr);
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
`;

const SkipToContent = styled("a")`
  transition: none;
  clip: rect(0 0 0 0);
  overflow: hidden;
  position: absolute;
  height: 1px;
  width: 1px;
  :focus,
  :active,
  :hover {
    clip: auto;
    width: auto;
    height: auto;
    border-radius: 0;
    padding: 0.5rem 1rem;
    z-index: 5000;
  }

  ::before {
    top: calc(100% - 1px);
    background-color: ${colors.primary};
  }
  ::after {
    top: 100%;
    background-color: ${colors.grayAlpha};
  }
`;

const Nav = styled("nav")`
  display: flex;
  grid-column-end: -1;
  font-size: 0.875rem;
  margin: 0;
  justify-content: end;
  float: right;
  z-index: 5;
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  border: 2px solid transparent;
  border-radius: 0;
  color: "black";
  font-weight: 900;
  line-height: 1.25;
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

const LogoLink = styled("a")`
  display: flex;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 0;
  padding: calc(0.5rem - 2px) 0.25rem;
  z-index: 10;
  grid-column-end: -2;
`;

const Logo = styled("img")`
  padding: 0;
  width: 200px;
  z-index: 2;
`;

const SiteHeader = ({ title, campaignDate, links }) => {
  return (
    <Header role="banner">
      <SkipToContent href="#" id="skip-navigation">
        Skip to Content
      </SkipToContent>
      <NavLink to="/">{title}</NavLink>
      <LogoLink href="https://www.thoughtworks.com" rel="noopener noreferrer">
        <Logo
          src={logo}
          alt="ThoughtWorks presents: Network of Women"
          // This keeps the logo from flashing at full-width on fresh loads.
          style={{ maxWidth: "200px" }}
        />
      </LogoLink>
      <Nav>
        {links.map(item => (
          <NavLink key={item} to={`/#${item}`} activeClassName="active">
            {item}
          </NavLink>
        ))}
      </Nav>
    </Header>
  );
};

export default SiteHeader;
