import PageHeading from "src/components/PageHeading";
import Subheading from "src/components/Subheading";
import {
  VenueAddress,
  VenueDetails,
  VenueMap,
  VenueOverview,
  VenuePage,
  VenueTile,
} from "./venue.styles";

const Venue = () => {
  return (
    <>
      <VenueTile />
      <VenuePage>
        <VenueOverview>
          <VenueDetails>
            <PageHeading>Venue</PageHeading>
            <Subheading>The Holford Estate</Subheading>
            <VenueAddress>
              The Holford Estate,
              <br />
              Off Chester Road,
              <br />
              Plumley,
              <br />
              WA16 0UA
              <br />
            </VenueAddress>
          </VenueDetails>

          <VenueMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.174021653436!2d-2.4396943840417484!3d53.275478979964326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a5608500aab1d%3A0xceed545d9adbb84b!2sThe%20Holford%20Estate%20(%20Holford%20Hall%20)!5e1!3m2!1sen!2suk!4v1668457235511!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </VenueMap>
        </VenueOverview>
      </VenuePage>
    </>
  );
};

export default Venue;
