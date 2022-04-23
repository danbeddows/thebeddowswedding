import { cssVar, lighten, rem } from "polished";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: absolute;
  top: 20px;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem(40)};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OurNames = styled.a`
  font-family: "euphoria";
  font-size: ${rem(48)};
  margin: 0;
  text-decoration: none;
  color: #000;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface HeaderLinkProps {
  selected?: boolean;
}
const headerLinkColour = String(cssVar("--green", "#9fbfB0"));
const HeaderLinkStyle = styled.a<HeaderLinkProps>`
  text-decoration: none;
  margin: 0 ${rem(16)};
  font-size: ${rem(18)};
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => (props.selected ? "var(--black)" : "#444")};
  transition: 0.1s color;

  &:hover {
    color: var(--black);
  }
`;

export { HeaderWrapper, LinkWrapper, HeaderLinkStyle, InfoWrapper, OurNames };
