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
  GuestDelete,
  GuestDiet,
  GuestHeader,
  GuestName,
  GuestPhone,
  RsvpPage,
} from "./rsvp.styles";

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

const Rsvp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [guests, setGuests] = useState<Guest[]>([]);
  const [lastGuestCount, setLastGuestCount] = useState(0);

  useEffect(() => {
    // if guest count has increased, scroll to bottom and click new element
    if (guests.length > lastGuestCount) {
      // Focus on latest input
      const createdGuest = guests[guests.length - 1];
      createdGuest.nameRef?.current?.focus();

      if (guests.length > 1) {
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    }

    console.log(guests);

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
      guests.filter((guest, n) => {
        return n !== index;
      })
    );
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
        {" "}
        <Paragraph>
          Please add the details of everyone in your party below.
        </Paragraph>
        <GuestHeader>
          <h2>Guests</h2>
          <Button onClick={newGuest}>Add another guest</Button>
        </GuestHeader>
        <Guest isHeader key={-1}>
          <div>Name</div>
          <div>Attending?</div>
          <div>Phone number</div>
          <div>Dietary requirements</div>
        </Guest>
        {guests.map((guest, n) => (
          <Guest key={n}>
            <div>
              <GuestName
                type="text"
                value={guest.name}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  updateGuestValue(n, "name", e?.currentTarget.value);
                }}
                placeholder="Enter Name"
                ref={guest.nameRef}
              />
              <Error>{guest.errors?.nameError}</Error>
              <GuestDelete
                onClick={() => {
                  deleteGuest(n);
                }}
              >
                Remove guest
              </GuestDelete>
            </div>
            <div>
              <GuestDecision
                onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                  updateGuestValue(n, "willAttend", e?.currentTarget.value);
                }}
                value={guest.willAttend}
              >
                <option value="-1">Please select.</option>
                <option value="yes">Yes, can't wait!</option>
                <option value="no">Sorry, can't make it.</option>
              </GuestDecision>
              <Error>{guest.errors?.willAttendError}</Error>
            </div>
            <div>
              <GuestPhone
                value={guest.phone}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  updateGuestValue(n, "phone", e?.currentTarget.value);
                }}
                placeholder="Enter phone"
              />
              <Error>{guest.errors?.phoneError}</Error>
            </div>
            <div>
              <GuestDiet
                placeholder="e.g vegeterian, gluten free, etc"
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                  updateGuestValue(n, "dietReqs", e?.currentTarget.value);
                }}
              ></GuestDiet>
              <Error>{guest.errors?.dietReqsError}</Error>
            </div>
          </Guest>
        ))}
        <Button
          onClick={() => {
            submitForm();
          }}
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </Section>
    </RsvpPage>
  );
};

export default Rsvp;
