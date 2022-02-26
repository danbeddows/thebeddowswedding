import { useState } from "react";
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
        />
        <Input
          type="text"
          label="Subject"
          onChange={(val: string) => {
            setSubject(val);
          }}
          placeholder="Enter subject"
        />
        <Textarea
          label="Message"
          onChange={(val: string) => {
            setMessage(val);
          }}
        />
      </MessageContainer>
    </>
  );
};

export default Message;
