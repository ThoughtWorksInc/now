import React from "react";
import twLogo from "../images/tw-logo-white.png";
import SingleColumnContainer from "./SingleColumnContainer";
import IntroStyles from "./intro.module.css";

const IntroSection = ({ html }) => (
  <SingleColumnContainer id="main">
    <a
      href="https://www.thoughtworks.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img style={{ height: "4rem" }} src={twLogo} alt="ThoughtWorks logo" />
    </a>
    <div
      className={IntroStyles.intro}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </SingleColumnContainer>
);

export default IntroSection;
