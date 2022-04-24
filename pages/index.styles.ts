import { rem } from "polished";
import { Theme } from "src/styles/global";
import styled from "styled-components";

const WelcomeTile = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent url("/img/pages/landing/welcome-mobile.jpg") no-repeat;
  background-position: right center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 ${rem(30)};

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    background: transparent url("/img/pages/landing/welcome-desktop.jpg")
      no-repeat;
    background-position: left center;
    align-items: flex-end;
    justify-content: center;
  }
`;

const MarriedNames = styled.h1`
  font-size: ${rem(100)};
  line-height: ${rem(53)};
  margin: 0;
  font-family: "euphoria";
  text-align: right;
  display: none;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: block;
    font-size: ${rem(200)};
    line-height: ${rem(106)};
  }
`;

const InfoSubtext = styled.h4`
  display: block;
  text-align: center;
  letter-spacing: 1px;
  line-height: ${rem(24)};
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 500;
  text-align: left;
  margin-top: 200px;
  display: block;
  margin-bottom: 200px;
  text-align: left;
  letter-spacing: 1px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: ${rem(40)} 0 20px;
    font-size: ${rem(14)};
    line-height: ${rem(24)};
    text-align: right;
  }
`;

const SubtextMobile = styled.span`
  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;

const SubtextDesktop = styled.span`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: inline;
  }
`;

const DaysToGo = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
`;

export {
  MarriedNames,
  WelcomeTile,
  InfoSubtext,
  DaysToGo,
  SubtextMobile,
  SubtextDesktop,
};
