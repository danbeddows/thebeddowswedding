import { cssVar, lighten, rem } from "polished";
import styled, { css } from "styled-components";

interface HeaderWrapperProps {
  hasBackground: boolean;
}

const HeaderWrapper = styled.div<HeaderWrapperProps>`
  position: absolute;
  top: 0px;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(20)} ${rem(30)} ${rem(20)} ${rem(20)};

  ${(props) =>
    props.hasBackground &&
    css`
      background: rgba(255, 255, 255, 0.7);
    `};

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    padding: ${rem(20)} ${rem(40)};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OurNames = styled.a`
  font-family: "Roboto";
  font-weight: 400;
  font-size: ${rem(26)};
  margin: 0;
  text-decoration: none;
  color: #000;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    font-size: ${rem(48)};
  }
`;

const DesktopLinkWrapper = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const MobileLinkWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: none;
  }
`;

interface MobileLinksProps {
  visible: boolean;
}

const MobileLinks = styled.div<MobileLinksProps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-blue);
  top: -20px;
  left: 0;
  z-index: 1010;
  margin-top: -100vh;
  transition: margin-top 0.6s;
  transition-timing-function: ease;

  ${(props) =>
    props.visible &&
    css`
      margin-top: 0px;
    `}
`;

const MobileMenuButtonContainer = styled.div`
  position: fixed;
  top: 28px;
  right: 30px;
  z-index: 1015;
`;

interface DesktopHeaderLinkProps {
  selected?: boolean;
}
const headerLinkColour = String(cssVar("--green", "#9fbfB0"));
const HeaderLinkStyle = styled.a<DesktopHeaderLinkProps>`
  text-decoration: none;
  margin: ${rem(12)};
  font-size: ${rem(20)};
  font-weight: 500;
  text-transform: uppercase;
  color: var(--black);
  transition: 0.1s color;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    color: ${(props) => (props.selected ? "var(--dark-blue)" : "var(--black)")};
    margin: 0 ${rem(16)};
    font-size: ${rem(18)};
  }

  &:hover {
    color: var(--dark-blue);
  }
`;

export {
  HeaderWrapper,
  DesktopLinkWrapper,
  HeaderLinkStyle,
  InfoWrapper,
  OurNames,
  MobileLinkWrapper,
  MobileLinks,
  MobileMenuButtonContainer,
};
