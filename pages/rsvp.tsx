import { rem } from "polished";
import { useEffect, useState } from "react";
import Button from "src/components/Button";
import Input from "src/components/Input";
import PageHeading from "src/components/PageHeading/PageHeading";
import Textarea from "src/components/Textarea";
import { RsvpPage } from "./rsvp.styles";

type MessageErrorType = "names" | "answer" | "email" | "message";
interface MessageError {
  type: MessageErrorType;
  description: string;
}

const Message = () => {
  const [names, setNames] = useState("");
  const [answer, setAnswer] = useState("unknown");
  const [dietReqs, setDietReqs] = useState("unknown");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<MessageError[]>([]);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const getFormError = (type: MessageErrorType) => {
    const errors = formErrors.filter((err) => err.type == type);

    if (errors.length > 0) {
      return errors[0].description;
    }

    return "";
  };

  const handleSubmit = () => {
    const errors: MessageError[] = [];

    // Validate input
    if (names == "") {
      errors.push({ type: "names", description: "Enter your name" });
    }

    if (emailAddress == "") {
      errors.push({
        type: "email",
        description: "Enter your email address",
      });
    }

    if (message == "") {
      errors.push({ type: "message", description: "Enter your message" });
    }

    if (errors.length == 0) {
      setIsSubmitting(true);
    } else {
      setFormErrors(errors);
    }
  };

  useEffect(() => {
    if (answer === "false") {
      setSubmitDisabled(false);
    } else {
      if (dietReqs === "false") {
        setSubmitDisabled(false);
      } else {
        setSubmitDisabled(true);
      }
    }
  }, [answer]);

  return (
    <RsvpPage>
      <PageHeading>RSVP</PageHeading>
      <Input
        type="text"
        label="Your name(s)"
        onChange={(val: string) => {
          setNames(val);
        }}
        placeholder="Enter your name(s)"
        style={{ minWidth: rem(380) }}
        error={getFormError("names")}
      />

      <Input
        type="radio"
        label="Will you be joining us?"
        options={[
          { label: "yes", value: true },
          { label: "no", value: false },
        ]}
        name={"answer"}
        value={answer}
        onChange={(val: string) => {
          setAnswer(val);
        }}
        error={getFormError("answer")}
      />

      {answer === "true" && (
        <>
          <Input
            type="radio"
            label="Does anybody have dietary requirements?"
            options={[
              { label: "yes", value: true },
              { label: "no", value: false },
            ]}
            name={"dietreqs"}
            value={dietReqs}
            onChange={(val: string) => {
              setDietReqs(val);
              console.log(val);
            }}
            error={getFormError("dietreqs")}
          />
        </>
      )}

      <Textarea
        label="Message"
        onChange={(val: string) => {
          setMessage(val);
        }}
        placeholder="Enter your message"
        style={{ minWidth: rem(460), minHeight: rem(240) }}
        error={getFormError("message")}
      />

      <Button
        isLoading={isSubmitting}
        onClick={handleSubmit}
        disabled={submitDisabled}
      >
        Submit
      </Button>
    </RsvpPage>
  );
};

export default Message;
