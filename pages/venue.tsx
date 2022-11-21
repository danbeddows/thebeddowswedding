import PageHeading from "src/components/PageHeading";
import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import {
  MapButton,
  MapButtonLink,
  MapButtons,
  VenueAddress,
  VenueDetails,
  VenueHero,
  VenueMap,
  VenuePage,
} from "./venue.styles";

const Venue = () => {
  return (
    <>
      <VenueHero />
      <Section>
        <VenuePage>
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

            <MapButtons>
              <MapButtonLink
                href="https://maps.apple.com/?address=Holford%20Mill,%20Chester%20Road,%20Plumley,%20Knutsford,%20WA16%200UA,%20England&ll=53.277014,-2.441687&q=Holford%20Mill&_ext=EiYpuJuW/+GiSkAxTd2JXfWXA8A5NnG8WwikSkBBdVUH0DB5A8BQBA%3D%3D"
                target="_blank"
              >
                <MapButton>
                  Open in <img src="/img/pages/accommodation/apple-maps.jpg" />
                </MapButton>
              </MapButtonLink>
              <MapButtonLink
                href="https://goo.gl/maps/qNtTC4xCpFxhiYm68"
                target="_blank"
              >
                <MapButton>
                  Open in <img src="/img/pages/accommodation/google-maps.png" />
                </MapButton>
              </MapButtonLink>
            </MapButtons>
          </VenueDetails>

          <VenueMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.174021653436!2d-2.4396943840417484!3d53.275478979964326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a5608500aab1d%3A0xceed545d9adbb84b!2sThe%20Holford%20Estate%20(%20Holford%20Hall%20)!5e1!3m2!1sen!2suk!4v1668457235511!5m2!1sen!2suk"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </VenueMap>
        </VenuePage>
      </Section>
    </>
  );
};

export default Venue;
