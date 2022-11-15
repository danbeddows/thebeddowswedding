import { rem } from "polished";
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin: ${rem(0)} 0 ${rem(12)};
  font-size: ${rem(42)};
  font-weight: 500;
  letter-spacing: -1.5px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: ${rem(0)} 0 ${rem(16)};
    font-size: ${rem(56)};
  }
`;

const PageHeading: React.FC = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default PageHeading;
