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
      <Subheading>Taxis</Subheading>
      <Paragraph>
        <b>Cheshire Travel</b> - <a href="tel:+44160641111">01606 41111</a>
        <br />
        The Independent Cab Co - <a href="tel:+441565631104">01565 631104</a>
        <br /> Knutsford Taxi Co - <a href="tel:+441565745022">01565 745022</a>
        <br /> Knutsford Cab Company -{" "}
        <a href="tel:+441565651010">01565 651010</a>
        <br /> Cranford Cars - <a href="tel:+441565634445">01565 634445</a>
        <br />
        Amber Cars - <a href="tel:+441565650707">01565 650707</a>
        <br /> Abacus Cars - <a href="tel:+441565755533">01565 755533</a>
        <br />
        First Class Private Hire - <a href="tel:+441565631632">01565 631632</a>
        <br /> Kings Mead Travel - <a href="tel:+447093304468">07093 304 468</a>
        <br /> Smart Cars of Cheshire -{" "}
        <a href="tel:+44160644674">01606 44674</a>
      </Paragraph>
      <Subheading style={{ marginTop: 40 }}>Accommodation</Subheading>
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
