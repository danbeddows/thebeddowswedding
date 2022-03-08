import { useState } from "react";
import {
  MarriedDate,
  MarriedNames,
  MarriedSubtext,
  PageWrapper,
  SubscribeForm,
  SubscribeInput,
  SubscribeSubmit,
  SubscribeText,
  SubscribeWrapper,
} from "./index.styles";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email == "") {
    } else {
      // submit email
    }
  };

  return (
    <PageWrapper>
      <MarriedNames>
        Natalie
        <br />+<br />
        Dan
      </MarriedNames>
      <MarriedSubtext>Are Getting Married</MarriedSubtext>
      <MarriedDate>22nd April 2023</MarriedDate>
      <SubscribeWrapper>
        <SubscribeText>For updates, enter your email address:</SubscribeText>
        <SubscribeForm>
          <SubscribeInput value={email} onChange={handleEmailChange} />
          <SubscribeSubmit onClick={handleSubmit}>Subscribe</SubscribeSubmit>
        </SubscribeForm>
      </SubscribeWrapper>
    </PageWrapper>
  );
};

export default Index;
