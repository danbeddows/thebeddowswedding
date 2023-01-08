import { useState } from "react";
import Button from "src/components/Button";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import { RsvpPage } from "./rsvp.styles";
import { Guest, GuestDecision, GuestHeader, GuestName } from "./rsvp2.styles";

interface Guest {
  name?: string;
  dietReqs?: string;
  phone?: string;
  willAttend?: boolean;
}

const Rsvp = () => {
  const [guests, setGuests] = useState<Guest[]>([
    {
      name: "Dan",
      phone: "07429 368035",
      willAttend: true,
    },
    { name: "Natalie", phone: "07795 436603", willAttend: false },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const newGuest = () => {
    setGuests([
      ...guests,
      {
        name: "New",
      },
    ]);
  };

  return (
    <RsvpPage>
      <Section>
        <PageHeading>RSVP</PageHeading>
        <Paragraph>
          We'd love for you to join us on our wedding day on the 22nd April
          2023.
        </Paragraph>
        <Paragraph>
          Please add the details of all of the people in your party below.
          <br />
          On the next page, you'll be able to choose the wedding breakfast main
          course option.
        </Paragraph>
      </Section>
      <Section>
        <GuestHeader>
          <h2>Guests</h2>
          <Button onClick={newGuest}>Add guest</Button>
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
              <GuestName type="text" value={guest.name} />
            </div>
            <div>
              <GuestDecision>
                <option value="-1">Please select.</option>
                <option value="true">I'd love to attend.</option>
                <option value="false">Unfortunately I can't make it.</option>
              </GuestDecision>
            </div>
            <div>{guest.phone}</div>
            <div>{guest.dietReqs}</div>
          </Guest>
        ))}
      </Section>
    </RsvpPage>
  );
};

export default Rsvp;
