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

const OurNames = styled.h2`
  font-family: "euphoria";
  font-size: ${rem(54)};
  margin: 0;
`;

const InfoSubtext = styled.h4`
  margin: ${rem(10)} 0 0;
  text-align: center;
  letter-spacing: 1px;
  line-height: ${rem(24)};
  text-transform: uppercase;
  font-size: ${rem(14)};
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${rem(40)};
`;

const HeaderLinkStyle = styled.a`
  text-decoration: none;
  color: #000;
  margin: 0 ${rem(16)};
  font-size: ${rem(18)};
`;

export {
  HeaderWrapper,
  LinkWrapper,
  HeaderLinkStyle,
  InfoWrapper,
  OurNames,
  InfoSubtext,
};
