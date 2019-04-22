import styled from "@emotion/styled";
import colors from "../themes/colors";

const SectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${props =>
    (props.index == 0) ? "none" : (props.index && props.index % 2) === 0
        ? colors.sectionEven
        : colors.sectionOdd};
  color: ${colors.lightest};
  text-align: center;
`;

export default SectionContainer;
