import { rem } from "polished";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${rem(56)};
  font-weight: 500;
  letter-spacing: -1.5px;
  margin: ${rem(0)} 0 ${rem(16)};
`;

const PageHeading: React.FC = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default PageHeading;
