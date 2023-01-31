import {
  faArrowDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "src/components/Button";
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
      <GiftsHeroArrow>
        <FontAwesomeIcon icon={faArrowDown} />
      </GiftsHeroArrow>
      <GiftsHero />
      <Section>
        <GiftPage>
          <PageHeading>A note on gifts</PageHeading>
          <Paragraph>
            We’ve lived together a year or two,
            <br />
            we really don't need anything new.
          </Paragraph>
          <Paragraph>
            Your presence as a guest,
            <br />
            is all we request.
          </Paragraph>
          <Paragraph>
            But if you insist on giving a gift, some pennies for
            <br />
            our honeymoon would really give us a lift
          </Paragraph>
          <Paragraph>
            <a href="https://prezola.com/wishlists/10273773/" target="_blank">
              <Button onClick={() => {}}>
                Go to our honeymoon page{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ marginLeft: 2 }}
                />
              </Button>
            </a>
          </Paragraph>
        </GiftPage>
      </Section>
    </>
  );
};

export default Gifts;
