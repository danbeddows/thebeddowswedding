import { rem } from "polished";
import styled from "styled-components";

export const GiftsHeroArrow = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  padding-bottom: 18px;
  font-size: 32px;
`;

export const GiftsHero = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent url("/img/pages/gifts/honeymoon.jpg") no-repeat;
  background-position: center bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 ${rem(30)};

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    background: transparent url("/img/pages/gifts/honeymoon.jpg") no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: flex-end;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.bp.desktopLarge}) {
    background: transparent url("/img/pages/gifts/honeymoon.jpg") no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const GiftPage = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 140px 40px;
  }

  > * {
    margin-bottom: ${rem(20)};
  }
`;
