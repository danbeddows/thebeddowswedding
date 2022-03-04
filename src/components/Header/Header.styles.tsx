import { rem } from "polished";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  max-width: 1120px;
  margin: ${rem(30)} auto ${rem(50)};
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

const InfoSubtext = styled.h4`
  margin: ${rem(10)} 0 20px;
  border-bottom: 1px solid #eaeaea;
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

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface HeaderLinkProps {
  selected?: boolean;
}
const HeaderLinkStyle = styled.a<HeaderLinkProps>`
  text-decoration: none;

  margin: 0 ${rem(16)};
  font-size: ${rem(18)};
  font-weight: 500;

  color: ${(props) => (props.selected ? "var(--green)" : "#000")};
`;

export {
  HeaderWrapper,
  LinkWrapper,
  HeaderLinkStyle,
  InfoWrapper,
  OurNames,
  InfoSubtext,
  DaysToGo,
};
