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
  display: flex;
  flex-direction: row
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
  font-size: 0.875rem;
  justify-content: flex-end;
  margin: 0;
  position: relative;
  z-index: 5;
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

const LogoLink = styled(NavLink)`
  border: 0;

  padding: 0;
  position: relative;

  z-index: 10;
`;

const Logo = styled("img")`
  padding: 0;
  position: absolute;
  width: 10vw;
  z-index: 2;
`;

const SiteHeader = ({ title, campaignDate, links }) => {
  return (
    <Header role="banner">
      <SkipToContent href="#" id="skip-navigation">
        Skip to Content
      </SkipToContent>
      <LogoLink to="/">
        <Logo
          src={logo}
          alt="ThoughtWorks presents: Network of Women"
          // This keeps the logo from flashing at full-width on fresh loads.
          // style={{ maxWidth: "42px" }}
        />
      </LogoLink>
      <Nav>
        {links.map(item => (
          <NavLink
            key={item}
            to={`/#${item}`}
            className="text-sharp"
            activeClassName="active"
          >
            {item}
          </NavLink>
        ))}
      </Nav>
    </Header>
  );
};

export default SiteHeader;
