import { rem } from "polished";
import { useState } from "react";
import Button from "src/components/Button";
import Header from "src/components/Header";
import Input from "src/components/Input";
import Textarea from "src/components/Textarea";
import { MessageContainer } from "./message.styles";

const Message = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <MessageContainer>
        <Input
          type="text"
          label="Your name"
          onChange={(val: string) => {
            setName(val);
          }}
          placeholder="Enter your name"
          style={{ minWidth: rem(280) }}
        />
        <Input
          type="text"
          label="Subject"
          onChange={(val: string) => {
            setSubject(val);
          }}
          placeholder="Enter subject"
          style={{ minWidth: rem(460) }}
        />
        <Textarea
          label="Message"
          onChange={(val: string) => {
            setMessage(val);
          }}
          placeholder="Enter your message"
          style={{ minWidth: rem(460), minHeight: rem(240) }}
        />
        <Button label="Submit" isLoading={true} />
      </MessageContainer>
    </>
  );
};

export default Message;
