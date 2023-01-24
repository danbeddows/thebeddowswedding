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
  link: {
    url: string;
  };
  image: string;
  appleMaps?: string;
  googleMaps?: string;
}

const Hotel: React.FC<HotelProps> = ({
  name,
  link,
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
        </HotelHeader>
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
      </HotelBottom>
    </HotelContainer>
  );
};

export default Hotel;
