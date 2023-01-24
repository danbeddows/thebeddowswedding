import { rem } from "polished";
import styled from "styled-components";

export const WelcomeTile = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent url("/img/pages/landing/welcome-mobile.jpg") no-repeat;
  background-position: top left;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 ${rem(30)};

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    background: transparent url("/img/pages/landing/welcome-desktop.jpg")
      no-repeat;
    background-position: center;
    align-items: flex-end;
    justify-content: center;
    background-size: cover;
  }

  @media (min-width: ${(props) => props.theme.bp.desktopLarge}) {
    background: transparent url("/img/pages/landing/welcome-desktop.jpg")
      no-repeat;
    background-position: center;
    align-items: flex-end;
    justify-content: center;
    background-size: cover;
  }
`;

export const MarriedNames = styled.h1`
  font-family: "script-mt";
  font-weight: 400;
  color: #1a1a1a;
  font-size: ${rem(100)};
  line-height: ${rem(53)};
  margin: 0;
  text-align: right;
  display: none;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: block;
    font-size: ${rem(82)};
    line-height: ${rem(106)};
  }
`;

export const InfoSubtext = styled.h4`
  display: block;
  text-align: center;
  letter-spacing: 1px;
  line-height: ${rem(24)};
  text-transform: uppercase;
  font-size: ${rem(20)};
  font-weight: 500;
  text-align: left;
  margin-top: 220px;
  display: block;
  margin-bottom: 200px;
  text-align: left;
  letter-spacing: 1px;
  color: #000;
  text-shadow: 0.5px 0.5px #999;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: ${rem(10)} 0 20px;
    font-size: ${rem(18)};
    line-height: ${rem(24)};
    text-align: right;
    color: #000;
  }
`;

export const SubtextMobile = styled.span`
  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: none;
  }
`;

export const SubtextDesktop = styled.span`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: inline;
  }
`;

export const DaysToGo = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
`;

export const MoreInfoSoon = styled.div`
  margin-top: 30px;
`;
