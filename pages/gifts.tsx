import { faArrowDown } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import {
  GiftPage,
  GiftsHero,
  GiftsHeroArrow,
} from "../src/styles/pages/gifts.styles";

const Gifts = () => {
  return (
    <>
      {" "}
      <GiftsHeroArrow>
        <FontAwesomeIcon icon={faArrowDown} />
      </GiftsHeroArrow>
      <GiftsHero />
      <Section>
        <GiftPage>
          <PageHeading>Gifts</PageHeading>
          <Paragraph>
            We’re incredibly thankful to have everything we need, so we don’t
            have a gift registry.{" "}
          </Paragraph>
          <Paragraph>You joining us to celebrate really is enough.</Paragraph>
          <Paragraph>
            But if you’d like to, you can help us create some new memories by
            contributing to our honeymoon.
          </Paragraph>
          <Paragraph>
            In September 2023, we'll be setting off on an adventure around
            Hawaii. We'll be going to O'ahu to see Pearl Harbour and hike up
            Diamond Head, then to Maui to hit the beach and drive the Road to
            Hana, then Kauai to go to a Luau and explore the garden isle and
            finally Big Island to hike through the Volcano National Park and do
            a Kona coffee tour. We can’t wait!
          </Paragraph>
        </GiftPage>
      </Section>
    </>
  );
};

export default Gifts;
