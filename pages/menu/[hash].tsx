import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "src/components/Button";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import {
  Course,
  CourseBody,
  CourseItem,
  CourseSubtitle,
  CourseTitle,
  Error,
  Guest as GuestElement,
  GuestDecision,
  GuestDesktopDelete,
  GuestDiet,
  GuestHeader,
  GuestMobileDelete,
  GuestMobileHeading,
  GuestMobileTitle,
  GuestName,
  GuestPhone,
  MenuContainer,
  MenuPage,
  Thankyou,
  MainTitle,
} from "../../src/styles/pages/menu.styles";
import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "../../src/lib/prisma";
import { getParties } from "src/lib/parties/getParties";
import { Guest, Party, PartyGuest } from "@prisma/client";

interface GuestChoiceForm {
  nameRef?: React.RefObject<HTMLInputElement>;
  errors?: {
    nameError?: string;
    dietReqsError?: string;
    phoneError?: string;
    willAttendError?: string;
  };
}

type GuestChoice = Guest & GuestChoiceForm;

export type GuestChoiceWithoutForm = Omit<GuestChoice, "nameRef" | "errors">;

interface PartyItem {
  params: {
    hash: string;
  };
}
type PartyList = PartyItem[];

export const getStaticPaths: GetStaticPaths = async () => {
  const parties = await getParties();

  const partyHashes: PartyList = parties.map((party) => {
    return {
      params: {
        hash: party.hash,
      },
    };
  });

  return {
    paths: partyHashes,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const hash = params?.hash as string;

  const party = await prisma.party.findUnique({
    where: {
      hash: hash,
    },
    include: {
      guests: {
        orderBy: {
          displayOrder: "asc",
        },
        include: {
          guest: true,
        },
      },
    },
  });

  if (party === null) {
    return { notFound: true };
  }

  return {
    props: { party },
    revalidate: 600,
  };
};

type PartyWithGuests = Party & {
  guests: (PartyGuest & {
    guest: Guest;
  })[];
};

interface MenuProps {
  party: PartyWithGuests;
}
const Menu = ({ party }: MenuProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const guests = party.guests.map((partyGuest) => partyGuest.guest);

  const [guestChoices, setGuestChoices] = useState<GuestChoice[]>(guests);
  const [lastGuestCount, setLastGuestCount] = useState(0);

  const submitForm = () => {
    // Run through each guest and validate data
    let hasError = false;

    guestChoices.forEach((guestChoice, index) => {
      if (guestChoice.name === "") {
        updateGuestError(index, "nameError", "Enter guest name.");
        hasError = true;
      } else if (guestChoice.name.length > 100) {
        updateGuestError(
          index,
          "nameError",
          "This guests name is too long. Sorry! :("
        );
        hasError = true;
      } else {
        updateGuestError(index, "nameError", "");
      }

      if (guest.willAttend === "-1") {
        updateGuestError(index, "willAttendError", "Select whether attending.");
        hasError = true;
      } else {
        updateGuestError(index, "willAttendError", "");
      }

      if (guest.dietReqs.length > 300) {
        updateGuestError(
          index,
          "dietReqsError",
          "Too many diet requirements, sorry!"
        );
        hasError = true;
      } else {
        updateGuestError(index, "dietReqsError", "");
      }
    });

    if (!hasError) {
      setIsSubmitting(true);

      const data = guestChoices.map((guestChoice) => {
        return {
          name: guest.name,
          willAttend: guest.willAttend,
          dietReqs: guest.dietReqs,
          phone: guest.phone,
        };
      });

      fetch("/api/menu", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status == "success") {
            setIsSubmitting(false);
            setFormSubmitted(true);
            setTimeout(() => {
              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            });
          } else if (response.status == "failed") {
            console.log(response.errors);
            setIsSubmitting(false);
            alert("An unknown error occured, please try again later.");
          }
        })
        .catch((error) => {
          console.log(error);
          setIsSubmitting(false);
        });
    }
  };

  const updateGuestValue = (index: number, key: string, value: string) => {
    setGuestChoices(
      guestChoices.map((guestChoice, n) => {
        if (n === index) {
          return {
            ...guestChoice,
            [key]: value,
          };
        }

        return guestChoice;
      })
    );
  };

  const updateGuestError = (index: number, key: string, value: string) => {
    setGuestChoices((guestChoices) =>
      guestChoices.map((guestChoice, n) => {
        if (n === index) {
          return {
            ...guestChoice,
            errors: {
              ...guestChoice.errors,
              [key]: value,
            },
          };
        }

        return guestChoice;
      })
    );
  };

  const getTurnoutMessage = () => {
    const turnout =
      guests.filter((guest) => guest.willAttend === "yes").length /
      guests.length;

    if (turnout === 1 && guests.length === 1) {
      return "We can't wait to see you!";
    } else if (turnout === 1 && guests.length === 2) {
      return "We can't wait to see you both!";
    } else if (turnout === 1 && guests.length > 2) {
      return "We can't wait to see you all!";
    }

    if (turnout === 0) {
      return "We're sorry you can't make it, thanks for letting us know.";
    }

    if (turnout < 1 && turnout > 0) {
      return "Thanks for letting us know.";
    }
  };

  return (
    <MenuPage>
      <Section>
        <PageHeading>Wedding breakfast</PageHeading>
      </Section>
      <Section>
        <MenuContainer>
          <Course>
            <CourseTitle>To begin</CourseTitle>
            <CourseBody>
              <CourseItem>
                Freshly Baked Artisanal Sourdough | Aged Balsamic & Extra Virgin
                Olive Oil
              </CourseItem>
            </CourseBody>
          </Course>
          <Course>
            <CourseTitle>Starter</CourseTitle>
            <CourseSubtitle>Antipasti Board</CourseSubtitle>
            <CourseBody>
              <CourseItem>
                24 Month Aged Prosciutto + Traditional Tuscan Salami + Italian
                Beef Bresaola
              </CourseItem>
              <CourseItem>
                Soft & Creamy Fior de Lait + Blue Veined Gorgonzola + Aged
                Crumbly Pecorino
              </CourseItem>
              <CourseItem>
                Mixed Marinated Olives + Sun Blushed Tomatoes + Artichokes
              </CourseItem>
              <CourseItem>
                Fresh Salsa Verde + Burnt Garlic Aioli + Olive Oil & Balsamic
              </CourseItem>
              <CourseItem>
                Rosemary & Sea Salt Focaccia + Aged Parmesan & Oregano Grissini
              </CourseItem>
            </CourseBody>
          </Course>
          <Course>
            <CourseTitle>Main course</CourseTitle>
            <CourseSubtitle>Choose one</CourseSubtitle>
            <CourseBody>
              <CourseItem>
                <MainTitle>Sticky Braised Beef Feather Blade</MainTitle>
                <br />
                Italian Roasted New Potatoes + Garlic Sautéed Fine Beans +
                Glazed Coloured Carrots | Beef Ragu Style Sauce
              </CourseItem>
              <CourseItem>
                <MainTitle>Pan Roasted Cheshire Chicken Supreme</MainTitle>
                <br />
                Potato & Herb Risotto + Sautéed Asparagus + Fresh Salsa Verde |
                Parmesan, Pumpkin Seeds & Pea Shoots
              </CourseItem>
              <CourseItem>
                <MainTitle>Butternut Squash Risotto</MainTitle>
                <br />
                Sautéed Spinach + Sautéed Asparagus + Crispy Leeks | Gremolata
                Sauce
              </CourseItem>
            </CourseBody>
          </Course>
          <Course>
            <CourseTitle>Dessert</CourseTitle>
            <CourseBody>
              <CourseItem>
                Amaretto & Orange New York Style Baked Cheesecake + Orange
                Liquor Ice Cream | Boozy Oranges
              </CourseItem>
            </CourseBody>
          </Course>
        </MenuContainer>
      </Section>

      <Section>
        <Paragraph>
          Please add the details of everyone in your party below.
        </Paragraph>
        <Paragraph>
          <span style={{ fontWeight: 600 }}>Note:</span> We're asking for the
          mobile numbers of all adults so we can send you a link nearer the time
          with our menu, and the wedding programme. No spam, we promise!
        </Paragraph>
        <GuestHeader>
          <h2>Guests</h2>
        </GuestHeader>
        <GuestElement isHeader key={-1}>
          <div>Name</div>
          <div>Attending?</div>
          <div>Phone number</div>
          <div>Dietary requirements</div>
        </GuestElement>
        {guestChoices.map((guestChoice, n) => (
          <>
            <GuestMobileTitle>Guest {n + 1}</GuestMobileTitle>
            <GuestElement key={n}>
              <div>
                <GuestMobileHeading>Name</GuestMobileHeading>
                <GuestName
                  type="text"
                  value={guestChoice.name}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    updateGuestValue(n, "name", e?.currentTarget.value);
                  }}
                  placeholder="Enter name"
                  ref={guestChoice.nameRef}
                  disabled={isSubmitting}
                />
                <Error>{guestChoice.errors?.nameError}</Error>
              </div>
              <div>
                <GuestMobileHeading>Attending?</GuestMobileHeading>
                <GuestDecision
                  onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    updateGuestValue(n, "willAttend", e?.currentTarget.value);
                  }}
                  value={guestChoice.willAttend}
                  disabled={isSubmitting}
                >
                  <option value="-1">Please select</option>
                  <option value="yes">Yes, can't wait!</option>
                  <option value="no">Sorry, can't make it.</option>
                </GuestDecision>
                <Error>{guestChoice.errors?.willAttendError}</Error>
              </div>
              <div>
                <GuestMobileHeading>Phone number</GuestMobileHeading>
                <GuestPhone
                  value={guestChoice.phone}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    updateGuestValue(n, "phone", e?.currentTarget.value);
                  }}
                  placeholder="Enter phone"
                  disabled={isSubmitting}
                />
                <Error>{guestChoice.errors?.phoneError}</Error>
              </div>
              <div>
                <GuestMobileHeading>Dietary requirements?</GuestMobileHeading>
                <GuestDiet
                  value={guestChoice.dietReqs}
                  placeholder="e.g vegeterian, gluten free, etc"
                  onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                    updateGuestValue(n, "dietReqs", e?.currentTarget.value);
                  }}
                  disabled={isSubmitting}
                ></GuestDiet>
                <Error>{guestChoice.errors?.dietReqsError}</Error>
              </div>
            </GuestElement>
          </>
        ))}
        <Button
          onClick={() => {
            submitForm();
          }}
          isLoading={isSubmitting}
          disabled={formSubmitted}
        >
          Submit
        </Button>
        {formSubmitted && (
          <Thankyou>
            <Subheading>Thanks for your response</Subheading>
            It's safely been delivered. {getTurnoutMessage()}
          </Thankyou>
        )}
      </Section>
    </MenuPage>
  );
};

export default Menu;
