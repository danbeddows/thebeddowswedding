import React, { useEffect, useState } from "react";
import Button from "src/components/Button";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import { RsvpPage } from "./rsvp.styles";
import {
  Guest,
  GuestDecision,
  GuestDelete,
  GuestDiet,
  GuestHeader,
  GuestName,
  GuestPhone,
} from "./rsvp2.styles";

interface Guest {
  name?: string;
  dietReqs?: string;
  phone?: string;
  willAttend?: string;
  nameRef?: React.RefObject<HTMLInputElement>;
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

      if (guests.length > 0) {
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
    const numGuests = guests.length;

    const newGuest = {
      name: "",
      phone: "",
      willAttend: "-1",
      dietReqs: "",
      nameRef: React.createRef(),
    };

    setGuests([...guests, newGuest]);
  };

  if (guests.length === 0) {
    newGuest();
  }

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
                onChange={(e) => {
                  updateGuestValue(n, "name", e?.target.value);
                }}
                placeholder="Enter Name"
                ref={guest.nameRef}
              />
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
                onChange={(e) => {
                  updateGuestValue(n, "willAttend", e?.target.value);
                }}
                value={guest.willAttend}
              >
                <option value="-1">Please select.</option>
                <option value="yes">Yes, can't wait!</option>
                <option value="no">Sorry, can't make it.</option>
              </GuestDecision>
            </div>
            <div>
              <GuestPhone
                value={guest.phone}
                onChange={(e) => {
                  updateGuestValue(n, "phone", e?.target.value);
                }}
                placeholder="Enter phone"
              />
            </div>
            <div>
              <GuestDiet
                placeholder="e.g vegeterian, gluten free, etc"
                onChange={(e) => {
                  updateGuestValue(n, "dietReqs", e?.target.value);
                }}
              ></GuestDiet>
            </div>
          </Guest>
        ))}
      </Section>
    </RsvpPage>
  );
};

export default Rsvp;
