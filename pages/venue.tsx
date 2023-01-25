import { faArrowDown } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  VenueHeroArrow,
  VenueMap,
  VenuePage,
} from "../src/styles/pages/venue.styles";

const Venue = () => {
  return (
    <>
      <VenueHeroArrow>
        <FontAwesomeIcon icon={faArrowDown} />
      </VenueHeroArrow>
      <VenueHero />
      <Section>
        <VenuePage>
          <VenueDetails>
            <PageHeading>Venue</PageHeading>
            <Subheading>The Holford Estate</Subheading>
            <VenueAddress>
              Owen House Wedding Barn,
              <br />
              Small Lane,
              <br />
              Mobberley,
              <br />
              Cheshire,
              <br />
              WA16 7NU
              <br />
            </VenueAddress>

            <MapButtons>
              <MapButtonLink
                href="https://maps.apple.com/?address=Small%20Lane,%20Mobberley,%20WA16%207NU,%20England&auid=2644673447944453529&ll=53.331490,-2.327152&lsp=9902&q=Owen%20House%20Wedding%20Barn&_ext=CjMKBQgEEOEBCgQIBRADCgUIBhDfAQoECAoQAAoECFIQAwoECFUQDwoECFkQAgoFCKQBEAESJilEVQIJ26lKQDFSzTNUaa0CwDnCKihlAatKQEFGLaG4mo4CwFAE"
                target="_blank"
              >
                <MapButton>
                  Open in <img src="/img/pages/accommodation/apple-maps.jpg" />
                </MapButton>
              </MapButtonLink>
              <MapButtonLink
                href="https://www.google.co.uk/maps/place/Owen+House+Wedding+Barn/@53.33126,-2.328557,17z/data=!3m1!4b1!4m5!3m4!1s0x487a53053e0629e5:0xea507dd56241aeaa!8m2!3d53.3312568!4d-2.3263683"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.6702750692393!2d-2.3263683!3d53.3312568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a53053e0629e5%3A0xea507dd56241aeaa!2sOwen%20House%20Wedding%20Barn!5e0!3m2!1sen!2suk!4v1674645692157!5m2!1sen!2suk"
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
