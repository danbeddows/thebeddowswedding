import { rem } from "polished";
import styled from "styled-components";

const HotelContainer = styled.div`
  width: 100%;
  margin: 0 10px 40px 0px;
  border-radius: 3px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    width: 440px;
    margin: 0 10px 40px 0px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    overflow: hidden;
  }
`;

const HotelImage = styled.img`
  max-width: 100%; // 876px by 582px
  aspect-ratio: 876 / 582;
`;

const HotelHeader = styled.div`
  margin-top: 12px;
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

const HotelDescription = styled.p`
  margin-bottom: 22px;
  padding: 0 22px;
  font-size: ${rem(15)};
  line-height: 1.5;
`;

const HotelPriceEstimate = styled.p`
  width: 84px;
  padding: 5px 18px 0;
`;

const PriceEstimateActive = styled.span`
  color: #444;
`;

const PriceEstimateDisabled = styled.span`
  color: #ccc;
`;

const HotelLinkContainer = styled.div`
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

const HotelLink = styled.a`
  display: block;
  padding: 16px 18px;
  color: var(--dark-blue);
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`;

const HotelBookingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 8px;
  gap: 6px;
  background: #f5f5f5;
`;

const BookingLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 10px;
  flex: 1 1 auto;
  height: 47px;
  background: #fff;

  &:hover {
    background: #fafafa;
  }
`;

const BookingLink = styled.a`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  HotelContainer,
  HotelLinkContainer,
  HotelImage,
  HotelHeader,
  HotelName,
  HotelDescription,
  HotelPriceEstimate,
  HotelLink,
  HotelBookingContainer,
  BookingLinkContainer,
  BookingLink,
  PriceEstimateActive,
  PriceEstimateDisabled,
};
