import React from "react";
import styled from "@emotion/styled";
import SectionContainer from "./SectionContainer";
import background from "../assets/images/welcome_image/first-main.jpg"
import backgroundipad from "../assets/images/welcome_image/first800x900.png"
import backgroundmobile from "../assets/images/welcome_image/first480x750.png"

const IntroContainer = styled(SectionContainer)`
  & h1 {
    font-size: 4.5rem;
  }
  
  & h1, h2 {
   color:white;
  }
  
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat ;
  
  @media (max-width: 800px) {
    background: url(${backgroundipad}) ;
  }
  @media (max-width: 480px) {
    background: url(${backgroundmobile}) ;
  }
`;

const IntroSection = ({ html, index }) => (
  <IntroContainer
    id="main"
    index={index}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
export default IntroSection;
