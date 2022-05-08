import { faExternalLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Action,
  ActionContainer,
  BookingLink,
  BookingLinkContainer,
  HotelBookingContainer,
  HotelBookingHeader,
  HotelBottom,
  HotelContainer,
  HotelDescription,
  HotelHeader,
  HotelImage,
  HotelLink,
  HotelName,
  HotelPriceEstimate,
  HotelTop,
  PriceEstimateActive,
  PriceEstimateDisabled,
} from "./Hotel.styles";

interface BookingLink {
  type: "booking.com" | "expedia" | "hotels.com";
  url: string;
}

export interface HotelProps {
  name: string;
  description: string;
  priceEstimate: number;
  link: {
    url: string;
  };
  bookingLinks: BookingLink[];
  image: string;
  appleMaps?: string;
  googleMaps?: string;
}

const Hotel: React.FC<HotelProps> = ({
  name,
  description,
  priceEstimate,
  link,
  bookingLinks,
  image,
  appleMaps,
  googleMaps,
}) => {
  return (
    <HotelContainer>
      <HotelTop>
        <HotelImage src={image} />
        <HotelHeader>
          <HotelName>{name}</HotelName>
          <HotelPriceEstimate>
            {Array.apply(null, Array(4)).map((e, index) => {
              if (index < priceEstimate) {
                return <PriceEstimateActive key={index}>£</PriceEstimateActive>;
              } else {
                return (
                  <PriceEstimateDisabled key={index}>£</PriceEstimateDisabled>
                );
              }
            })}
          </HotelPriceEstimate>
        </HotelHeader>
        <HotelDescription>{description}</HotelDescription>
      </HotelTop>
      <HotelBottom>
        <ActionContainer>
          <Action>
            <HotelLink href={link.url} target="_blank">
              Website&nbsp;
              <FontAwesomeIcon icon={faExternalLink} />
            </HotelLink>
          </Action>
          {appleMaps && (
            <Action>
              <HotelLink href={appleMaps} target="_blank">
                Open <img src="/img/pages/accommodation/apple-maps.jpg" />
              </HotelLink>
            </Action>
          )}
          {googleMaps && (
            <Action>
              <HotelLink href={googleMaps} target="_blank">
                Open <img src="/img/pages/accommodation/google-maps.png" />
              </HotelLink>
            </Action>
          )}
        </ActionContainer>
        <HotelBookingHeader>Book on:</HotelBookingHeader>
        <HotelBookingContainer>
          {bookingLinks.map((link, index) => {
            return (
              <BookingLinkContainer>
                <BookingLink href={link.url} target="_blank">
                  {link.type === "booking.com" && (
                    <img
                      src="/img/pages/accommodation/travelAgents/booking.com.svg"
                      style={{ maxWidth: 88 }}
                    />
                  )}

                  {link.type === "hotels.com" && (
                    <img
                      src="/img/pages/accommodation/travelAgents/hotels.com.svg"
                      width={100}
                    />
                  )}

                  {link.type === "expedia" && (
                    <img
                      src="/img/pages/accommodation/travelAgents/expedia.svg"
                      width={74}
                    />
                  )}
                </BookingLink>
              </BookingLinkContainer>
            );
          })}
        </HotelBookingContainer>
      </HotelBottom>
    </HotelContainer>
  );
};

export default Hotel;
