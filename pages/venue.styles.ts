import { rem } from "polished";
import styled from "styled-components";

export const VenueTile = styled.section`
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

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
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
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: 1200px;
    margin: 60px auto;
  }
`;

export const VenueOverview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    flex-direction: row;
  }
`;

export const VenueDetails = styled.div``;

export const VenueAddress = styled.div`
  font-size: ${rem(18)};
  line-height: 1.5;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    font-size: ${rem(20)};
  }
`;

export const VenueMap = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  width: 100%;
  height: 400px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin-top: 0px;
    flex-direction: row;
    width: 700px;
    height: 400px;
  }
`;
