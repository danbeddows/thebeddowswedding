import React, { ChangeEvent, useEffect, useState } from "react";

import PageHeading from "src/components/PageHeading/PageHeading";

import Section from "src/components/Section";
import Subheading from "src/components/Subheading";
import {
  Answer,
  FaqPage,
  Question,
  QuestionWrapper,
} from "../src/styles/pages/faq.styles";

const Faq = () => {
  return (
    <FaqPage>
      <Section>
        <PageHeading>FAQ</PageHeading>
        <QuestionWrapper>
          <Question>What time should I arrive?</Question>
          <Answer>
            Day guests should arrive at 11:30am.
            <br />
            Evening guests should arrive from 6:00pm.
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>What time is the ceremony?</Question>
          <Answer>The ceremony begins at 12 noon.</Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>Is the ceremony indoors or outdoors?</Question>
          <Answer>
            We're hoping for an outdoor ceremony, and we have some lawn games
            planned - so consider your footwear on grass. This is weather
            dependant, and it may be worth bringing a jacket if it's a cooler
            day.
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>When will we be eating?</Question>
          <Answer>
            Canapes will be served immediately after the ceremony at 12:30pm.
            The wedding breakfast begins at 2:30pm.
            <br />
            Food will also be served in the evening.
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>What time is last orders?</Question>
          <Answer>
            Last orders are at midnight. Carriages are at 12:30am.
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>What should I wear?</Question>
          <Answer>
            The wedding party will be in grey three piece suits, and blue full
            length dresses; so you’re welcome to join us and get dressed up too!
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>Can I share photos?</Question>
          <Answer>
            Of course! Feel free to use hashtag{" "}
            <span style={{ fontWeight: 500 }}>#beddowswedding</span>. We'll also
            be sharing a link on the Sunday too, to allow you to upload your
            photos to the website.
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>Is parking available?</Question>
          <Answer>
            You can park at the venue all day. Additionally, you can leave your
            car at the venue overnight; but it must be collected by 12 noon on
            the Sunday.
          </Answer>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>Do you have a gift registry?</Question>
          <Answer>
            We do, you can find it over on the <a href="/gifts">gifts</a> page.
          </Answer>
        </QuestionWrapper>
      </Section>
    </FaqPage>
  );
};

export default Faq;
