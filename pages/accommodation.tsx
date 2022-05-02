import accomList from "src/accommodationList";
import Header from "src/components/Header";
import Hotel from "src/components/pages/accomodation/Hotel";
import { AccomList, AccommodationPage } from "./accommodation.styles";

const Accommodation = () => {
  return (
    <>
      <Header />
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
            />
          ))}
        </AccomList>
      </AccommodationPage>
    </>
  );
};

export default Accommodation;
