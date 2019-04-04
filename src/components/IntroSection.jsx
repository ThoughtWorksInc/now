import React from "react";
import styled from "@emotion/styled";
import SectionContainer from "./SectionContainer";

const IntroContainer = styled(SectionContainer)`
  & h1 {
    font-size: 4.5rem;
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
