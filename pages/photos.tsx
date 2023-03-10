import React from "react";
import Button from "src/components/Button";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import { RsvpPage } from "../src/styles/pages/photos.styles";

const Photos = () => {
  return (
    <RsvpPage>
      <Section>
        <PageHeading>Photos</PageHeading>
        <Subheading>Say yes!</Subheading>
      </Section>
    </RsvpPage>
  );
};

export default Photos;
