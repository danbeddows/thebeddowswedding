import React, { useState } from "react";
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
  GuestDiet,
  GuestMobileHeading,
  GuestMobileTitle,
  GuestName,
  MenuContainer,
  MenuPage,
  Thankyou,
  MainTitle,
} from "../../src/styles/pages/menu.styles";
import { GetStaticProps } from "next";
import { prisma } from "../../src/lib/prisma";
import { Guest, Party, PartyGuest } from "@prisma/client";

interface GuestChoiceForm {
  nameRef?: React.RefObject<HTMLInputElement>;
  errors?: {
    nameError?: string;
    dietReqsError?: string;
    foodChoiceError?: string;
  };
}

type GuestChoice = Guest & GuestChoiceForm;

export type GuestChoiceWithoutForm = Omit<GuestChoice, "nameRef" | "errors">;

export const getServerSideProps: GetStaticProps = async ({ params }) => {
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

  const partyHasKid: boolean =
    guests.filter((guest) => guest.isChild).length > 0;

  const [guestChoices, setGuestChoices] = useState<GuestChoice[]>(guests);

  if (party.hasChosenMeals && !formSubmitted) {
    setFormSubmitted(true);
  }

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

      if (guestChoice.foodChoice === "-1") {
        updateGuestError(index, "foodChoiceError", "Choose main course.");
        hasError = true;
      } else {
        updateGuestError(index, "foodChoiceError", "");
      }

      if (guestChoice.dietReqs !== null && guestChoice.dietReqs.length > 300) {
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

      fetch("/api/menu", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guests: guestChoices, party }),
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

  return (
    <MenuPage>
      <Section>
        <PageHeading>Menu</PageHeading>
        <Paragraph>
          Please select the main courses for everyone in your party below by the
          25th March.
        </Paragraph>
        <Paragraph>
          If you're concerned about any of the ingredients that may be present
          in your meal, please don't be; we will be forwarding all dietary
          requirements to the caterers.
        </Paragraph>
        {partyHasKid && (
          <Paragraph>
            Kids can choose either the dedicated kids menu (see below), or a
            smaller portion of any adult menu.
          </Paragraph>
        )}
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
          <Course>
            <CourseTitle>To Finish</CourseTitle>
            <CourseBody>
              <CourseItem>
                Freshly Brewed Tea, Coffee & Tisanes + Handmade Petit Four
              </CourseItem>
            </CourseBody>
          </Course>
          <Course style={{ display: partyHasKid ? "block" : "none" }}>
            <CourseTitle>Kids menu</CourseTitle>
            <CourseBody>
              <CourseItem>Garlic Dough Balls + Herby Sour Cream Dip</CourseItem>
              <CourseItem>
                Chicken Goujons + Crispy Chips | Garden Peas | Heinz Ketchup
              </CourseItem>
              <CourseItem>
                Chocolate Ice Cream Sundae + Marshmallows | Wafer
              </CourseItem>
            </CourseBody>
          </Course>
        </MenuContainer>
      </Section>

      <Section>
        <GuestElement isHeader key={-1}>
          <div>Name</div>
          <div>Main course</div>
          <div>Dietary requirements</div>
        </GuestElement>
        {guestChoices.map((guestChoice, n) => (
          <React.Fragment key={n}>
            <GuestMobileTitle>Guest {n + 1}</GuestMobileTitle>
            <GuestElement key={n}>
              <div>
                <GuestMobileHeading>Name</GuestMobileHeading>
                <GuestName
                  type="text"
                  value={guestChoice.name}
                  ref={guestChoice.nameRef}
                  disabled={true}
                />
                <Error>{guestChoice.errors?.nameError}</Error>
              </div>
              <div>
                <GuestMobileHeading>Main course</GuestMobileHeading>
                <GuestDecision
                  onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    updateGuestValue(n, "foodChoice", e?.currentTarget.value);
                  }}
                  value={guestChoice.foodChoice}
                  disabled={isSubmitting || formSubmitted}
                >
                  <option value="-1">Please select</option>
                  {!guestChoice.isChild && (
                    <>
                      <option value="beef">Sticky Braised Beef</option>
                      <option value="chicken">Chicken Supreme Risotto</option>
                      <option value="veg">Butternut Squash Risotto</option>
                    </>
                  )}
                  {guestChoice.isChild && (
                    <>
                      <option value="kids">Kids Menu</option>
                      <option value="beef">Kids Sticky Braised Beef</option>
                      <option value="chicken">
                        Kids Chicken Supreme Risotto
                      </option>
                      <option value="veg">Kids Butternut Squash Risotto</option>
                    </>
                  )}
                </GuestDecision>
                <Error>{guestChoice.errors?.foodChoiceError}</Error>
              </div>

              <div>
                <GuestMobileHeading>Dietary requirements?</GuestMobileHeading>
                <GuestDiet
                  value={guestChoice.dietReqs ? guestChoice.dietReqs : ""}
                  placeholder="e.g vegeterian, gluten free, etc"
                  onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                    updateGuestValue(n, "dietReqs", e?.currentTarget.value);
                  }}
                  disabled={isSubmitting || formSubmitted}
                ></GuestDiet>
                <Error>{guestChoice.errors?.dietReqsError}</Error>
              </div>
            </GuestElement>
          </React.Fragment>
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
            <Subheading>
              Thanks for your choice{guestChoices.length > 1 ? "s" : ""}.
            </Subheading>
            We can't wait to see you soon!
          </Thankyou>
        )}
      </Section>
    </MenuPage>
  );
};

export default Menu;
