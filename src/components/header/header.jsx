import React from "react";
import logo from "../../images/tw-logo.png";
import "./header.css";

class MobileNavContainer extends React.Component {
  state = {
    showExpandedMenu: true
  };

  toggleMenu = () => {
    this.setState({ showExpandedMenu: !this.state.showExpandedMenu });
  };

  render() {
    return (
      <>
        <input
          id="menu-toggle"
          type="checkbox"
          onClick={() => this.toggleMenu()}
        />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button" />
        </label>

        {this.props.children}
      </>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <section class="top-nav">
        <img src={logo} className="headerLogo" />
        <MobileNavContainer>
          <ul class="menu">
            <li>
              <a key="about" href="#about">
                About
              </a>
            </li>
            <li>
              <a key="schedule" href="#schedule">
                Schedule
              </a>
            </li>
            <li>
              <a key="speakers" href="#speakers">
                Speakers
              </a>
            </li>
          </ul>
        </MobileNavContainer>
      </section>
    );
  }
}

export default Header;
