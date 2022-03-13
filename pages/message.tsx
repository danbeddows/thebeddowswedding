import { rem } from "polished";
import { useState } from "react";
import Button from "src/components/Button";
import Header from "src/components/Header";
import Input from "src/components/Input";
import PageHeading from "src/components/PageHeading/PageHeading";
import Textarea from "src/components/Textarea";
import { MessageContainer } from "./message.styles";

type MessageErrorType = "name" | "email" | "message";
interface MessageError {
  type: MessageErrorType;
  description: string;
}

const Message = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<MessageError[]>([]);

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
    if (name == "") {
      errors.push({ type: "name", description: "Enter your name" });
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

  return (
    <>
      <Header />
      <MessageContainer>
        <PageHeading>Message us</PageHeading>
        <Input
          type="text"
          label="Your name"
          onChange={(val: string) => {
            setName(val);
          }}
          placeholder="Enter your name"
          style={{ minWidth: rem(280) }}
          error={getFormError("name")}
        />
        <Input
          type="text"
          label="Email Address"
          onChange={(val: string) => {
            setEmailAddress(val);
          }}
          placeholder="Enter your email address"
          style={{ minWidth: rem(460) }}
          error={getFormError("email")}
        />
        <Textarea
          label="Message"
          onChange={(val: string) => {
            setMessage(val);
          }}
          placeholder="Enter your message"
          style={{ minWidth: rem(460), minHeight: rem(240) }}
          error={getFormError("message")}
        />
        <Button isLoading={isSubmitting} onClick={handleSubmit}>
          Submit
        </Button>
      </MessageContainer>
    </>
  );
};

export default Message;
