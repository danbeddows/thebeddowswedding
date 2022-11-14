import { rem } from "polished";
import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: ${rem(34)};
  font-weight: 400;
  letter-spacing: -1px;
  margin: ${rem(0)} 0 ${rem(20)};
`;

const Subheading: React.FC = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export default Subheading;
