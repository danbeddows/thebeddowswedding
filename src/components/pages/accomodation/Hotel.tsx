import { faExternalLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookingLink,
  BookingLinkContainer,
  HotelBookingContainer,
  HotelContainer,
  HotelDescription,
  HotelHeader,
  HotelImage,
  HotelLink,
  HotelLinkContainer,
  HotelName,
  HotelPriceEstimate,
  PriceEstimateActive,
  PriceEstimateDisabled,
} from "./Hotel.styles";

interface BookingLink {
  type: string;
  url: string;
}

interface HotelProps {
  name: string;
  description: string;
  priceEstimate: number;
  link: {
    label: string;
    url: string;
  };
  bookingLinks: BookingLink[];
  image: string;
}

const Hotel: React.FC<HotelProps> = ({
  name,
  description,
  priceEstimate,
  link,
  bookingLinks,
  image,
}) => {
  return (
    <HotelContainer>
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
      <HotelLinkContainer>
        <HotelLink href={link.url} target="_blank">
          {link.label} <FontAwesomeIcon icon={faExternalLink} />
        </HotelLink>
      </HotelLinkContainer>
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
    </HotelContainer>
  );
};

export default Hotel;
