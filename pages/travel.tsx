import accomList from "src/accommodationList";
import Hotel from "src/components/pages/accomodation/Hotel";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import {
  AccomList,
  AccommodationPage,
} from "../src/styles/pages/accommodation.styles";

const Accommodation = () => {
  return (
    <AccommodationPage>
      <Subheading>Accommodation</Subheading>
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
      </AccomList>{" "}
      <Subheading style={{ marginTop: 40 }}>Taxis</Subheading>
      <Paragraph>
        <b>Cheshire Travel</b> - 0160641111
        <br />
        The Independent Cab Co - 01565 631104
        <br /> Knutsford Taxi Co - 01565 745022
        <br /> Knutsford Cab Company - 01565 651010
        <br /> Cranford Cars - 01565 634445
        <br />
        Amber Cars - 01565 650707
        <br /> Abacus Cars - 01565 755533
        <br />
        First Class Private Hire - 01565 631632
        <br /> Kings Mead Travel - 07093304468
        <br /> Smart Cars of Cheshire - 01606 44674
      </Paragraph>
    </AccommodationPage>
  );
};

export default Accommodation;
