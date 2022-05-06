import { rem } from "polished";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: "euphoria";
  font-size: ${rem(68)};
  margin-top: ${rem(0)};
`;

const PageHeading: React.FC = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default PageHeading;
