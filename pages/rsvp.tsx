import { rem } from "polished";
import { useEffect, useState } from "react";
import Button from "src/components/Button";
import Input from "src/components/Input";
import PageHeading from "src/components/PageHeading/PageHeading";
import Textarea from "src/components/Textarea";
import { RsvpPage } from "./rsvp.styles";

type MessageErrorType =
  | "names"
  | "answer"
  | "hasDietReqs"
  | "dietReqs"
  | "doubleCheck";
interface MessageError {
  type: MessageErrorType;
  description: string;
}

const Message = () => {
  const [names, setNames] = useState("");
  const [answer, setAnswer] = useState("unknown");
  const [doubleCheck, setDoubleCheck] = useState("unknown");
  const [hasDietReqs, setHasDietReqs] = useState("unknown");
  const [dietReqs, setDietReqs] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<MessageError[]>([]);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Determine whether the form is submitable
  let submitDisabled = true;
  if (names === "") {
    submitDisabled = true;
  } else {
    if (answer === "false") {
      if (doubleCheck === "true") {
        submitDisabled = false;
      } else {
        submitDisabled = true;
      }
    } else {
      if (hasDietReqs === "false") {
        submitDisabled = false;
      } else {
        if (dietReqs !== "") {
          submitDisabled = false;
        } else {
          submitDisabled = true;
        }
      }
    }
  }

  console.log("submitable", !submitDisabled);

  const getFormError = (type: MessageErrorType) => {
    const errors = formErrors.filter((err) => err.type == type);

    if (errors.length > 0) {
      return errors[0].description;
    }

    return "";
  };

  const handleSubmit = () => {
    console.log(123);
    const errors: MessageError[] = [];

    // Validate input
    if (names === "") {
      errors.push({ type: "names", description: "Enter your name(s)" });
    }

    if (answer !== "true" && answer !== "false") {
      errors.push({
        type: "answer",
        description: "Select whether you can join us or not.",
      });
    }

    if (answer === "true") {
      if (hasDietReqs !== "true" && hasDietReqs !== "false") {
        errors.push({
          type: "hasDietReqs",
          description:
            "Select whether your party has dietary requirements or not. ",
        });
      } else {
        if (hasDietReqs === "true" && dietReqs === "") {
          errors.push({ type: "dietReqs", description: "Enter your message" });
        }
      }
    }

    if (answer === "false") {
      if (doubleCheck === "false") {
        errors.push({
          type: "doubleCheck",
          description: "Please confirm you will not be joining us.",
        });
      }
    }

    console.log(errors);

    if (errors.length == 0) {
      setIsSubmitting(true);

      fetch("/api/rsvp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          names,
          decision: answer === "true",
          dietReqs: dietReqs,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status == "success") {
            // Show message + trigger scroll
            setIsSubmitting(false);
            setFormSubmitted(true);
          } else if (response.status == "failed") {
            let errors = response.errors as MessageError[];
            let responseErrors: Array<MessageError> = [];

            errors.forEach((error: MessageError) => {
              responseErrors.push({
                type: error.type,
                description: error.description,
              });
            });

            setFormErrors(responseErrors);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFormErrors(errors);
    }
  };

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
          { label: "yes", value: "true" },
          { label: "no", value: "false" },
        ]}
        name={"answer"}
        value={answer}
        onChange={(val: string) => {
          setAnswer(val);
        }}
        error={getFormError("answer")}
      />

      {answer === "false" && (
        <Input
          type="radio"
          label="Are you sure you won't be joining us?"
          options={[
            { label: "yes", value: "true" },
            { label: "no", value: "false" },
          ]}
          name={"doubleCheck"}
          value={doubleCheck}
          onChange={(val: string) => {
            setDoubleCheck(val);
          }}
          error={getFormError("doubleCheck")}
        />
      )}

      {answer === "true" && (
        <>
          <Input
            type="radio"
            label="Does anybody have dietary requirements?"
            options={[
              { label: "yes", value: "true" },
              { label: "no", value: "false" },
            ]}
            name={"dietreqs"}
            value={hasDietReqs}
            onChange={(val: string) => {
              setHasDietReqs(val);
              console.log(val);
            }}
            error={getFormError("hasDietReqs")}
          />
        </>
      )}

      {hasDietReqs === "true" && (
        <Textarea
          label="Message"
          onChange={(val: string) => {
            setDietReqs(val);
          }}
          placeholder="Enter any dietary requirements"
          style={{ minWidth: rem(460), minHeight: rem(240) }}
          error={getFormError("dietReqs")}
        />
      )}

      <Button
        isLoading={isSubmitting}
        onClick={handleSubmit}
        disabled={submitDisabled}
      >
        Submit RSVP
      </Button>
    </RsvpPage>
  );
};

export default Message;
