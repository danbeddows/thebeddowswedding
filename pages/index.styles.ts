import { rem } from "polished";
import { Theme } from "src/styles/global";
import styled from "styled-components";

const WelcomeTile = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent url("/img/pages/landing/welcomeBg.jpg") no-repeat left
    center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const InfoSubtext = styled.h4`
  margin: ${rem(10)} 0 20px;
  padding-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;
  line-height: ${rem(24)};
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 500;
`;

const DaysToGo = styled.div`
  font-weight: 300;
  font-weight: 400;
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding-right: ${rem(20)};

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
  }
`;

const MarriedNames = styled.h1`
  font-size: ${rem(100)};
  line-height: ${rem(53)};
  margin: 0;
  font-family: "euphoria";
  text-align: right;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    font-size: ${rem(200)};
    line-height: ${rem(106)};
  }
`;

const MarriedSubtext = styled.h2`
  font-size: ${rem(18)};
  margin: ${rem(24)} 0 0;
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    font-size: ${rem(30)};
    margin: ${rem(40)} 0 0;
  }
`;

const MarriedDate = styled.div`
  font-size: ${rem(14)};
  margin: ${rem(6)} 0 0;
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    font-size: ${rem(22)};
    margin: ${rem(10)} 0 0;
  }
`;

export {
  PageWrapper,
  MarriedNames,
  MarriedSubtext,
  MarriedDate,
  WelcomeTile,
  InfoSubtext,
  DaysToGo,
};
