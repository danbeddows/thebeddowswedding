import { rem } from "polished";
import styled from "styled-components";

export const VenueHero = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent url("/img/pages/venue/the-holford-estate.jpg")
    no-repeat;
  background-position: center bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 ${rem(30)};

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    background: transparent url("/img/pages/venue/the-holford-estate.jpg")
      no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: flex-end;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.bp.desktopLarge}) {
    background: transparent url("/img/pages/venue/the-holford-estate.jpg")
      no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const VenuePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    flex-direction: row;
  }
`;

export const VenueDetails = styled.div``;

export const VenueAddress = styled.div`
  font-size: ${rem(18)};
  line-height: 1.5;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    font-size: ${rem(20)};
  }
`;

export const MapButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.bp.desktopLarge}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const MapButtonLink = styled.a`
  color: #000;
  text-decoration: none;
`;

export const MapButton = styled.button`
  margin: 6px 6px 6px 0;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 16px;
  border: 1px solid #aeaeae;
  font-size: ${rem(16)};

  a {
  }

  img {
    height: 28px;
    padding-left: 4px;
  }

  &:hover {
    cursor: pointer;
    border-color: #7b7b7b;
  }
`;

export const VenueMap = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  width: 100%;
  height: 400px;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin-top: 0px;
    flex-direction: row;
    width: 500px;
    height: 400px;
  }

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin-top: 0px;
    flex-direction: row;
    width: 680px;
    height: 400px;
  }
`;
