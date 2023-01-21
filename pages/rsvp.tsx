import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "src/components/Button";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import {
  Error,
  Guest,
  GuestDecision,
  GuestDesktopDelete,
  GuestDiet,
  GuestHeader,
  GuestMobileDelete,
  GuestMobileHeading,
  GuestMobileTitle,
  GuestName,
  GuestPhone,
  RsvpPage,
  Thankyou,
} from "../src/styles/pages/rsvp.styles";

interface Guest {
  name: string;
  dietReqs: string;
  phone: string;
  willAttend: string;
  nameRef?: React.RefObject<HTMLInputElement>;
  errors?: {
    nameError?: string;
    dietReqsError?: string;
    phoneError?: string;
    willAttendError?: string;
  };
}

export type GuestWithoutForm = Omit<Guest, "nameRef" | "errors">;

const Rsvp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [guests, setGuests] = useState<Guest[]>([]);
  const [lastGuestCount, setLastGuestCount] = useState(0);

  useEffect(() => {
    // if guest count has increased, scroll to bottom and click new element
    if (guests.length > lastGuestCount) {
      if (guests.length > 1) {
        // Focus on latest input
        const createdGuest = guests[guests.length - 1];
        createdGuest.nameRef?.current?.focus();

        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    }

    setLastGuestCount(guests.length);
  }, [guests]);

  const newGuest = () => {
    const newGuest = {
      name: "",
      phone: "",
      willAttend: "-1",
      dietReqs: "",
      nameRef: React.createRef<HTMLInputElement>(),
    };

    setGuests([...guests, newGuest]);
  };

  if (guests.length === 0) {
    newGuest();
  }

  const submitForm = () => {
    // Run through each guest and validate data
    let hasError = false;

    guests.forEach((guest, index) => {
      if (guest.name === "") {
        updateGuestError(index, "nameError", "Enter guest name.");
        hasError = true;
      } else if (guest.name.length > 100) {
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

      if (guest.phone === "") {
        updateGuestError(index, "phoneError", "Enter phone number.");
        hasError = true;
      } else if (guest.phone.length > 30) {
        updateGuestError(index, "phoneError", "Enter valid phone number");
        hasError = true;
      } else {
        updateGuestError(index, "phoneError", "");
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

      const data = guests.map((guest) => {
        return {
          name: guest.name,
          willAttend: guest.willAttend,
          dietReqs: guest.dietReqs,
          phone: guest.phone,
        };
      });

      fetch("/api/rsvp", {
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
    setGuests(
      guests.map((guest, n) => {
        if (n === index) {
          return {
            ...guest,
            [key]: value,
          };
        }

        return guest;
      })
    );
  };

  const updateGuestError = (index: number, key: string, value: string) => {
    setGuests((guests) =>
      guests.map((guest, n) => {
        if (n === index) {
          return {
            ...guest,
            errors: {
              ...guest.errors,
              [key]: value,
            },
          };
        }

        return guest;
      })
    );
  };

  const deleteGuest = (index: number) => {
    setGuests(
      guests.filter((_, n) => {
        return n !== index;
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
    <RsvpPage>
      <Section>
        <PageHeading>RSVP</PageHeading>
        <Subheading>Say yes!</Subheading>
        <Paragraph>
          We'd love for you to join us on the 22nd April 2023 to celebrate our
          wedding.
        </Paragraph>
        <Paragraph>
          Please let us know if you can make it by the 15th February.
        </Paragraph>
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
          {!formSubmitted && (
            <Button
              onClick={() => {
                newGuest();
              }}
              disabled={isSubmitting}
            >
              Add another guest
            </Button>
          )}
        </GuestHeader>
        <Guest isHeader key={-1}>
          <div>Name</div>
          <div>Attending?</div>
          <div>Phone number</div>
          <div>Dietary requirements</div>
        </Guest>
        {guests.map((guest, n) => (
          <>
            <GuestMobileTitle>Guest {n + 1}</GuestMobileTitle>
            <Guest key={n}>
              <div>
                <GuestMobileHeading>Name</GuestMobileHeading>
                <GuestName
                  type="text"
                  value={guest.name}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    updateGuestValue(n, "name", e?.currentTarget.value);
                  }}
                  placeholder="Enter Name"
                  ref={guest.nameRef}
                  disabled={isSubmitting}
                />
                <Error>{guest.errors?.nameError}</Error>
                {guests.length > 1 && !isSubmitting && !formSubmitted && (
                  <GuestDesktopDelete
                    onClick={() => {
                      deleteGuest(n);
                    }}
                  >
                    Remove guest
                  </GuestDesktopDelete>
                )}
              </div>
              <div>
                <GuestMobileHeading>Attending?</GuestMobileHeading>
                <GuestDecision
                  onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    updateGuestValue(n, "willAttend", e?.currentTarget.value);
                  }}
                  value={guest.willAttend}
                  disabled={isSubmitting}
                >
                  <option value="-1">Please select</option>
                  <option value="yes">Yes, can't wait!</option>
                  <option value="no">Sorry, can't make it.</option>
                </GuestDecision>
                <Error>{guest.errors?.willAttendError}</Error>
              </div>
              <div>
                <GuestMobileHeading>Phone number</GuestMobileHeading>
                <GuestPhone
                  value={guest.phone}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    updateGuestValue(n, "phone", e?.currentTarget.value);
                  }}
                  placeholder="Enter phone"
                  disabled={isSubmitting}
                />
                <Error>{guest.errors?.phoneError}</Error>
              </div>
              <div>
                <GuestMobileHeading>Dietary requirements?</GuestMobileHeading>
                <GuestDiet
                  placeholder="e.g vegeterian, gluten free, etc"
                  onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                    updateGuestValue(n, "dietReqs", e?.currentTarget.value);
                  }}
                  disabled={isSubmitting}
                ></GuestDiet>
                <Error>{guest.errors?.dietReqsError}</Error>
              </div>
            </Guest>
            {guests.length > 1 && !isSubmitting && !formSubmitted && (
              <GuestMobileDelete
                onClick={() => {
                  deleteGuest(n);
                }}
              >
                Remove {guest.name !== "" ? guest.name : "guest"}
              </GuestMobileDelete>
            )}
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
    </RsvpPage>
  );
};

export default Rsvp;
