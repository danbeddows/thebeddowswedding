import styled from "styled-components";

const HeaderWrapper = styled.div`
  max-width: 1120px;
  margin: 30px auto 50px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OurNames = styled.h2`
  font-family: "euphoria";
  font-size: 54px;
  margin: 0;
`;

const InfoSubtext = styled.h4`
  margin: 20px 0 0;
  text-align: center;
  letter-spacing: 1px;
  line-height: 24px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const HeaderLinkStyle = styled.a`
  text-decoration: none;
  color: #000;
  margin: 0 16px;
  font-size: 18px;
`;

export {
  HeaderWrapper,
  LinkWrapper,
  HeaderLinkStyle,
  InfoWrapper,
  OurNames,
  InfoSubtext,
};
