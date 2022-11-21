import { rem } from "polished";
import styled from "styled-components";

const StyledH2 = styled.h2`
  margin: ${rem(0)} 0 ${rem(20)};
  font-size: ${rem(28)};
  font-weight: 400;
  letter-spacing: -1px;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: ${rem(0)} 0 ${rem(16)};
    font-size: ${rem(34)};
  }
`;

const Subheading: React.FC = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export default Subheading;
