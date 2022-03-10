import { faCheck } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  SubscribeForm,
  SubscribeInput,
  SubscribeStatus,
  SubscribeStatusError,
  SubscribeStatusSuccess,
  SubscribeSubmit,
  SubscribeText,
  SubscribeWrapper,
} from "./Subscribe.styles";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const mailChimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL
    ? process.env.NEXT_PUBLIC_MAILCHIMP_URL
    : "";

  const handleEmailChange = (val: string) => {
    setEmail(val);
  };

  return (
    <MailchimpSubscribe
      url={mailChimpUrl}
      render={({ subscribe, status, message }) => {
        let errorMsg = "";

        if (status == "error") {
          if (typeof message == "string") {
            if (message == "0 - Please enter a value") {
              errorMsg = "Enter your email address";
            } else if (message.substring(0, 4) == "0 - ") {
              errorMsg = message.substring(4);
            } else {
              errorMsg = message;
            }
          }
        }

        if (status == "success") {
          setEmail("");
        }

        return (
          <SubscribeWrapper>
            <SubscribeText>
              Enter email to subscribe to important wedding updates
            </SubscribeText>
            <SubscribeForm>
              <SubscribeInput
                label={""}
                onChange={handleEmailChange}
                placeholder={"Email address"}
                value={email}
              />
              <SubscribeSubmit
                onClick={() => {
                  subscribe({ EMAIL: email });
                }}
                isLoading={status == "sending"}
              >
                Subscribe
              </SubscribeSubmit>
            </SubscribeForm>
            <SubscribeStatus>
              {status == "success" && (
                <SubscribeStatusSuccess>
                  Thanks, we'll be in touch soon!{" "}
                  <FontAwesomeIcon icon={faCheck} />
                </SubscribeStatusSuccess>
              )}
              {status == "error" && (
                <SubscribeStatusError>{errorMsg}</SubscribeStatusError>
              )}
            </SubscribeStatus>
          </SubscribeWrapper>
        );
      }}
    />
  );
};

export default Subscribe;
