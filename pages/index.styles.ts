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
  padding: 0 ${rem(30)};
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

const InfoSubtext = styled.h4`
  margin: ${rem(40)} 0 20px;
  padding-bottom: 20px;
  text-align: right;
  letter-spacing: 1px;
  line-height: ${rem(24)};
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 500;
`;

const DaysToGo = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
`;

export { MarriedNames, WelcomeTile, InfoSubtext, DaysToGo };
