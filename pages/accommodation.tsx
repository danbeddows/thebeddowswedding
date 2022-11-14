import accomList from "src/accommodationList";
import Hotel from "src/components/pages/accomodation/Hotel";
import { AccomList, AccommodationPage } from "./accommodation.styles";

const Accommodation = () => {
  return (
    <AccommodationPage>
      <AccomList>
        {accomList.map((accom, index) => (
          <Hotel
            name={accom.name}
            description={accom.description}
            priceEstimate={accom.priceEstimate}
            link={accom.link}
            bookingLinks={accom.bookingLinks}
            image={accom.image}
            key={index}
            appleMaps={accom.appleMaps}
            googleMaps={accom.googleMaps}
          />
        ))}
      </AccomList>
    </AccommodationPage>
  );
};

export default Accommodation;
