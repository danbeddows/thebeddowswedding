import { rem } from "polished";
import styled from "styled-components";

const HotelContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    width: 440px;
    margin: 0 10px 40px 0px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    overflow: hidden;
  }
`;

const HotelTop = styled.div``;

const HotelBottom = styled.div``;

const HotelImage = styled.img`
  max-width: 100%; // 876px by 582px
  aspect-ratio: 876 / 582;
`;

const HotelHeader = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const HotelName = styled.h2`
  font-size: ${rem(20)};
  font-weight: 500;
  padding: 0 22px;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  > * {
    border-bottom: 1px solid #e6e6e6;

    &:last-child {
      border-bottom: 0;
    }
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    flex-direction: row;
    height: 56px;

    > * {
      border-bottom: 0;
      border-right: 1px solid #e6e6e6;

      &:last-child {
        border-right: 0;
      }
    }
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0px;
  font-size: ${rem(14)};
  width: 100%;

  img {
    margin-left: 3px;
    max-height: 24px;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    width: auto;
    height: 56px;
  }
`;

const HotelLink = styled.a`
  width: 100%;
  display: block;
  padding: 16px 18px;
  color: var(--dark-blue);
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export {
  HotelContainer,
  ActionContainer,
  Action,
  HotelImage,
  HotelHeader,
  HotelName,
  HotelLink,
  HotelTop,
  HotelBottom,
};
