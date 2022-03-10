import { rem } from "polished";
import { Theme } from "src/common/themes/global";
import Button from "src/components/Button";
import Input from "src/components/Input";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding-right: ${rem(20)};

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    padding-right: ${rem(40)};
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
    font-size: ${rem(26)};
    margin: ${rem(40)} 0 0;
  }
`;

const MarriedDate = styled.div`
  font-size: ${rem(18)};
  margin: ${rem(6)} 0 0;
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    font-size: ${rem(26)};
    margin: ${rem(10)} 0 0;
  }
`;

export { PageWrapper, MarriedNames, MarriedSubtext, MarriedDate };
